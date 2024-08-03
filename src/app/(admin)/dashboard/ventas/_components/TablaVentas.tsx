"use client";

import axios from "axios";
import { useQuery } from "@tanstack/react-query";

import { ColUsuarios } from "./table/Columns";
import { DataTable } from "./table/DataTable";

// Types
import { Usuario } from "@/types/db";

const getUsuarios = async () => {
  try {
    const response = await axios.get<Usuario[]>("/api/usuario");
    return response.data;
  } catch (error) {
    throw new Error("Error al leer los insumos");
  }
};

export const TablaVentas = () => {
  const {
    data: usuarios,
    isError,
    error,
  } = useQuery({
    queryKey: ["usuarios"],
    queryFn: getUsuarios,
  });

  return (
    <DataTable
      searchKey='nombre'
      columns={ColUsuarios}
      data={usuarios ?? []}
    />
  );
};
