"use client";

import Image from "next/image";
import Link from "next/link";

import { useMutation } from "@tanstack/react-query";
import { login } from "@/actions/auth/login";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, loginType } from "./loginSchema";

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
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const LoginForm = () => {
  const form = useForm<loginType>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      telefono: "",
      password: "",
    },
  });

  const {
    data,
    mutate: loginCredentials,
    isError,
    isPending,
  } = useMutation({
    mutationFn: login,
  });

  const onSubmit = async (values: loginType) => {
    await loginCredentials({
      telefono: values.telefono,
      password: values.password,
      callbackUrl: undefined,
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Login</CardTitle>
        <CardDescription>
          Ingrese su número de teléfono y contraseña para acceder a su cuenta.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
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
            <Button
              disabled={isPending}
              type='submit'
              variant='default'
              className='w-full'
            >
              Login
            </Button>
          </form>
        </Form>
      </CardContent>
      <CardFooter></CardFooter>
    </Card>
  );
};
