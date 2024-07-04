"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
// actions
import { login } from "@/actions/auth/login";
// esquema de validadcion y types
import { loginSchema, loginType } from "@/schemas/auth";

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
import { defaultRoute } from "@/config/authRoutes";

export const LoginForm = () => {
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const form = useForm<loginType>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      telefono: "",
      password: "",
    },
  });

  const onSubmit = async (values: loginType) => {
    setError(null);
    startTransition(async () => {
      const response = await login({
        telefono: values.telefono,
        password: values.password,
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
          name='telefono'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Teléfono</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  disabled={isPending}
                  type='text'
                  placeholder='ingresa tu numero'
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
                  placeholder='ingresa tu contraseña'
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
          Ingresar
        </Button>
      </form>
    </Form>
  );
};
