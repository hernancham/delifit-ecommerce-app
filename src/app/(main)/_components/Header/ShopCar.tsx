"use client";

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

import { ShopCarItemProducto, ShopCarItemPromocion } from "./ShopCarItem";
import { useCartStore } from "@/store/shopcart";
import { useMutation } from "@tanstack/react-query";

import { createPedido } from "@/actions/pedido/create-pedido";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export function ShopCar() {
  const session = useSession();
  const router = useRouter();
  const cartProductos = useCartStore((state) => state.cartProductos);
  const cartPromociones = useCartStore((state) => state.cartPromociones);
  const totalPrecio = useCartStore((state) => state.totalPrice);
  const cantidadProductos = useCartStore(
    (state) => state.cartCantidadProductos
  );
  const cantidadPromociones = useCartStore(
    (state) => state.cartCantidadPromociones
  );
  const { mutate: crearUsuario } = useMutation({
    mutationFn: createPedido,
    onSuccess: () => {},
  });
  const user = session.data?.user;

  const handlePedido = () => {
    if (user?.userId) {
      crearUsuario({
        id_usuario: user.userId,
        total: totalPrecio(),
        productos: cartProductos.map((producto) => ({
          id_producto: producto.id_producto!,
          precio_cantidad: producto.cantidad * producto.precio,
          cantidad: producto.cantidad,
        })),
        promocion: cartPromociones.map((promocion) => ({
          id_promocion: promocion.id_promocion!,
          precio_cantidad: promocion.cantidad * promocion.precio,
          cantidad: promocion.cantidad,
        })),
      });
    } else {
      router.push("/login");
    }
  };

  const handleClearCart = () => {
    useCartStore.getState().clearCart(); // Llama a la función para limpiar el carrito
  };

  const carritoVacio =
    cartProductos.length === 0 && cartPromociones.length === 0;

  return (
    <Sheet>
      <SheetTrigger asChild>
        <div className='relative flex items-center'>
          <Button
            size='icon'
            className='m-1 shrink-0 rounded-lg bg-slate-50 bg-opacity-5'
          >
            <ShoppingCart className='h-8 w-8 stroke-current' />
          </Button>
          <div className='flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white'>
            {cantidadProductos + cantidadPromociones}
          </div>
        </div>
      </SheetTrigger>
      <SheetContent
        side='right'
        className='bg-green_p-light dark:bg-graphite-deep p-8'
      >
        {carritoVacio ? (
          <div className='flex flex-col items-center justify-center h-full'>
            <img
              src='/media/shopping-cart.svg'
              alt='Carrito Vacío'
              className='w-24 h-24 mb-4'
            />
            <p className='text-xl font-bold mb-4'>Carrito vacío</p>
          </div>
        ) : (
          <div>
            {cartProductos.length > 0 && (
              <>
                <h2 className='text-2xl font-bold mb-4'>Lista Productos</h2>
                <ul className='flex-1 max-h-48 overflow-y-auto py-4'>
                  {cartProductos.map((producto) => (
                    <li key={producto.id_producto}>
                      <ShopCarItemProducto producto={producto} />
                    </li>
                  ))}
                </ul>
              </>
            )}
            {cartPromociones.length > 0 && (
              <>
                <h2 className='text-2xl font-bold mb-4'>Lista Promociones</h2>
                <ul className='flex-1 max-h-48 overflow-y-auto py-4'>
                  {cartPromociones.map((promocion) => (
                    <li key={promocion.id_promocion}>
                      <ShopCarItemPromocion promocion={promocion} />
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        )}
        {!carritoVacio && (
          <SheetFooter className='flex !flex-col gap-3 mt-4 items-center'>
            <SheetClose asChild>
              <Button
                className='w-full bg-graphite-deep hover:bg-graphite-dark text-green_p-dark dark:bg-green_p-dark dark:text-black dark:hover:bg-green_p'
                onClick={() => router.push("/menu/carrito")}
              >
                Ver mi carrito
              </Button>
            </SheetClose>
            <SheetClose asChild>
              <Button
                onClick={() => handleClearCart()}
                className='w-full bg-red-500 hover:bg-red-600 text-white'
              >
                Limpiar Carrito
              </Button>
            </SheetClose>
            <SheetClose asChild>
              <Button
                onClick={() => handlePedido()}
                className='w-full bg-green_p-deep hover:bg-blue-400 dark:bg-background dark:text-blue-400 dark:hover:bg-graphite-dark'
              >
                Completar Pedido S/.{totalPrecio().toFixed(2)}
              </Button>
            </SheetClose>
            <SheetClose asChild>
              <Button className='w-full bg-transparent hover:bg-transparent dark:bg-transparent'>
                Cerrar
              </Button>
            </SheetClose>
          </SheetFooter>
        )}
      </SheetContent>
    </Sheet>
  );
}
