"use client";

import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { CardPromocion } from "./CardPromocion";
import { useState, useMemo } from "react";
import { Promocion } from "@/types/db";
import { CategoriaPromocion } from "@prisma/client";
import { MultiSelect } from "@/components/custom/MultiSelect";

const getPromociones = async () => {
  try {
    const response = await axios.get<Promocion[]>("/api/promocionUsuario");
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

  const groupedPromociones = useMemo(() => {
    if (!filteredPromociones) return {};
    return filteredPromociones.reduce((acc, promocion) => {
      const category = promocion.cat_promocion.nombre;
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(promocion);
      return acc;
    }, {} as Record<string, Promocion[]>);
  }, [filteredPromociones]);

  const categoryOptions = categorias?.map((categoria) => ({
    label: categoria.nombre,
    value: categoria.id_cat_promocion,
  }));

  return (
    <div className='bg-green_p-light dark:bg-neutral-700'>
      <div className='flex flex-col md:flex-row justify-center items-center mb-5 space-y-4 md:space-y-0 md:space-x-4 pt-24 px-4'>
        <input
          className='py-3 px-2 border-gray-300 rounded-md w-full md:w-60'
          placeholder='Buscar promociones...'
          onChange={(event) => setQuery(event.target.value)}
          value={query}
        />
        <MultiSelect
          options={categoryOptions ?? []}
          onValueChange={setSelectedCategories}
          placeholder='Filtrar por categoría'
          className='h-10 w-full md:w-40'
        />
      </div>
      {Object.entries(groupedPromociones).map(([category, promociones]) => (
        <section
          key={category}
          className='mb-10 text-center dark:text-white text-sky-800'
        >
          <h2 className='text-3xl font-semibold mb-8'>{category}</h2>
          <div className='flex flex-wrap justify-center gap-6'>
            {promociones.map((promocion) => (
              <CardPromocion
                key={promocion.id_promocion}
                promocion={promocion}
              />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};
