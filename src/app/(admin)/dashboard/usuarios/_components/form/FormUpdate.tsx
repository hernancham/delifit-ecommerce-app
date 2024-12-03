"use client";

import { type Dispatch, type SetStateAction } from "react";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { formSchema, type formType } from "./SchemaUpdate";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
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
import { updateUsuarioById } from "@/actions/usuario/update-usuario";
// config and constants
import { usuarioDefault } from "@/config/imageDefault";
import { TIPOS_DOCUMENTO } from "@/constants/prisma";
import { ROLES } from "@/constants/prisma";

// Types
import { Usuario } from "@/types/db";

interface FormUpdateProps {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  usuario: Usuario;
}

export const FormUpdate = ({ setIsOpen, usuario }: FormUpdateProps) => {
  const queryClient = useQueryClient();

  const { mutate: actualizarUsuario } = useMutation({
    mutationFn: updateUsuarioById,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["usuarios"],
      });
      toast({
        title: "Usuario Actualizado",
        description: "El usuario ha sido actualizado exitosamente",
        variant: "default",
      });
    },
  });

  const form = useForm<formType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nombre: usuario.nombre,
      apellido: usuario.apellido,
      rol: usuario.rol,
      telefono: usuario.telefono,
      email: usuario.email,
      documento: usuario.documento,
      tipo_doc: usuario.tipo_doc,
      image: usuario.image,
    },
  });

  const isLoading = form.formState.isSubmitting;
  const isAdmin = usuario.rol === "ADMIN";

  const onSubmit = (values: formType) => {
    try {
      actualizarUsuario({
        id_usuario: usuario.id_usuario,
        nombre: values.nombre,
        apellido: values.apellido,
        rol: values.rol,
        email: values.email,
        telefono: values.telefono,
        documento: values.documento,
        tipo_doc: values.tipo_doc,
        image: values.image,
      });
      setIsOpen(false);
    } catch (error) {
      toast({
        title: "Error",
        description: "Ocurrio un error al actualizar el usuario",
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
        <div className='flex-1 max-h-[70vh] overflow-y-auto px-6 py-6'>
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
                    placeholder=''
                    type='text'
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='apellido'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Apellido</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    disabled={isLoading}
                    placeholder=''
                    type='text'
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='rol'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Rol</FormLabel>
                <Select
                  disabled={isLoading || isAdmin} // Deshabilitar si es ADMIN
                  onValueChange={field.onChange}
                  value={field.value}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue
                        placeholder='Rol'
                        defaultValue={field.value}
                      />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {ROLES.map((rol) => (
                      <SelectItem
                        key={rol}
                        value={rol}
                      >
                        {rol}
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
            name='telefono'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Telefono</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    disabled={isLoading}
                    placeholder=''
                    type='text'
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    disabled={isLoading}
                    placeholder=''
                    type='text'
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='documento'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Documento</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    disabled={isLoading}
                    placeholder=''
                    type='text'
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='tipo_doc'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Tipo de documento</FormLabel>
                <Select
                  disabled={isLoading}
                  onValueChange={field.onChange}
                  value={field.value}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue
                        placeholder='Tipo de documento'
                        defaultValue={field.value}
                      />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {TIPOS_DOCUMENTO.map((doc) => (
                      <SelectItem
                        key={doc}
                        value={doc}
                      >
                        {doc}
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
            name='image'
            render={({ field: { value, onChange, ...fieldProps } }) => (
              <FormItem>
                <FormLabel>Imagen</FormLabel>
                <FormControl>
                  <ImageUpload
                    preview={usuario?.image}
                    onSuccess={(url) => {
                      form.setValue("image", url);
                      toast({
                        title: "Imagen subida",
                        description: "La imagen ha sido subida exitosamente",
                        variant: "default",
                      });
                    }}
                    onError={(error) => {
                      form.setValue("image", usuarioDefault);
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
