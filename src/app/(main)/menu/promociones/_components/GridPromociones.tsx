"use client";

import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { CardPromocion } from "./CardPromocion";
import { useState, useMemo } from "react";

// Types
import { Promocion } from "@/types/db";
import { CategoriaPromocion } from "@prisma/client";
import { MultiSelect } from "@/components/custom/MultiSelect";

const getPromociones = async () => {
  try {
    const response = await axios.get<Promocion[]>("/api/promocion");
    return response.data;
  } catch (error) {
    throw new Error("Error al leer las promociones");
  }
};

const getCategoriasPromociones = async () => {
  try {
    const response = await axios.get<CategoriaPromocion[]>(
      "/api/categoria/promocion"
    );
    return response.data;
  } catch (error) {
    throw new Error("Error al leer las categorías de promociones");
  }
};

export const GridPromociones = () => {
  const [query, setQuery] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const {
    data: promociones,
    isError,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["promociones"],
    queryFn: getPromociones,
  });

  const {
    data: categorias,
    isError: isErrorCategorias,
    isLoading: isLoadingCategorias,
    error: errorCategorias,
  } = useQuery({
    queryKey: ["categoriasPromociones"],
    queryFn: getCategoriasPromociones,
  });

  const filteredPromociones = useMemo(() => {
    let filtered = promociones;
    if (query) {
      filtered = filtered?.filter((promocion) =>
        promocion.nombre.toLowerCase().includes(query.toLowerCase())
      );
    }
    if (selectedCategories.length > 0) {
      filtered = filtered?.filter((promocion) =>
        selectedCategories.includes(promocion.id_cat_promocion)
      );
    }
    return filtered;
  }, [query, selectedCategories, promociones]);

  const categoryOptions = categorias?.map((categoria) => ({
    label: categoria.nombre,
    value: categoria.id_cat_promocion,
  }));

  return (
    <div className='bg-green_p-light dark:bg-neutral-700'>
      <div className='p-10 text-center'>
        <h1 className='mt-12 text-4xl font-bold'>Promociones</h1>
      </div>
      <div className='flex justify-center mb-5 space-x-4'>
        <input
          className='p-3 border border-gray-300 rounded-md'
          placeholder='Buscar promociones...'
          onChange={(event) => setQuery(event.target.value)}
          value={query}
        />
        <MultiSelect
          options={categoryOptions ?? []}
          onValueChange={setSelectedCategories}
          placeholder='Filtrar por categoría'
          className='h-10 w-40' // Ajuste del tamaño vertical y horizontal
        />
      </div>
      <section
        id='Projects'
        className='grid grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] gap-8 p-10 items-center'
      >
        {filteredPromociones?.map((promocion) => (
          <div key={promocion.id_promocion}>
            <CardPromocion promocion={promocion} />
          </div>
        ))}
      </section>
    </div>
  );
};
