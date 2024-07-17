"use client";

import { Button } from "@/components/ui/button";

import { Producto } from "@/types/db";
import { ShoppingBasket } from "lucide-react";

import { useCartStore } from "@/store/shopcart";

export const CardProducto = ({ producto }: { producto: Producto }) => {
  const addToCartProducto = useCartStore((state) => state.addToCartProducto);

  return (
    <div className='min-w-[200px] max-w-xs bg-beige-light dark:bg-graphite-dark rounded-xl  duration-500 hover:scale-105 hover:shadow-xl shadow-md flex flex-col justify-between'>
      <div className='relative'>
        <img
          src={producto.img_url}
          alt={producto.nombre}
          className='w-full aspect-square object-cover rounded-t-xl '
        />
        <div className='absolute inset-0 bg-gradient-to-t from-beige-light via-transparent to-transparent rounded-t-xl dark:from-graphite-dark'></div>
        <h3 className='absolute inset-x-0 bottom-0 block text-lg font-bold capitalize text-black dark:text-white p-4 shadow'>
          {producto.nombre}
        </h3>
      </div>
      <div className='flex flex-col items-center gap-2 p-2'>
        <div className='text-beige-dark dark:text-green_p-dark rounded-md p-1'>
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
          className='bg-graphite-deep text-white w-full hover:bg-graphite-dark dark:bg-green_p-dark dark:text-graphite-deep dark:hover:bg-green_p w-full'
        >
          <ShoppingBasket className='size-6 mr-2' /> Agregar al carrito
        </Button>
      </div>
    </div>
  );
};
