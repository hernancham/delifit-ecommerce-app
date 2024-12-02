"use client";

import { Dispatch, SetStateAction } from "react";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { formSchema, type formType } from "./SchemaActivation";

import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";

import { Loader2 } from "lucide-react";

import { toast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateActivityPromocionById } from "@/actions/promocion/update-promocion";

export const FormEnable = ({
  cardId,
  setIsOpen,
}: {
  cardId: string;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const router = useRouter();
  const queryClient = useQueryClient();

  const { mutate: eliminarPromocion } = useMutation({
    mutationFn: updateActivityPromocionById,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["promociones"],
      });
      toast({
        title: "Promoción Activada",
        description: "La promoción ha sido activada exitosamente",
        variant: "default",
      });
    },
  });

  const form = useForm<formType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      cardId: cardId,
      visibility: true,
    },
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit = () => {
    try {
      eliminarPromocion({
        id_promocion: cardId,
        activo: true,
      });
      router.refresh();
      setIsOpen(false);
    } catch (error) {
      toast({
        title: "Error",
        description: "Ocurrio un error al activar la promoción",
        variant: "destructive",
      });
    }
  };

  const onCancel = () => {
    router.refresh();
    setIsOpen(false);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='space-y-6  sm:px-0 px-4'
      >
        <div className='w-full flex justify-center sm:space-x-6'>
          <Button
            size='lg'
            variant='outline'
            disabled={isLoading}
            className='w-full hidden sm:block'
            type='button'
            onClick={() => onCancel()}
          >
            Cancelar
          </Button>
          <Button
            size='lg'
            type='submit'
            disabled={isLoading}
            className='w-full bg-blue-500 hover:bg-blue-400'
          >
            {isLoading ? (
              <>
                <Loader2 className='mr-2 h-4 w-4 animate-spin' />
                Activando...
              </>
            ) : (
              <span>Activar</span>
            )}
          </Button>
        </div>
      </form>
    </Form>
  );
};

export const FormDisable = ({
  cardId,
  setIsOpen,
}: {
  cardId: string;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const router = useRouter();
  const queryClient = useQueryClient();

  const { mutate: eliminarPromocion } = useMutation({
    mutationFn: updateActivityPromocionById,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["promociones"],
      });
      toast({
        title: "Promoción Desactivada",
        description: "La promoción ha sido desactivada exitosamente",
        variant: "default",
      });
    },
  });

  const form = useForm<formType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      cardId: cardId,
      visibility: false,
    },
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit = () => {
    try {
      eliminarPromocion({
        id_promocion: cardId,
        activo: false,
      });
      router.refresh();
      setIsOpen(false);
    } catch (error) {
      toast({
        title: "Error",
        description: "Ocurrio un error al desactivar la promoción",
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
        className='space-y-6  sm:px-0 px-4'
      >
        <div className='w-full flex justify-center sm:space-x-6'>
          <Button
            size='lg'
            variant='outline'
            disabled={isLoading}
            className='w-full hidden sm:block'
            type='button'
            onClick={() => onCancel()}
          >
            Cancelar
          </Button>
          <Button
            size='lg'
            type='submit'
            disabled={isLoading}
            className='w-full bg-red-500 hover:bg-red-400'
          >
            {isLoading ? (
              <>
                <Loader2 className='mr-2 h-4 w-4 animate-spin' />
                Desactivando...
              </>
            ) : (
              <span>Desactivar</span>
            )}
          </Button>
        </div>
      </form>
    </Form>
  );
};
