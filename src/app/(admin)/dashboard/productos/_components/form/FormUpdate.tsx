"use client";

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

import { useMutation, useQueryClient } from "@tanstack/react-query";

// actions
import { updateProductoById } from "@/actions/producto/update-producto";
// config and constants
import { productoDefault } from "@/config/imageDefault";
import { TipoMedida } from "@prisma/client";

// Types
import { CategoriaProducto, Producto } from "@/types/db";

interface FormUpdateProps {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  producto: Producto;
  categoria: CategoriaProducto[];
}

export const FormUpdate = ({
  setIsOpen,
  producto,
  categoria,
}: FormUpdateProps) => {
  const queryClient = useQueryClient();

  /* const { data: insumo, isLoading: isInsumoLoading } = useQuery({
    queryKey: ["insumo", cardId],
    queryFn: () => getInsumo(cardId),
  }); */

  const { mutate: actualizarProducto } = useMutation({
    mutationFn: updateProductoById,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["productos"],
      });
      toast({
        title: "Productos Actualizado",
        description: "El producto ha sido actualizado exitosamente",
        variant: "default",
      });
    },
  });

  const form = useForm<formType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nombre: producto.nombre,
      descripcion: producto.descripcion,
      precio_base: producto.precio_base,
      id_cat_producto: producto.id_cat_producto,
      img_url: producto.img_url,
    },
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit = (values: formType) => {
    try {
      actualizarProducto({
        nombre: values.nombre,
        descripcion: values.descripcion,
        precio_base: values.precio_base,
        img_url: values.img_url,
        id_producto: producto.id_producto,
        id_cat_producto: values.id_cat_producto,
        insumos: [],
      });
      setIsOpen(false);
    } catch (error) {
      toast({
        title: "Error",
        description: "Ocurrio un error al actualizar el producto",
        variant: "destructive",
      });
    }
  };

  const onCancel = () => {
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
                    placeholder='Nuevo producto'
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
                  disabled={isLoading}
                  onValueChange={field.onChange}
                  value={String(field.value)}
                  defaultValue={String(field.value)}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue
                        placeholder='Selecciona una Categoría'
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
            Actualizar
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
