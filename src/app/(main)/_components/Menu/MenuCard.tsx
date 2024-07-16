"use client";

import { useCartStore } from "@/store/shopcart";
import { Button } from "@/components/ui/button";

import { Producto } from "@/types/db";
import { ShoppingBasket } from "lucide-react";

export const MenuCard = ({ producto }: { producto: Producto }) => {
  const addToCartProducto = useCartStore((state) => state.addToCartProducto);
  return (
    <div className='flex flex-col gap-4 py-8 px-6 mx-4 rounded-xl'>
      <div className='mb-3 flex justify-center'>
        <img
          src={producto.img_url}
          alt='menu'
          className='rounded-full w-auto sm:max-w-[200px] md:max-w-[250px] shadow-1'
        />
      </div>
      <div className='flex flex-col items-center gap-4'>
        <div className='space-y-3 text-center'>
          <h1 className='text-xl'>{producto.nombre}</h1>
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
            className='bg-lime-500 text-white w-full'
          >
            <ShoppingBasket className='size-6 mr-2' /> Agregar al carrito
          </Button>
        </div>
      </div>
    </div>
  );
};
