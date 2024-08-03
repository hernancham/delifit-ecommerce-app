"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema, type formType } from "./SchemaUpdate";
import bcryptjs from "bcryptjs";
import { useRouter } from "next/navigation";

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
import { updateUsuarioById } from "@/actions/usuario/update-usuario-for-user";
// config and constants
import { usuarioDefault } from "@/config/imageDefault";
import { TIPOS_DOCUMENTO } from "@/constants/prisma";

// Types
import { Usuario } from "@/types/db";

interface FormUpdateProps {
  usuario: Usuario;
}

export const FormUpdate = ({ usuario }: FormUpdateProps) => {
  const queryClient = useQueryClient();
  const router = useRouter();
  const { mutate: actualizarUsuario } = useMutation({
    mutationFn: updateUsuarioById,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["usuarios"],
      });

      toast({
        title: "Usuario Actualizado",
        description: "Actualizaste tus datos correctamente",
        variant: "default",
      });
    },
  });

  const form = useForm<formType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nombre: usuario.nombre,
      apellido: usuario.apellido,
      telefono: usuario.telefono,
      email: usuario.email,
      documento: usuario.documento,
      tipo_doc: usuario.tipo_doc,
      //password: "",
      image: usuario.image,
    },
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: formType) => {
    try {
      const updatedData: any = {
        id_usuario: usuario.id_usuario,
        nombre: values.nombre,
        apellido: values.apellido,
        email: values.email,
        telefono: values.telefono,
        documento: values.documento,
        tipo_doc: values.tipo_doc,
        image: values.image,
      };
      // Verificar si se proporcionó una nueva contraseña y si es diferente de la actual
      /* if (values.password && values.password !== "") {
        updatedData.password = bcryptjs.hashSync(values.password, 10);
      } */
      actualizarUsuario(updatedData);

      router.push("/mi-cuenta");
    } catch (error) {
      toast({
        title: "Error",
        description: "Ocurrió un error al actualizar el usuario",
        variant: "destructive",
      });
    }
  };

  return (
    <div className='flex justify-center items-center min-h-screen bg-white dark:bg-gray-900'>
      <div className='max-w-lg w-full p-6 bg-gray-100 dark:bg-gray-800 rounded shadow-md mt-16'>
        <div className='text-2xl text-center text-gray-900 dark:text-gray-100 pt-4'>
          Actualizar datos
        </div>
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
                    <FormLabel className='text-gray-900 dark:text-gray-100'>
                      Nombres
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        disabled={isLoading}
                        placeholder=''
                        type='text'
                        className='bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400'
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
                    <FormLabel className='text-gray-900 dark:text-gray-100'>
                      Apellido
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        disabled={isLoading}
                        placeholder=''
                        type='text'
                        className='bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400'
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='telefono'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className='text-gray-900 dark:text-gray-100'>
                      Telefono
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        disabled={isLoading}
                        placeholder=''
                        type='text'
                        className='bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400'
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
                    <FormLabel className='text-gray-900 dark:text-gray-100'>
                      Email
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        disabled={isLoading}
                        placeholder=''
                        type='text'
                        className='bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400'
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
                    <FormLabel className='text-gray-900 dark:text-gray-100'>
                      Documento
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        disabled={isLoading}
                        placeholder=''
                        type='text'
                        className='bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400'
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
                    <FormLabel className='text-gray-900 dark:text-gray-100'>
                      Tipo de documento
                    </FormLabel>
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
                            className='text-gray-900 dark:text-gray-100'
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
              {/* <FormField
                control={form.control}
                name='password'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className='text-gray-900 dark:text-gray-100'>Contraseña</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        disabled={isLoading}
                        placeholder='Ingrese su nueva contraseña'
                        type='password'
                        className='bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400'
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              /> */}
              <FormField
                control={form.control}
                name='image'
                render={({ field: { value, onChange, ...fieldProps } }) => (
                  <FormItem>
                    <FormLabel className='text-gray-900 dark:text-gray-100'>
                      Imagen
                    </FormLabel>
                    <FormControl>
                      <ImageUpload
                        preview={usuario?.image}
                        onSuccess={(url) => {
                          form.setValue("image", url);
                          toast({
                            title: "Imagen subida",
                            description:
                              "La imagen ha sido subida exitosamente",
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
                        className='size-40 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 outline-dashed border-gray-400 dark:border-gray-700 rounded-lg'
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className='flex items-center justify-end gap-x-2'>
              <Button
                type='submit'
                disabled={isLoading}
                variant='outline'
                className='bg-gray-100 dark:bg-gray-800 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700'
              >
                Actualizar
              </Button>
              <Button
                type='button'
                disabled={isLoading}
                variant='default'
                className='bg-gray-100 dark:bg-gray-800 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700'
                onClick={() => form.reset()}
              >
                Cancelar
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};
