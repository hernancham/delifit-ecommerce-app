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
  const removePromocion = useCartStore(
    (state) => state.removeFromCartPromocion
  );

  const updateCantidadroducto = useCartStore(
    (state) => state.updateCantidadProducto
  );
  const updateCantidadPromocion = useCartStore(
    (state) => state.updateCantidadPromocion
  );

  return (
    <div className='flex items-center justify-between p-2 border-b border-gray-200'>
      <div className='flex items-center gap-2'>
        <img
          src={producto.img_url}
          alt={producto.nombre}
          className='w-16 h-16 object-cover rounded-lg'
        />
        <div>
          <h3 className='text-lg font-bold'>{producto.nombre}</h3>
          <p className='text-sm text-gray-500'>S/. {producto.precio}</p>
        </div>
      </div>
      <div className='flex items-center gap-2'>
        <button
          onClick={() =>
            producto.cantidad === 1
              ? removeProducto(producto.id_producto)
              : updateCantidadroducto(
                  producto.id_producto,
                  producto.cantidad - 1
                )
          }
          className='bg-lime-500 text-white px-2 py-1 rounded-md'
        >
          -
        </button>
        <span>{producto.cantidad}</span>
        <button
          onClick={() =>
            updateCantidadroducto(producto.id_producto, producto.cantidad + 1)
          }
          className='bg-lime-500 text-white px-2 py-1 rounded-md'
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
  const removeProducto = useCartStore((state) => state.removeFromCartProducto);
  const removePromocion = useCartStore(
    (state) => state.removeFromCartPromocion
  );

  const updateCantidadroducto = useCartStore(
    (state) => state.updateCantidadProducto
  );
  const updateCantidadPromocion = useCartStore(
    (state) => state.updateCantidadPromocion
  );

  return (
    <div className='flex items-center justify-between p-2 border-b border-gray-200'>
      <div className='flex items-center gap-2'>
        <img
          src={promocion.img_url}
          alt={promocion.nombre}
          className='w-16 h-16 object-cover rounded-lg'
        />
        <div>
          <h3 className='text-lg font-bold'>{promocion.nombre}</h3>
          <p className='text-sm text-gray-500'>S/. {promocion.precio}</p>
        </div>
      </div>
      <div className='flex items-center gap-2'>
        <button
          onClick={() =>
            promocion.cantidad === 1
              ? removePromocion(promocion.id_promocion)
              : updateCantidadPromocion(
                  promocion.id_promocion,
                  promocion.cantidad - 1
                )
          }
          className='bg-lime-500 text-white px-2 py-1 rounded-md'
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
