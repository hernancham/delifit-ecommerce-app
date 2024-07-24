"use client";

import {
  ShopCarItemProducto,
  ShopCarItemPromocion,
} from "@/app/(main)/_components/Header/ShopCarItem";
import { useCartStore } from "@/store/shopcart";
import { useMutation } from "@tanstack/react-query";

import { createPedido } from "@/actions/pedido/create-pedido";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { User } from "next-auth";
export default function Carrito({ user }: { user: User }) {
  const { mutate: crearUsuario } = useMutation({
    mutationFn: createPedido,
    onSuccess: () => {},
  });

  const handlePedido = () => {
    if (user.userId) {
      crearUsuario({
        id_usuario: user.userId,
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
              <h2 className='text-2xl font-bold mt-20 mb-4'>Lista Productos</h2>
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
              <ul className='flex-1 max-h-48 overflow-y-auto py-6'>
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
      <Button
        onClick={() => handlePedido()}
        className='bg-green_p-deep hover:bg-lime-400 dark:bg-background dark:text-lime-400 dark:hover:bg-graphite-dark'
      >
        Completar Pedido S/.{totalPrecio()}
      </Button>
    </div>
  );
}
