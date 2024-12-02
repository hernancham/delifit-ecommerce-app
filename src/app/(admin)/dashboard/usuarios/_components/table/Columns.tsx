"use client";

import { ColumnDef, SortingFn } from "@tanstack/react-table";
// Types
import { HeaderOptions } from "./HeaderOptions";

import { RowActions } from "./RowActions";
import { UserRole } from "@prisma/client";
import { Decimal } from "@prisma/client/runtime/library";
import { usuarioDefault } from "@/config/imageDefault";
import { Usuario } from "@/types/db";

export const ColUsuarios: ColumnDef<Usuario>[] = [
  {
    id: "Imagen",
    accessorKey: "image",
    header: "Imagen",
    cell: ({ row }) => {
      const { image, nombre } = row.original;
      return (
        <div className='flex items-center justify-center h-10 w-10'>
          <img
            src={typeof image === "string" ? image : usuarioDefault}
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
    accessorKey: "apellido",
    header: ({ column }) => (
      <HeaderOptions
        column={column}
        title='Apellido'
      />
    ),
  },
  {
    accessorKey: "telefono",
    header: ({ column }) => (
      <HeaderOptions
        column={column}
        title='Teléfono'
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
    accessorKey: "documento",
    header: ({ column }) => (
      <HeaderOptions
        column={column}
        title='Documento'
      />
    ),
  },
  {
    id: "tipo_doc",
    accessorKey: "tipo_doc",
    header: ({ column }) => (
      <HeaderOptions
        column={column}
        title='Tipo Doc'
      />
    ),
  },
  {
    accessorKey: "puntos",
    header: ({ column }) => (
      <HeaderOptions
        column={column}
        title='Puntos'
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
        <span className='px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-sky-100 text-sky-800'>
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
