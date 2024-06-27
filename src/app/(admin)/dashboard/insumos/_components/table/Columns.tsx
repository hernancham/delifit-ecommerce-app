"use client";

import { ColumnDef, SortingFn } from "@tanstack/react-table";
// Types
import { HeaderOptions } from "./HeaderOptions";

import { RowActions } from "./RowActions";
import { TipoMedida } from "@prisma/client";
import { Decimal } from "@prisma/client/runtime/library";

import { Insumo } from "@/types/db";

export const ColInsumos: ColumnDef<Insumo>[] = [
  {
    id: "Imagen",
    accessorKey: "img_url",
    header: "Imagen",
    cell: ({ row }) => {
      const { img_url, nombre } = row.original;
      return (
        <div className='flex items-center justify-center h-10 w-10'>
          <img
            src={
              typeof img_url === "string" ? img_url : "/images/company-icon.png"
            }
            alt={nombre}
            width={40}
            height={40}
            className='rounded-full'
          />
        </div>
      );
    },
  },
  {
    accessorKey: "nombre",
    header: ({ column }) => (
      <HeaderOptions
        column={column}
        title='Nombre'
      />
    ),
  },
  {
    id: "Categoria",
    accessorKey: "cat_insumo.nombre",
    header: ({ column }) => (
      <HeaderOptions
        column={column}
        title='Categoria'
      />
    ),
    cell: ({ row }) => {
      const { cat_insumo } = row.original;
      return <span>{cat_insumo.nombre}</span>;
    },
    //sortingFn: sortCatFn,
  },
  {
    accessorKey: "cantidad",
    header: ({ column }) => (
      <HeaderOptions
        column={column}
        title='Cantidad'
      />
    ),
  },
  {
    accessorKey: "medida",
    header: ({ column }) => (
      <HeaderOptions
        column={column}
        title='Medida'
      />
    ),
  },
  {
    accessorKey: "activo",
    header: "Visibilidad",
  },
  {
    accessorKey: "createdAt",
    header: "Fecha Creación",
    cell: ({ row }) => {
      const { createdAt } = row.original;
      const date = new Date(createdAt);
      return date.toLocaleDateString();
    },
  },
  {
    accessorKey: "updatedAt",
    header: "Fecha Actualización",
    cell: ({ row }) => {
      const { updatedAt } = row.original;
      const date = new Date(updatedAt);
      return date.toLocaleDateString();
    },
  },
  {
    id: "Acciones",
    header: "Acciones",
    cell: ({ row }) => {
      const { id_insumo } = row.original;
      return <RowActions id_row={id_insumo} />;
    },
  },
];
