"use client";

import { ColumnDef, SortingFn } from "@tanstack/react-table";
// Types
import { HeaderOptions } from "./HeaderOptions";

import { RowActions } from "./RowActions";
import { UserRole } from "@prisma/client";
import { Decimal } from "@prisma/client/runtime/library";

import { Usuario } from "@/types/db";

export const columns: ColumnDef<Usuario>[] = [
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
    accessorKey: "email",
    header: ({ column }) => (
      <HeaderOptions
        column={column}
        title='Email'
      />
    ),
  },
  {
    id: "Rol",
    accessorKey: "rol",
    header: ({ column }) => (
      <HeaderOptions
        column={column}
        title='Rol'
      />
    ),
    cell: ({ row }) => {
      const { rol } = row.original;
      return <span>{rol}</span>;
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
      const { id_usuario, activo } = row.original;
      return (
        <RowActions
          id_row={id_usuario}
          activo={activo}
        />
      );
    },
  },
];
