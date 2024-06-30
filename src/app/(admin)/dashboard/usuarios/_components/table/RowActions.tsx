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

interface RowActionsProps {
  id_row: string;
  activo: boolean;
}

export const RowActions = ({ id_row, activo }: RowActionsProps) => {
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
        <span>Working...</span>
        {/* <FormUpdate
          cardId={id_row}
          setIsOpen={setIsEditOpen}
        /> */}
      </ResponsiveDialog>
      <ResponsiveDialog
        isOpen={isEnableOpen}
        setIsOpen={setIsEnableOpen}
        title='Activar Insumo'
        description='Complete el formulario para activar el insumo'
      >
        <FormEnable
          cardId={id_row}
          setIsOpen={setIsEnableOpen}
        />
      </ResponsiveDialog>
      <ResponsiveDialog
        isOpen={isDisableOpen}
        setIsOpen={setIsDisableOpen}
        title='Desactivar Insumo'
        description='Complete el formulario para desactivar el insumo'
      >
        <FormDisable
          cardId={id_row}
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
          {activo ? (
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
