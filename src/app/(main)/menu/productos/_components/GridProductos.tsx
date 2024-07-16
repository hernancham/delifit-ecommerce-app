"use client";

import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { CardProducto } from "./CardProduto";

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
  const {
    data: Productos,
    isError,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["productos"],
    queryFn: getProductos,
  });

  return (
    <div>
      <div className='p-10 text-center'>
        <h1 className='mb-4 text-4xl font-bold'>Productos</h1>
        <h2 className='text-3xl'>¡Bienvenido a nuestra tienda!</h2>
      </div>
      <section
        id='Projects'
        className='grid grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] gap-8 p-10'
      >
        {Productos?.map((producto) => (
          <CardProducto producto={producto} />
        ))}
      </section>
      <div className='px-10 py-10 text-center'>
        <h2 className='mb-4 text-2xl font-bold md:text-4xl'>
          ¡Gracias por visitar nuestra tienda!
        </h2>
      </div>
    </div>
  );
};
