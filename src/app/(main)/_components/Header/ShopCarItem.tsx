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
    <div className='flex items-center justify-between p-2 border-b border-graphite-deep dark:border-green_p-light'>
      <div className='flex items-center gap-2 flex-1'>
        <img
          src={producto.img_url}
          alt={producto.nombre}
          className='w-16 h-16 object-cover rounded-lg'
        />
        <div className='flex-1'>
          <h3 className='text-sm font-bold'>{producto.nombre}</h3>
          <p className='text-sm text-gray-500 dark:text-graphite-light'>S/. {producto.precio}</p>
        </div>
      </div>
      <div className='flex flex-col items-center gap-1'>
        <button
          onClick={() =>
            producto.cantidad === 1
              ? removeProducto(producto.id_producto)
              : updateCantidadProducto(
                  producto.id_producto,
                  producto.cantidad - 1
                )
          }
          className='bg-green_p-deep dark:bg-graphite-dark dark:text-white dark:hover:text-green_p-deep px-2 py-1 hover:text-white rounded-md text-xl'
        >
          -
        </button>
        <span>{producto.cantidad}</span>
        <button
          onClick={() =>
            updateCantidadProducto(producto.id_producto, producto.cantidad + 1)
          }
          className='bg-green_p-deep dark:bg-graphite-dark dark:text-white dark:hover:text-green_p-deep px-2 py-1 hover:text-white rounded-md'
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
    <div className='flex items-center justify-between p-2 border-b border-gray-200'>
      <div className='flex items-center gap-2 flex-1'>
        <img
          src={promocion.img_url}
          alt={promocion.nombre}
          className='w-16 h-16 object-cover rounded-lg'
        />
        <div className='flex-1'>
          <h3 className='text-sm font-bold'>{promocion.nombre}</h3>
          <p className='text-sm text-gray-500'>S/. {promocion.precio}</p>
        </div>
      </div>
      <div className='flex flex-col items-center gap-1'>
        <button
          onClick={() =>
            promocion.cantidad === 1
              ? removePromocion(promocion.id_promocion)
              : updateCantidadPromocion(
                  promocion.id_promocion,
                  promocion.cantidad - 1
                )
          }
          className='bg-lime-500 text-white text-xl px-2 py-1 rounded-md'
        >
          -
        </button>
        <span>{promocion.cantidad}</span>
        <button
          onClick={() =>
            updateCantidadPromocion(
              promocion.id_promocion,
              promocion.cantidad + 1
            )
          }
          className='bg-lime-500 text-white px-2 py-1 rounded-md'
        >
          +
        </button>
      </div>
    </div>
  );
};
