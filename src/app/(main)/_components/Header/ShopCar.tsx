"use client";

import Link from "next/link";
import { ShoppingCart } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetClose,
  SheetFooter,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

import { Logo } from "./Logo";

import { ShopCarItemProducto, ShopCarItemPromocion } from "./ShopCarItem";
import { useCartStore } from "@/store/shopcart";

export function ShopCar() {
  const cartProductos = useCartStore((state) => state.cartProductos);
  const cartPromociones = useCartStore((state) => state.cartPromociones);

  const totalPrecio = useCartStore((state) => state.totalPrice);

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          size='icon'
          className='m-2 shrink-0 rounded-lg bg-slate-50 bg-opacity-5'
        >
          <ShoppingCart className='h-8 w-8 stroke-current' />
        </Button>
      </SheetTrigger>
      <SheetContent
        side='right'
        className='bg-green-100 dark:bg-teal-950 p-8'
      >
        <SheetHeader className='flex justify-center items-center'>
          <Logo />
        </SheetHeader>
        <div>
          <h2 className='text-2xl font-bold'>Lista Productos</h2>
          <ul className='flex-1 max-h-36 overflow-y-auto px-6 py-6'>
            {cartProductos.map((producto) => (
              <li key={producto.id_producto}>
                <ShopCarItemProducto producto={producto} />
              </li>
            ))}
          </ul>
          <h2 className='text-2xl font-bold'>Lista Promociones</h2>
          <ul className='flex-1 max-h-36 overflow-y-auto px-6 py-6'>
            {cartPromociones.map((promocion) => (
              <li key={promocion.id_promocion}>
                <ShopCarItemPromocion promocion={promocion} />
              </li>
            ))}
          </ul>
        </div>
        <SheetFooter className='flex !flex-col gap-4'>
          <Button className='bg-slate-400 hover:bg-slate-500'>
            Ver mi carrito
          </Button>
          <Button className='bg-lime-300 hover:bg-lime-500'>
            Completar Pedido S/.{totalPrecio()}
          </Button>
          <Link
            href='#'
            className='inline-block text-sm text-gray-500 underline underline-offset-4 transition hover:text-gray-600'
          >
            Continue shopping
          </Link>
          <SheetClose asChild>
            <Button className='w-full'>Cerrar</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
