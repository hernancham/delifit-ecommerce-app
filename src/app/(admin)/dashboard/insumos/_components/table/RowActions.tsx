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

import { useQuery } from "@tanstack/react-query";
// Data
import { getInsumo, getCategoriasInsumo } from "@/data/insumos";
// Types
import { Insumo } from "@/types/db";

interface RowActionsProps {
  row: Insumo;
}

export const RowActions = ({ row }: RowActionsProps) => {
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isEnableOpen, setIsEnableOpen] = useState(false);
  const [isDisableOpen, setIsDisableOpen] = useState(false);

  const { data: categoria } = useQuery({
    queryKey: ["categorias_insumos"],
    queryFn: getCategoriasInsumo,
  });

  return (
    <>
      <ResponsiveDialog
        isOpen={isEditOpen}
        setIsOpen={setIsEditOpen}
        title='Actualizar Insumo'
        description='Complete el formulario para actualizar un insumo'
      >
        {categoria && (
          <FormUpdate
            setIsOpen={setIsEditOpen}
            insumo={row}
            categoria={categoria}
          />
        )}
      </ResponsiveDialog>
      <ResponsiveDialog
        isOpen={isEnableOpen}
        setIsOpen={setIsEnableOpen}
        title='Activar Insumo'
        description='Complete el formulario para activar el insumo'
      >
        <FormEnable
          setIsOpen={setIsEnableOpen}
          cardId={row.id_insumo}
        />
      </ResponsiveDialog>
      <ResponsiveDialog
        isOpen={isDisableOpen}
        setIsOpen={setIsDisableOpen}
        title='Desactivar Insumo'
        description='Complete el formulario para desactivar el insumo'
      >
        <FormDisable
          setIsOpen={setIsDisableOpen}
          cardId={row.id_insumo}
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
