"use client";

import { useState } from "react";

import { ResponsiveDialog } from "@/components/custom/ResposiveDialog";
import { FormCreate } from "./form/FormCreate";
import { FormCreateCat } from "./form/FormCreateCat";
import { Button } from "@/components/ui/button";

import { Plus } from "lucide-react";

export const HeaderInsumos = () => {
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const [isCreateCatOpen, setIsCreateCatOpen] = useState(false);
  return (
    <div className='flex items-center justify-between'>
      <h2 className='text-2xl'>Lista de Insumos</h2>
      <ResponsiveDialog
        isOpen={isCreateOpen}
        setIsOpen={setIsCreateOpen}
        title='Crear Insumo'
        description='Complete el formulario para crear un insumo'
      >
        <FormCreate setIsOpen={setIsCreateOpen} />
      </ResponsiveDialog>
      <ResponsiveDialog
        isOpen={isCreateCatOpen}
        setIsOpen={setIsCreateCatOpen}
        title='Crear Categoria Insumo'
        description='Complete el formulario para crear una categoria de insumo'
      >
        <FormCreateCat setIsOpen={setIsCreateCatOpen} />
      </ResponsiveDialog>
      <div className='flex justify-end gap-4'>
        <Button
          variant='secondary'
          onClick={() => setIsCreateOpen(true)}
        >
          <Plus className='mr-4 w-4 h-4' />
          <span>Nuevo Insumo</span>
        </Button>
        <Button
          variant='secondary'
          onClick={() => setIsCreateCatOpen(true)}
        >
          <Plus className='mr-4 w-4 h-4' />
          <span>Nueva Categoria</span>
        </Button>
      </div>
    </div>
  );
};
