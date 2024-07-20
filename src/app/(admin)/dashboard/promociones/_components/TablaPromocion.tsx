"use client";

import axios from "axios";
import { useQuery } from "@tanstack/react-query";

import { ColPromocion } from "./table/Columns";
import { DataTable } from "./table/DataTable";

// Types
import { Promocion } from "@/types/db";

const getPromocion = async () => {
  try {
    const response = await axios.get<Promocion[]>("/api/promocion");
    return response.data;
  } catch (error) {
    throw new Error("Error al leer las promociones");
  }
};

export const TablaPromocion = () => {
  const {
    data: promocion,
    isError,
    error,
  } = useQuery({
    queryKey: ["promocion"],
    queryFn: getPromocion,
  });

  return (
    <DataTable
      searchKey='nombre'
      columns={ColPromocion}
      data={promocion ?? []}
    />
  );
};
