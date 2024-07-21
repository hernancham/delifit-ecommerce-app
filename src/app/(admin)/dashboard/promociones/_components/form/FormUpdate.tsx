"use client";

import { type Dispatch, type SetStateAction } from "react";

import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { formSchema, type formType } from "./SchemaUpdate";
import DatePicker from "react-datepicker";

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
import { updatePromocionById } from "@/actions/promocion/update-promocion";
// Types
import { CategoriaPromocion, Promocion } from "@/types/db";
import { updateCategoriaPromocionById } from "@/actions/categoria/promocion/update-categoria";
import { promocionDefault } from "@/config/imageDefault";
import { Trigger } from "@radix-ui/react-tooltip";

interface FormUpdateProps {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  promocion: Promocion;
  categoria: CategoriaPromocion[];
}

export const FormUpdate = ({
  setIsOpen,
  promocion,
  categoria,
}: FormUpdateProps) => {
  const queryClient = useQueryClient();

  const { mutate: actualizarPromocion } = useMutation({
    mutationFn: updatePromocionById,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["promociones"],
      });
      toast({
        title: "Promoción Actualizada",
        description: "La promoción ha sido actualizado exitosamente",
        variant: "default",
      });
    },
  });

  const form = useForm<formType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nombre: promocion.nombre,
      descripcion: promocion.descripcion,
      precio_base: promocion.precio_base,
      precio_oferta: promocion.precio_oferta,
      id_cat_promocion: promocion.id_cat_promocion,
      fecha_inicio: promocion.fecha_inicio,
      fecha_fin: promocion.fecha_fin,
      img_url: promocion.img_url,
    },
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit = (values: formType) => {
    try {
      actualizarPromocion({
        nombre: values.nombre,
        descripcion: values.descripcion,
        precio_base: values.precio_base,
        precio_oferta: values.precio_oferta,
        fecha_inicio: values.fecha_inicio,
        fecha_fin: values.fecha_fin,
        img_url: values.img_url,
        id_promocion: promocion.id_promocion,
        dia_promocion: values.dia_promocion,
        id_cat_promocion: values.id_cat_promocion,
        productos: [],
      });
      setIsOpen(false);
    } catch (error) {
      toast({
        title: "Error",
        description: "Ocurrio un error al actualizar la promoción",
        variant: "destructive",
      });
    }
  };

  const onCancel = () => {
    // form.reset();
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
                <FormLabel>Nombre</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    disabled={isLoading}
                    placeholder='Nueva promoción'
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
            name='precio_oferta'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Precio Oferta</FormLabel>
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
            name='id_cat_promocion'
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
                        key={cat.id_cat_promocion}
                        value={cat.id_cat_promocion}
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
            name='fecha_inicio'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Fecha Inicio</FormLabel>
                <FormControl>
                  <Controller
                    control={form.control}
                    name='fecha_inicio'
                    render={({ field }) => (
                      <DatePicker
                        selected={field.value}
                        onChange={field.onChange}
                        dateFormat='dd/MM/yyyy'
                        placeholderText='Seleccione una fecha'
                      />
                    )}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='fecha_fin'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Fecha Fin</FormLabel>
                <FormControl>
                  <Controller
                    control={form.control}
                    name='fecha_fin'
                    render={({ field }) => (
                      <DatePicker
                        selected={field.value}
                        onChange={field.onChange}
                        dateFormat='dd/MM/yyyy'
                        placeholderText='Seleccione una fecha'
                      />
                    )}
                  />
                </FormControl>
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
                      form.setValue("img_url", promocionDefault);
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
