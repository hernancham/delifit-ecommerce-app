"use client";

import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { CardProducto } from "./CardProducto";
import { useState, useMemo } from "react";
import { CategoriaProducto } from "@prisma/client";
import { MultiSelect } from "@/components/custom/MultiSelect";

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

const getCategoriasProductos = async () => {
  try {
    const response = await axios.get<CategoriaProducto[]>(
      "/api/categoria/producto"
    );
    return response.data;
  } catch (error) {
    throw new Error("Error al leer las categorías de productos");
  }
};

export const GridProductos = () => {
  const [query, setQuery] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const {
    data: productos,
    isError,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["productos"],
    queryFn: getProductos,
  });

  const {
    data: categorias,
    isError: isErrorCategorias,
    isLoading: isLoadingCategorias,
    error: errorCategorias,
  } = useQuery({
    queryKey: ["categorias"],
    queryFn: getCategoriasProductos,
  });

  const filteredProductos = useMemo(() => {
    let filtered = productos;
    if (query) {
      filtered = filtered?.filter((producto) =>
        producto.nombre.toLowerCase().includes(query.toLowerCase())
      );
    }
    if (selectedCategories.length > 0) {
      filtered = filtered?.filter((producto) =>
        selectedCategories.includes(producto.id_cat_producto)
      );
    }
    return filtered;
  }, [query, selectedCategories, productos]);

  const categoryOptions = categorias?.map((categoria) => ({
    label: categoria.nombre,
    value: categoria.id_cat_producto,
  }));

  return (
    <div className='bg-green_p-light dark:bg-neutral-700'>
      <div className='p-10 text-center'>
        <h1 className='mt-12 text-4xl font-bold'>Productos</h1>
      </div>
      <div className='flex justify-center mb-5 space-x-4 '>
        <input
          className='ml-4 py-3 px-1 border border-gray-300 rounded-md'
          placeholder='Buscar productos...'
          onChange={(event) => setQuery(event.target.value)}
          value={query}
        />
        <MultiSelect
          options={categoryOptions ?? []}
          onValueChange={setSelectedCategories}
          placeholder='Filtrar por cat.'
          className='h-10 w-40 max-sm:w-20' // Ajuste del tamaño vertical y horizontal
        />
      </div>
      <section
        id='Projects'
        className='grid grid-cols-[repeat(auto-fit,_minmax(240px,_1fr))] gap-8 p-10 items-center'
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
