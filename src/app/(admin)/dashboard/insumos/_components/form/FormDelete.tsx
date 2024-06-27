"use client";

import { Dispatch, SetStateAction } from "react";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { formSchema, type formType } from "./SchemaDelete";

import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";

import { Loader2 } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

import axios from "axios";
import { EliminarInsumo } from "@/data/Insumo";

export const FormDelete = ({
  cardId,
  setIsOpen,
}: {
  cardId: string;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const { toast } = useToast();

  const form = useForm<formType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      cardId: cardId,
    },
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async () => {
    try {
      await EliminarInsumo(form.getValues("cardId"));
      setIsOpen(false);
      toast({});
    } catch (error) {
      console.log(error);
    }
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
            onClick={() => setIsOpen(false)}
          >
            Cancel
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
                Deleting
              </>
            ) : (
              <span>Delete</span>
            )}
          </Button>
        </div>
      </form>
    </Form>
  );
};
