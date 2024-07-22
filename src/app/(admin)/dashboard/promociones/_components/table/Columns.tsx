"use client";

import { ColumnDef, SortingFn } from "@tanstack/react-table";
// Types
import { HeaderOptions } from "./HeaderOptions";

import { RowActions } from "./RowActions";
import { promocionDefault } from "@/config/imageDefault";
import { Promocion } from "@/types/db";

export const ColPromocion: ColumnDef<Promocion>[] = [
  {
    id: "Imagen",
    accessorKey: "img_url",
    header: "Imagen",
    cell: ({ row }) => {
      const { img_url, nombre } = row.original;
      return (
        <div className='flex items-center justify-center h-10 w-10'>
          <img
            src={typeof img_url === "string" ? img_url : promocionDefault}
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
    accessorKey: "cat_promocion.nombre",
    header: ({ column }) => (
      <HeaderOptions
        column={column}
        title='Categoría'
      />
    ),
    cell: ({ row }) => {
      const { cat_promocion } = row.original;
      return (
        <span>
          {cat_promocion?.nombre ?? "Undefined: Esto no debe mostrarse"}
        </span>
      );
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
    accessorKey: "precio_oferta",
    header: ({ column }) => (
      <HeaderOptions
        column={column}
        title='Precio Oferta'
      />
    ),
    cell: ({ row }) => {
      const { precio_oferta } = row.original;
      return <span> S/. {precio_oferta}</span>;
    },
  },
  {
    id: "Estado promoción",
    accessorKey: "estado_promocion",
    header: ({ column }) => (
      <HeaderOptions
        column={column}
        title='Estado promoción'
      />
    ),
    cell: ({ row }) => {
      const { estado_promocion } = row.original;
      return estado_promocion ? (
        <span className='px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800'>
          Activa
        </span>
      ) : (
        <span className='px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800'>
          Inactiva
        </span>
      );
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
    accessorKey: "fecha_inicio",
    header: ({ column }) => (
      <HeaderOptions
        column={column}
        title='Fecha Inicio'
      />
    ),
    cell: ({ row }) => {
      const { fecha_inicio } = row.original;
      const date = new Date(fecha_inicio);
      return date.toLocaleDateString();
    },
  },
  {
    accessorKey: "fecha_fin",
    header: ({ column }) => (
      <HeaderOptions
        column={column}
        title='Fecha Fin'
      />
    ),
    cell: ({ row }) => {
      const { fecha_fin } = row.original;
      const date = new Date(fecha_fin);
      return date.toLocaleDateString();
    },
  },
  {
    accessorKey: "dias_promocion",
    header: ({ column }) => (
      <HeaderOptions
        column={column}
        title='Días promoción'
      />
    ),
    cell: ({ row }) => {
      const { dia_promocion } = row.original;
      return (
        <span>
          {dia_promocion.map((substring, index) => (
            <span key={index}>
              {substring}
              {index !== dia_promocion.length - 1 ? ", " : ""}
            </span>
          ))}
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
