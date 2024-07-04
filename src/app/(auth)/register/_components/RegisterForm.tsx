"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
// actions
import { register } from "@/actions/auth/register";
// esquema de validadcion y types
import { registerSchema, registerType } from "@/schemas/auth";

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
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

// config routes
import { defaultRoute } from "@/config/authRoutes";
// constants
import { TIPOS_DOCUMENTO } from "@/constants/prisma";
import { TipoDocumento } from "@prisma/client";
import { usuarioDefault } from "@/config/imageDefault";

export const RegisterForm = () => {
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const form = useForm<registerType>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      nombre: "",
      apellido: "",
      email: "",
      telefono: "",
      documento: "",
      tipo_doc: TipoDocumento.DNI,
      password: "",
      confirmPassword: "",
      image: usuarioDefault,
    },
  });

  const onSubmit = async (values: registerType) => {
    setError(null);
    startTransition(async () => {
      const response = await register({
        nombre: values.nombre,
        apellido: values.apellido,
        email: values.email,
        telefono: values.telefono,
        documento: values.documento,
        tipo_doc: values.tipo_doc,
        password: values.password,
        confirmPassword: values.confirmPassword,
        image: values.image,
      });
      if (response.error) setError(response.error);
      else router.push(defaultRoute);
    });
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='space-y-6'
      >
        <FormField
          control={form.control}
          name='nombre'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nombre</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  disabled={isPending}
                  type='text'
                  placeholder='John'
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
                  disabled={isPending}
                  type='text'
                  placeholder='Doe'
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
              <FormLabel>Correo electrónico</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  disabled={isPending}
                  type='email'
                  placeholder=''
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
              <FormLabel>Teléfono</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  disabled={isPending}
                  type='text'
                  placeholder=''
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
              <FormLabel>Número de documento</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  disabled={isPending}
                  type='text'
                  placeholder=''
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
                {...field}
                disabled={isPending}
                onValueChange={field.onChange}
                value={field.value}
                defaultValue={field.value}
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue
                      placeholder='Selecciona un tipo de documento'
                      defaultValue={field.value}
                    />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {TIPOS_DOCUMENTO.map((tipo) => (
                    <SelectItem
                      key={tipo}
                      value={tipo}
                    >
                      {tipo}
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
          name='password'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Contraseña</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  disabled={isPending}
                  type='password'
                  placeholder=''
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='confirmPassword'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Confirmar Contraseña</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  disabled={isPending}
                  type='password'
                  placeholder=''
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {error && <FormMessage>{error}</FormMessage>}
        <Button
          disabled={isPending}
          type='submit'
          variant='default'
          className='w-full'
        >
          Registrar
        </Button>
      </form>
    </Form>
  );
};
