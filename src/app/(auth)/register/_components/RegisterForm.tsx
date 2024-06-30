"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { useMutation } from "@tanstack/react-query";
import { createUsuario } from "@/actions/usuario/create-usuario";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema, registerType } from "./registerSchema";

import { TIPOS_DOCUMENTO } from "@/constants/prisma";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
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
import { loginRoute } from "@/config/authRoutes";
// constants
import { usuarioDefault } from "@/config/imageDefault";

export const RegisterForm = () => {
  const router = useRouter();

  const form = useForm<registerType>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      nombre: "",
      apellido: "",
      email: "",
      telefono: "",
      documento: "",
      tipo_doc: "DNI",
      password: "",
      confirmPassword: "",
      image: usuarioDefault,
    },
  });

  const {
    data,
    mutate: registrarUsuario,
    isError,
    isPending,
  } = useMutation({
    mutationFn: createUsuario,
    onSuccess: () => {
      router.push(loginRoute);
    },
  });

  const onSubmit = (values: registerType) => {
    registrarUsuario({
      nombre: values.nombre,
      apellido: values.apellido,
      email: values.email,
      telefono: values.telefono,
      documento: values.documento,
      tipo_doc: values.tipo_doc,
      password: values.password,
      image: values.image,
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Regístrate</CardTitle>
        <CardDescription>
          Aquí puedes registrarte para crear una cuenta nueva.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
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
            <Button
              disabled={isPending}
              type='submit'
              variant='default'
              className='w-full'
            >
              Guardar
            </Button>
          </form>
        </Form>
      </CardContent>
      <CardFooter>
        ¿Ya tienes una cuenta? <Link href={loginRoute}>Iniciar sesión</Link>
      </CardFooter>
    </Card>
  );
};
