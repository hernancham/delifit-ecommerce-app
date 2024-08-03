"use client";

import { Button } from "@/components/ui/button";
import { Promocion } from "@/types/db";
import { ShoppingBasket } from "lucide-react";
import { useCartStore } from "@/store/shopcart";

export const CardPromocion = ({ promocion }: { promocion: Promocion }) => {
  const addToCartPromocion = useCartStore((state) => state.addToCartPromocion);

  return (
    <div className='min-w-[250px] max-w-sm bg-beige-light dark:bg-neutral-700 rounded-xl duration-500 hover:scale-105 hover:shadow-xl shadow-md flex flex-col justify-between'>
      <div className='relative'>
        <img
          src={promocion.img_url}
          alt={promocion.nombre}
          className='w-full h-56 object-cover rounded-t-xl' // Tamaño de imagen ajustado
        />
        <div className='absolute inset-0 bg-gradient-to-t from-beige-light via-transparent to-transparent rounded-t-xl dark:from-graphite-deep'></div>
        <h3 className='absolute inset-x-0 bottom-0 block text-lg font-bold capitalize text-black dark:text-white p-4 shadow text-center'>
          {promocion.nombre}
        </h3>
      </div>
      <div className='flex flex-col items-center gap-2 p-2'>
        <div>
          <span className='font-bold'>Precio:</span> S/. {promocion.precio_base}
        </div>
        <Button
          onClick={() =>
            addToCartPromocion({
              id_promocion: promocion.id_promocion,
              img_url: promocion.img_url,
              nombre: promocion.nombre,
              precio: promocion.precio_base,
            })
          }
          className='bg-graphite-deep text-white w-full hover:bg-graphite-dark dark:bg-green_p-dark dark:text-graphite-deep dark:hover:bg-green_p'
        >
          <ShoppingBasket className='size-6 mr-2' /> Agregar al carrito
        </Button>
      </div>
    </div>
  );
};
