"use client";

import { useCartStore } from "@/store/shopcart";
import { Button } from "@/components/ui/button";

import { Producto } from "@/types/db";
import { ShoppingBasket } from "lucide-react";

export const MenuCard = ({ producto }: { producto: Producto }) => {
  const addToCartProducto = useCartStore((state) => state.addToCartProducto);
  return (
    <div className='flex flex-col gap-4 py-8 px-6 mx-4 rounded-xl'>
      <div className='mb-3 flex justify-center h-[250px]'>
        <img
          src={producto.img_url}
          alt='menu'
          className='rounded-full w-auto h-full object-cover sm:max-w-[200px] md:max-w-[250px] shadow-1'
        />
      </div>
      <div className='flex flex-col items-center gap-4'>
        <div className='space-y-6 text-center'>
          <h1 className='text-xl h-[70px] w-[200px]'>{producto.nombre}</h1>
          <p className='text-3xl font-semibold'>
            <span className='text-2xl font-cursive'></span> S/.{" "}
            {producto.precio_base}
          </p>
          <Button
            onClick={() =>
              addToCartProducto({
                id_producto: producto.id_producto,
                img_url: producto.img_url,
                nombre: producto.nombre,
                precio: producto.precio_base,
              })
            }
            className='bg-graphite-deep text-white w-full hover:bg-graphite-dark dark:bg-green_p-dark dark:text-graphite-deep dark:hover:bg-green_p'
          >
            <ShoppingBasket className='size-6 mr-2' /> Agregar al carrito
          </Button>
        </div>
      </div>
    </div>
  );
};
