"use client";

import { useCartStore } from "@/store/shopcart";

interface ShopCarItemProductoProps {
  producto: {
    id_producto: string;
    img_url: string;
    nombre: string;
    precio: number;
    cantidad: number;
  };
}

export const ShopCarItemProducto = ({ producto }: ShopCarItemProductoProps) => {
  const removeProducto = useCartStore((state) => state.removeFromCartProducto);
  const updateCantidadProducto = useCartStore(
    (state) => state.updateCantidadProducto
  );

  return (
    <div className='flex items-center justify-between p-4 border rounded-lg shadow-md bg-white dark:bg-neutral-800 border-gray-300 dark:border-gray-700'>
      <div className='flex items-center gap-4 flex-1'>
        <img
          src={producto.img_url}
          alt={producto.nombre}
          className='w-20 h-20 object-cover rounded-md'
        />
        <div className='flex-1'>
          <h3 className='text-lg font-semibold text-gray-800 dark:text-white'>
            {producto.nombre}
          </h3>
          <p className='text-sm text-gray-600 dark:text-gray-400'>
            S/. {producto.precio}
          </p>
        </div>
      </div>
      <div className='flex flex-col items-center gap-2'>
        <button
          onClick={() =>
            producto.cantidad === 1
              ? removeProducto(producto.id_producto)
              : updateCantidadProducto(
                  producto.id_producto,
                  producto.cantidad - 1
                )
          }
          className='bg-green_p-deep dark:bg-graphite-dark dark:text-white dark:hover:text-green_p-deep px-3 py-1 rounded-md text-lg hover:bg-green_p-dark'
        >
          -
        </button>
        <span className='text-lg font-semibold'>{producto.cantidad}</span>
        <button
          onClick={() =>
            updateCantidadProducto(producto.id_producto, producto.cantidad + 1)
          }
          className='bg-green_p-deep dark:bg-graphite-dark dark:text-white dark:hover:text-green_p-deep px-3 py-1 rounded-md text-lg hover:bg-green_p-dark'
        >
          +
        </button>
      </div>
    </div>
  );
};

interface ShopCarItemPromocionProps {
  promocion: {
    id_promocion: string;
    img_url: string;
    nombre: string;
    precio: number;
    cantidad: number;
  };
}

export const ShopCarItemPromocion = ({
  promocion,
}: ShopCarItemPromocionProps) => {
  const removePromocion = useCartStore(
    (state) => state.removeFromCartPromocion
  );
  const updateCantidadPromocion = useCartStore(
    (state) => state.updateCantidadPromocion
  );

  return (
    <div className='flex items-center justify-between p-4 border rounded-lg shadow-md bg-white dark:bg-neutral-800 border-gray-300 dark:border-gray-700'>
      <div className='flex items-center gap-4 flex-1'>
        <img
          src={promocion.img_url}
          alt={promocion.nombre}
          className='w-20 h-20 object-cover rounded-md'
        />
        <div className='flex-1'>
          <h3 className='text-lg font-semibold text-gray-800 dark:text-white'>
            {promocion.nombre}
          </h3>
          <p className='text-sm text-gray-600 dark:text-gray-400'>
            S/. {promocion.precio}
          </p>
        </div>
      </div>
      <div className='flex flex-col items-center gap-2'>
        <button
          onClick={() =>
            promocion.cantidad === 1
              ? removePromocion(promocion.id_promocion)
              : updateCantidadPromocion(
                  promocion.id_promocion,
                  promocion.cantidad - 1
                )
          }
          className='bg-blue-500 text-white text-lg px-3 py-1 rounded-md hover:bg-blue-400'
        >
          -
        </button>
        <span className='text-lg font-semibold'>{promocion.cantidad}</span>
        <button
          onClick={() =>
            updateCantidadPromocion(
              promocion.id_promocion,
              promocion.cantidad + 1
            )
          }
          className='bg-blue-500 text-white text-lg px-3 py-1 rounded-md hover:bg-blue-400'
        >
          +
        </button>
      </div>
    </div>
  );
};
