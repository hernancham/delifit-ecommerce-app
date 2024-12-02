"use client";

import { useCartStore } from "@/store/shopcart";
import { Trash } from "lucide-react";

interface ShopCarItemProductoProps {
  producto: {
    id_producto: string;
    img_url: string;
    nombre: string;
    precio: number;
    cantidad: number;
    incluir: boolean;
  };
}

export const ShopCarItemProducto = ({ producto }: ShopCarItemProductoProps) => {
  const removeProducto = useCartStore((state) => state.removeFromCartProducto);
  const updateCantidadProducto = useCartStore(
    (state) => state.updateCantidadProducto
  );
  const toggleIncluir = useCartStore((state) => state.toggleIncluirProducto);

  return (
    <div className='flex items-center justify-between p-4 border rounded-lg shadow-md bg-white dark:bg-neutral-800 border-gray-300 dark:border-gray-700'>
      <div className='flex items-center gap-4 flex-1'>
        {/* Checkbox para incluir o no en el pedido */}
        <input
          type='checkbox'
          checked={producto.incluir}
          onChange={() => toggleIncluir(producto.id_producto)}
          className='mr-4'
        />
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
            <span className='text-xl font-bold'>S/. {producto.precio}</span>
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
        {/* Botón de eliminar */}
        <button
          onClick={() => removeProducto(producto.id_producto)}
          className='text-red-500 hover:text-red-600'
        >
          <Trash className='w-6 h-6' />
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
    incluir: boolean;
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
  const toggleIncluir = useCartStore((state) => state.toggleIncluirPromocion);

  return (
    <div className='flex items-center justify-between p-4 border rounded-lg shadow-md bg-white dark:bg-neutral-800 border-gray-300 dark:border-gray-700'>
      <div className='flex items-center gap-4 flex-1'>
        {/* Checkbox para incluir o no en el pedido */}
        <input
          type='checkbox'
          checked={promocion.incluir}
          onChange={() => toggleIncluir(promocion.id_promocion)}
          className='mr-4'
        />
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
            <span className='text-xl font-bold'>S/. {promocion.precio}</span>
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
        {/* Botón de eliminar */}
        <button
          onClick={() => removePromocion(promocion.id_promocion)}
          className='text-red-500 hover:text-red-600'
        >
          <Trash className='w-6 h-6' />
        </button>
      </div>
    </div>
  );
};
