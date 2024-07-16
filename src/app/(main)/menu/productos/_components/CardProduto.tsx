"use client";

import { Button } from "@/components/ui/button";

import { Producto } from "@/types/db";
import { ShoppingBasket } from "lucide-react";

import { useCartStore } from "@/store/shopcart";

export const CardProducto = ({ producto }: { producto: Producto }) => {
  const addToCartProducto = useCartStore((state) => state.addToCartProducto);

  return (
    <div className='min-w-[200px] max-w-xs bg-white rounded-xl  duration-500 hover:scale-105 hover:shadow-xl shadow-md flex flex-col justify-between dark:bg-slate-600'>
      <div className='relative'>
        <img
          src={producto.img_url}
          alt={producto.nombre}
          className='w-full aspect-square object-cover rounded-t-xl '
        />
        <h3 className='absolute inset-x-0 bottom-0 block text-lg font-bold capitalize text-black p-4 bg-lime-100 bg-opacity-35'>
          {producto.nombre}
        </h3>
      </div>
      <div className='flex flex-col items-center gap-2 p-2'>
        <div className='bg-gray-100 rounded-md p-1 dark:bg-green-900'>
          {producto.cat_producto.nombre}
        </div>
        <div>
          <span className='font-bold'>Precio:</span> S/. {producto.precio_base}
        </div>
        <Button
          onClick={() =>
            addToCartProducto({
              id_producto: producto.id_producto,
              img_url: producto.img_url,
              nombre: producto.nombre,
              precio: producto.precio_base,
            })
          }
          className='bg-lime-500 text-white w-full'
        >
          <ShoppingBasket className='size-6 mr-2' /> Agregar al carrito
        </Button>
      </div>
    </div>
  );
};
