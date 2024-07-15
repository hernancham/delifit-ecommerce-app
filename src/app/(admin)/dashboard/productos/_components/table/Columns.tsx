"use client";

import { ColumnDef, SortingFn } from "@tanstack/react-table";
// Types
import { HeaderOptions } from "./HeaderOptions";

import { RowActions } from "./RowActions";
import { TipoMedida } from "@prisma/client";
import { Decimal } from "@prisma/client/runtime/library";
import Image from "next/image";
import { Producto } from "@/types/db";

export const ColProductos: ColumnDef<Producto>[] = [
  {
    id: "Imagen",
    accessorKey: "img_url",
    header: "Imagen",
    cell: ({ row }) => {
      const { img_url, nombre } = row.original;
      return (
        <div className='flex items-center justify-center h-10 w-10'>
          <Image
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
    accessorKey: "descripcion",
    header: ({ column }) => (
      <HeaderOptions
        column={column}
        title='Descripción'
      />
    ),
  },
  {
    id: "Categoria",
    accessorKey: "cat_producto.nombre",
    header: ({ column }) => (
      <HeaderOptions
        column={column}
        title='Categoría'
      />
    ),
    cell: ({ row }) => {
      const { cat_producto } = row.original;
      return <span>{cat_producto.nombre}</span>;
    },
  },
  {
    accessorKey: "precio_base",
    header: ({ column }) => (
      <HeaderOptions
        column={column}
        title='Precio Base'
      />
    ),
    cell: ({ row }) => {
      const { precio_base } = row.original;
      return <span> S/. {precio_base}</span>;
    },
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
    id: "Fecha Creación",
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
    id: "Fecha Actualización",
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
