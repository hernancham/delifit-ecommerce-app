"use client";

import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { CardPromocion } from "./CardPromocion";
import { useState, useMemo } from "react";

// Types

import { Promocion, CategoriaPromocion } from "@prisma/client";

const getPromociones = async () => {
  try {
    const response = await axios.get<Promocion[]>("/api/promocion");
    return response.data;
  } catch (error) {
    throw new Error("Error al leer los Productos");
  }
};

export const GridPromociones = () => {
  const [query, setQuery] = useState("");
  const {
    data: promociones,
    isError,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["promociones"],
    queryFn: getPromociones,
  });

  const filteredPromociones = useMemo(() => {
    if (!query) return promociones;
    return promociones?.filter((promocion) =>
      promocion.nombre.toLowerCase().includes(query.toLowerCase())
    );
  }, [query, promociones]);

  return (
    <div className='bg-green_p-light dark:bg-neutral-700'>
      <div className='p-10 text-center'>
        <h1 className='mt-12 text-4xl font-bold'>Promociones</h1>
      </div>
      <div className='flex justify-center mb-5'>
        <input
          className='p-3 border border-gray-300 rounded-md'
          placeholder='Buscar promociones...'
          onChange={(event) => setQuery(event.target.value)}
          value={query}
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
