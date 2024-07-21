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
import { getCategoriasPromocion } from "@/data/promociones";
// Types
import { Promocion } from "@/types/db";

interface RowActionsProps {
  row: Promocion;
}

export const RowActions = ({ row }: RowActionsProps) => {
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isEnableOpen, setIsEnableOpen] = useState(false);
  const [isDisableOpen, setIsDisableOpen] = useState(false);

  const { data: categoria } = useQuery({
    queryKey: ["categorias_promociones"],
    queryFn: getCategoriasPromocion,
  });

  return (
    <>
      <ResponsiveDialog
        isOpen={isEditOpen}
        setIsOpen={setIsEditOpen}
        title='Actualizar Producto'
        description='Complete el formulario para actualizar un producto'
      >
        {categoria && (
          <FormUpdate
            setIsOpen={setIsEditOpen}
            promocion={row}
            categoria={categoria}
          />
        )}
      </ResponsiveDialog>
      <ResponsiveDialog
        isOpen={isEnableOpen}
        setIsOpen={setIsEnableOpen}
        title='Activar producto'
        description='Complete el formulario para activar el producto'
      >
        <FormEnable
          setIsOpen={setIsEnableOpen}
          cardId={row.id_promocion}
        />
      </ResponsiveDialog>
      <ResponsiveDialog
        isOpen={isDisableOpen}
        setIsOpen={setIsDisableOpen}
        title='Desactivar Producto'
        description='Complete el formulario para desactivar el producto'
      >
        <FormDisable
          setIsOpen={setIsDisableOpen}
          cardId={row.id_promocion}
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
