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

import { MoreHorizontal, Edit, Eye, EyeOff } from "lucide-react";

import { ResponsiveDialog } from "@/components/custom/ResposiveDialog";
import { FormUpdate } from "../form/FormUpdate";
import { FormEnable, FormDisable } from "../form/FormActivation";
import { Usuario } from "@/types/db";

interface RowActionsProps {
  row: Usuario;
}

export const RowActions = ({ row }: RowActionsProps) => {
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isEnableOpen, setIsEnableOpen] = useState(false);
  const [isDisableOpen, setIsDisableOpen] = useState(false);

  return (
    <>
      <ResponsiveDialog
        isOpen={isEditOpen}
        setIsOpen={setIsEditOpen}
        title='Actualizar Insumo'
        description='Complete el formulario para actualizar un insumo'
      >
        <FormUpdate
          setIsOpen={setIsEditOpen}
          usuario={row}
        />
      </ResponsiveDialog>
      <ResponsiveDialog
        isOpen={isEnableOpen}
        setIsOpen={setIsEnableOpen}
        title='Activar Usuario'
        description='Complete el formulario para activar el insumo'
      >
        <FormEnable
          cardId={row.id_usuario}
          setIsOpen={setIsEnableOpen}
        />
      </ResponsiveDialog>
      <ResponsiveDialog
        isOpen={isDisableOpen}
        setIsOpen={setIsDisableOpen}
        title='Desactivar Usuario'
        description='Complete el formulario para desactivar el insumo'
      >
        <FormDisable
          cardId={row.id_usuario}
          setIsOpen={setIsDisableOpen}
        />
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
          {row.activo ? (
            <DropdownMenuItem
              onClick={() => setIsDisableOpen(true)}
              className='cursor-pointer'
            >
              <EyeOff className='mr-2 h-4 w-4' />
              Desactivar
            </DropdownMenuItem>
          ) : (
            <DropdownMenuItem
              onClick={() => setIsEnableOpen(true)}
              className='cursor-pointer'
            >
              <Eye className='mr-2 h-4 w-4' />
              Activar
            </DropdownMenuItem>
          )}
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};
