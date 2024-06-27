"use client";

import { useState } from "react";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

import { MoreHorizontal, Edit, Copy, Archive } from "lucide-react";

import { ResponsiveDialog } from "@/components/custom/ResposiveDialog";
import { FormUpdate } from "../form/FormUpdate";
/* import { FormDelete } from "../form/FormDelete"; */

interface RowActionsProps {
  id_row: string;
}

export const RowActions = ({ id_row }: RowActionsProps) => {
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);

  return (
    <>
      <ResponsiveDialog
        isOpen={isEditOpen}
        setIsOpen={setIsEditOpen}
        title='Actualizar Insumo'
        description='Complete el formulario para actualizar un insumo'
      >
        <FormUpdate
          cardId={id_row}
          setIsOpen={setIsEditOpen}
        />
      </ResponsiveDialog>
      <ResponsiveDialog
        isOpen={isDeleteOpen}
        setIsOpen={setIsDeleteOpen}
        title='Eliminar Insumo'
        description='¿Estás seguro de que deseas eliminar este insumo?'
      >
        <span>Eliminar</span>
        {/* <FormDelete
          cardId={id_row}
          setIsOpen={setIsDeleteOpen}
        /> */}
      </ResponsiveDialog>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant='ghost'
            className='h-8 w-8 p-0'
          >
            <span className='sr-only'>Abrir Menu</span>
            <MoreHorizontal className='h-5 w-5 ' />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align='end'>
          <DropdownMenuLabel>Acciones</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            onClick={() => setIsEditOpen(true)}
            className='cursor-pointer'
          >
            <Edit className='mr-2 h-4 w-4' />
            Actualizar
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => setIsDeleteOpen(true)}
            className='cursor-pointer'
          >
            <Archive className='mr-2 h-4 w-4' />
            Eliminar
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};
