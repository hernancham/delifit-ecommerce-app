"use client";

import { useState } from "react";

import { ResponsiveDialog } from "@/components/custom/ResposiveDialog";
import { FormCreate } from "./form/FormCreate";
import { FormCreateCat } from "./form/FormCreateCat";
import { Button } from "@/components/ui/button";

import { Plus } from "lucide-react";

export const HeaderPromocion = () => {
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const [isCreateCatOpen, setIsCreateCatOpen] = useState(false);

  return (
    <div className='flex items-center justify-between flex-wrap gap-2'>
      <ResponsiveDialog
        isOpen={isCreateOpen}
        setIsOpen={setIsCreateOpen}
        title='Registrar Promoción'
        description='Complete el formulario para registrar una Promoción'
      >
        <FormCreate setIsOpen={setIsCreateOpen} />
      </ResponsiveDialog>
      <ResponsiveDialog
        isOpen={isCreateCatOpen}
        setIsOpen={setIsCreateCatOpen}
        title='Crear categoría de promoción'
        description='Complete el formulario para crear una categoría de promoción'
      >
        <FormCreateCat setIsOpen={setIsCreateCatOpen} />
      </ResponsiveDialog>
      <h2 className='text-2xl'>Lista de Promociones</h2>
      <div className='flex justify-end gap-4'>
        <Button
          variant='default'
          onClick={() => setIsCreateOpen(true)}
        >
          <Plus className='mr-4 w-4 h-4' />
          <span>Promocion</span>
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
