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
    const response = await axios.get<Producto[]>("/api/productoUsuario");
    return response.data;
  } catch (error) {
    throw new Error("Error al leer los Productos");
  }
};

const getCategoriasProductos = async () => {
  try {
    const response = await axios.get<CategoriaProducto[]>(
      "/api/categoria/productoUsuario"
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

  const groupedProductos = useMemo(() => {
    if (!filteredProductos) return {};
    return filteredProductos.reduce((acc, producto) => {
      const category = producto.cat_producto.nombre;
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(producto);
      return acc;
    }, {} as Record<string, Producto[]>);
  }, [filteredProductos]);

  const categoryOptions = categorias?.map((categoria) => ({
    label: categoria.nombre,
    value: categoria.id_cat_producto,
  }));

  return (
    <div className='bg-green_p-light dark:bg-neutral-700'>
      <div className='flex flex-col md:flex-row justify-center items-center mb-5 space-y-4 md:space-y-0 md:space-x-4 pt-24 px-4'>
        <input
          className='py-3 px-2 border-gray-300 rounded-md w-full md:w-60'
          placeholder='Buscar productos...'
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
      {Object.entries(groupedProductos).map(([category, productos]) => (
        <section
          key={category}
          className='mb-10 text-center dark:text-white text-sky-800'
        >
          <h2 className='text-3xl font-semibold mb-8'>{category}</h2>
          <div className='flex flex-wrap justify-center gap-9'>
            {productos.map((producto) => (
              <CardProducto
                key={producto.id_producto}
                producto={producto}
              />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};
