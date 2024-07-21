"use client";

import { useRouter } from "next/navigation";
import { type Dispatch, type SetStateAction } from "react";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { formSchema, type formType } from "./SchemaCreateCat";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";

import { useMutation } from "@tanstack/react-query";

// actions
import { createCategoriaPromocion } from "@/actions/categoria/promocion/create-categoria";

interface FormCreateCatProps {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export const FormCreateCat = ({ setIsOpen }: FormCreateCatProps) => {
  const router = useRouter();

  const { mutate: crearCatPromocion } = useMutation({
    mutationFn: createCategoriaPromocion,
    onSuccess: () => {
      toast({
        title: "Categoria de Promoción Creada",
        description: "La categoria de promoción ha sido creado exitosamente",
        variant: "default",
      });
    },
  });

  const form = useForm<formType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nombre: "",
    },
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit = (values: formType) => {
    try {
      crearCatPromocion({
        nombre: values.nombre,
      });
      router.refresh();
      setIsOpen(false);
    } catch (error) {
      toast({
        title: "Error",
        description: "Ocurrio un error al crear la categoria de la promoción",
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
                    placeholder='Nueva promoción'
                    type='text'
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
