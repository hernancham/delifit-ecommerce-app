"use client";

import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { CardProducto } from "./CardProducto";
import { useState, useMemo } from "react";

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

export const GridProductos = () => {
  const [query, setQuery] = useState("");

  const {
    data: productos,
    isError,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["productos"],
    queryFn: getProductos,
  });

  const filteredProductos = useMemo(() => {
    if (!query) return productos;
    return productos?.filter((producto) =>
      producto.nombre.toLowerCase().includes(query.toLowerCase())
    );
  }, [query, productos]);

  return (
    <div className='bg-green_p-light dark:bg-neutral-700'>
      <div className='p-10 text-center'>
        <h1 className='mt-12 text-4xl font-bold'>Productos</h1>
      </div>
      <div className='flex justify-center mb-5'>
        <input
          className='p-3 border border-gray-300 rounded-md'
          placeholder='Buscar productos...'
          onChange={(event) => setQuery(event.target.value)}
          value={query}
        />
      </div>
      <section
        id='Projects'
        className='grid grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] gap-8 p-10 items-center'
      >
        {filteredProductos?.map((producto) => (
          <div key={producto.id_producto}>
            <CardProducto producto={producto} />
          </div>
        ))}
      </section>
    </div>
  );
};
