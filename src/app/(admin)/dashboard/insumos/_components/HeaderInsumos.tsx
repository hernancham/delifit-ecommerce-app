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
    <div className='flex items-center justify-between flex-wrap gap-2'>
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
      <h2 className='text-2xl'>Lista de Insumos</h2>
      <div className='flex justify-end gap-4'>
        <Button
          variant='default'
          onClick={() => setIsCreateOpen(true)}
        >
          <Plus className='mr-4 w-4 h-4' />
          <span>Insumo</span>
        </Button>
        <Button
          variant='default'
          onClick={() => setIsCreateCatOpen(true)}
        >
          <Plus className='mr-4 w-4 h-4' />
          <span>Categoría</span>
        </Button>
      </div>
    </div>
  );
};
