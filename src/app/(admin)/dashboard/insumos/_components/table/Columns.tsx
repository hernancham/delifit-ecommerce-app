"use client";

import { ColumnDef, SortingFn } from "@tanstack/react-table";
// Types
import { HeaderOptions } from "./HeaderOptions";

import { RowActions } from "./RowActions";
import { TipoMedida } from "@prisma/client";
import { Decimal } from "@prisma/client/runtime/library";
import { insumoDefault } from "@/config/imageDefault";
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
            src={typeof img_url === "string" ? img_url : insumoDefault}
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
    id: "Categoría",
    accessorKey: "cat_insumo.nombre",
    header: ({ column }) => (
      <HeaderOptions
        column={column}
        title='Categoría'
      />
    ),
    cell: ({ row }) => {
      const { cat_insumo } = row.original;
      return <span>{cat_insumo.nombre}</span>;
    },
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
    id: "Visibilidad",
    accessorKey: "activo",
    header: ({ column }) => (
      <HeaderOptions
        column={column}
        title='Visibilidad'
      />
    ),
    cell: ({ row }) => {
      const { activo } = row.original;
      return activo ? (
        <span className='px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800'>
          Activo
        </span>
      ) : (
        <span className='px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800'>
          Inactivo
        </span>
      );
    },
  },
  {
    accessorKey: "createdAt",
    header: ({ column }) => (
      <HeaderOptions
        column={column}
        title='Fecha Creación'
      />
    ),
    cell: ({ row }) => {
      const { createdAt } = row.original;
      const date = new Date(createdAt);
      return date.toLocaleDateString();
    },
  },
  {
    accessorKey: "updatedAt",
    header: ({ column }) => (
      <HeaderOptions
        column={column}
        title='Fecha Actualización'
      />
    ),
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
      return <RowActions row={row.original} />;
    },
  },
];
