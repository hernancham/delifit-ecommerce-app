"use client";

import axios from "axios";
import { useQuery } from "@tanstack/react-query";

import { ColProductos } from "./table/Columns";
import { DataTable } from "./table/DataTable";

// Types
import { Producto } from "@/types/db";

const getProductos = async () => {
  try {
    const response = await axios.get<Producto[]>("/api/producto");
    return response.data;
  } catch (error) {
    throw new Error("Error al leer los Productos");
  }
};

export const TablaProductos = () => {
  const {
    data: Productos,
    isError,
    error,
  } = useQuery({
    queryKey: ["productos"],
    queryFn: getProductos,
  });

  return (
    <DataTable
      searchKey='nombre'
      columns={ColProductos}
      data={Productos ?? []}
    />
  );
};
