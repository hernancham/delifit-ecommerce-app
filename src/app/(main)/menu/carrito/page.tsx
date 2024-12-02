"use client";

import {
  ShopCarItemProducto,
  ShopCarItemPromocion,
} from "@/app/(main)/_components/Header/ShopCarItemExtended";
import { useCartStore } from "@/store/shopcart";
import { useMutation } from "@tanstack/react-query";
import { createPedido } from "@/actions/pedido/create-pedido";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";

export default function Carrito() {
  const session = useSession();
  const user = session.data?.user;

  const { mutate: crearUsuario } = useMutation({
    mutationFn: createPedido,
    onSuccess: () => {},
  });

  const handlePedido = () => {
    if (user?.userId) {
      crearUsuario({
        id_usuario: user?.userId,
        total: totalPrecio(),
        productos: cartProductos.map((producto) => ({
          id_producto: producto.id_producto,
          precio_cantidad: producto.cantidad * producto.precio,
          cantidad: producto.cantidad,
        })),
        promocion: cartPromociones.map((promocion) => ({
          id_promocion: promocion.id_promocion,
          precio_cantidad: promocion.cantidad * promocion.precio,
          cantidad: promocion.cantidad,
        })),
      });
    } else {
      router.push("/login");
    }
  };

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
  const carritoVacio =
    cartProductos.length === 0 && cartPromociones.length === 0;

  return (
    <div className='bg-green_p-light dark:bg-graphite-deep p-8'>
      {carritoVacio ? (
        <div className='flex flex-col items-center justify-center h-full mt-20'>
          <img
            src='/media/shopping-cart.svg'
            alt='Carrito Vacío'
            className='w-36 h-36 mb-4'
          />
          <p className='text-xl font-bold mb-4'>Carrito vacío</p>
        </div>
      ) : (
        <div className='flex flex-col md:flex-row md:space-x-6 md:mx-16'>
          <div className='flex-1'>
            {cartProductos.length > 0 && (
              <>
                <h2 className='text-2xl font-bold mt-14 mb-4'>
                  Lista Productos
                </h2>
                <ul className='space-y-4'>
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
                <h2 className='text-2xl font-bold mt-14 mb-4'>
                  Lista Promociones
                </h2>
                <ul className='space-y-4'>
                  {cartPromociones.map((promocion) => (
                    <li key={promocion.id_promocion}>
                      <ShopCarItemPromocion promocion={promocion} />
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
          <div className='w-full md:w-1/5 h-fit bg-white dark:bg-neutral-800 p-6 rounded-lg shadow-md mt-6 md:mt-16'>
            <h2 className='text-2xl font-bold mb-4'>Resumen de Compra</h2>
            <div className='flex flex-col space-y-4'>
              <div className='flex justify-between'>
                <span className='font-semibold'>Subtotal Productos:</span>
                <span>
                  S/.{" "}
                  {cartProductos
                    .reduce(
                      (acc, producto) =>
                        acc + producto.cantidad * producto.precio,
                      0
                    )
                    .toFixed(2)}
                </span>
              </div>
              <div className='flex justify-between'>
                <span className='font-semibold'>Subtotal Promociones:</span>
                <span>
                  S/.{" "}
                  {cartPromociones
                    .reduce(
                      (acc, promocion) =>
                        acc + promocion.cantidad * promocion.precio,
                      0
                    )
                    .toFixed(2)}
                </span>
              </div>
              <div className='flex justify-between border-t border-gray-300 pt-4 font-bold'>
                <span>Total:</span>
                <span>S/. {totalPrecio().toFixed(2)}</span>
              </div>
              <Button
                onClick={() => handlePedido()}
                className='bg-green_p-deep hover:bg-blue-400 dark:bg-background dark:text-blue-400 dark:hover:bg-graphite-dark w-full mt-4'
              >
                Continuar Compra
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
