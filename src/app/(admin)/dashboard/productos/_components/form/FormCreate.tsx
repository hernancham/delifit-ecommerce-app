"use client";

import { useRouter } from "next/navigation";
import { type Dispatch, type SetStateAction } from "react";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { formSchema, type formType } from "./SchemaCreate";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";

import { ImageUpload } from "@/components/custom/ImageUpload";

import axios from "axios";
import { useQuery, useMutation } from "@tanstack/react-query";

// actions
import { createProducto } from "@/actions/producto/create-producto";
// config and constants
import { productoDefault } from "@/config/imageDefault";
import { TIPOS_MEDIDA } from "@/constants/prisma";
// Types
import { CategoriaProducto } from "@/types/db";
import { TipoMedida } from "@prisma/client";

const getCategoriasProducto = async () => {
  try {
    const response = await axios.get<CategoriaProducto[]>(
      "/api/categoria/producto",
      {
        params: {
          activo: "true",
        },
      }
    );
    return response.data;
  } catch (error) {
    throw new Error("Error al leer las categorias de insumos");
  }
};

interface FormCreateProps {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export const FormCreate = ({ setIsOpen }: FormCreateProps) => {
  const router = useRouter();

  const { data: categoria, isLoading: isCatLoading } = useQuery({
    queryKey: ["categorias_insumos"],
    queryFn: getCategoriasProducto,
  });

  const { mutate: crearProducto } = useMutation({
    mutationFn: createProducto,
    onSuccess: () => {
      toast({
        title: "Insumo Creado",
        description: "El insumo ha sido creado exitosamente",
        variant: "default",
      });
    },
  });

  const form = useForm<formType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nombre: "",
      descripcion: "",
      precio_base: 0,
      id_cat_producto: categoria?.[0]?.id_cat_producto ?? "",
      img_url: productoDefault,
    },
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit = (values: formType) => {
    try {
      crearProducto({
        nombre: values.nombre,
        descripcion: values.descripcion,
        precio_base: values.precio_base,
        id_cat_prodcuto: values.id_cat_producto,
        img_url: values.img_url,
        insumos: [],
      });
      router.refresh();
      setIsOpen(false);
    } catch (error) {
      toast({
        title: "Error",
        description: "Ocurrio un error al crear el insumo",
        variant: "destructive",
      });
    }
  };

  const onCancel = () => {
    // form.reset();
    router.refresh();
    setIsOpen(false);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='space-y-6'
      >
        <div className='space-y-4'>
          <FormField
            control={form.control}
            name='nombre'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nombres</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    disabled={isLoading}
                    placeholder='Nuevo insumo'
                    type='text'
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='descripcion'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Descripcion</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    disabled={isLoading}
                    type='text'
                    placeholder='0'
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='precio_base'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Precio Base</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    disabled={isLoading}
                    type='number'
                    placeholder='0'
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='id_cat_producto'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Categoria</FormLabel>
                <Select
                  disabled={isLoading || isCatLoading}
                  onValueChange={field.onChange}
                  value={String(field.value)}
                  defaultValue={String(field.value)}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue
                        placeholder='Selecciona una Categoria'
                        defaultValue={field.value}
                      />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {categoria?.map((cat) => (
                      <SelectItem
                        key={cat.id_cat_producto}
                        value={cat.id_cat_producto}
                      >
                        {cat.nombre}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='img_url'
            render={({ field: { value, onChange, ...fieldProps } }) => (
              <FormItem>
                <FormLabel>Imagen</FormLabel>
                <FormControl>
                  <ImageUpload
                    onSuccess={(url) => {
                      form.setValue("img_url", url);
                      toast({
                        title: "Imagen subida",
                        description: "La imagen ha sido subida exitosamente",
                        variant: "default",
                      });
                    }}
                    onError={(error) => {
                      form.setValue("img_url", productoDefault);
                      toast({
                        title: "Error",
                        description: error,
                        variant: "destructive",
                      });
                    }}
                    className='size-40 bg-inherit hover:bg-secondary outline-dashed border-primary rounded-lg'
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className=' flex items-center justify-end gap-x-2'>
          <Button
            type='submit'
            disabled={isLoading}
            variant='outline'
          >
            Guardar
          </Button>
          <Button
            type='button'
            disabled={isLoading}
            variant='default'
            onClick={() => onCancel()}
          >
            Cancelar
          </Button>
        </div>
      </form>
    </Form>
  );
};
