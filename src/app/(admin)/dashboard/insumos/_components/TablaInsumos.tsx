"use client";

import axios from "axios";
import { useQuery } from "@tanstack/react-query";

import { ColInsumos } from "./table/Columns";
import { DataTable } from "./table/DataTable";

// Types
import { Insumo } from "@/types/db";

const getInsumos = async () => {
  try {
    const response = await axios.get<Insumo[]>("/api/insumo");
    return response.data;
  } catch (error) {
    throw new Error("Error al leer los insumos");
  }
};

export const TablaInsumos = () => {
  const {
    data: insumos,
    isError,
    error,
  } = useQuery({
    queryKey: ["insumos"],
    queryFn: getInsumos,
  });

  return (
    <DataTable
      searchKey='nombre'
      columns={ColInsumos}
      data={insumos ?? []}
    />
  );
};
