import { create } from "zustand";
import {persist} from 'zustand/middleware'

interface useCartStoreProps {
  cartProductos: {
    id_producto: string;
    img_url: string;
    nombre: string;
    precio: number;
    cantidad: number;
  }[];

  cartPromociones: {
    id_promocion: string;
    img_url: string;
    nombre: string;
    precio: number;
    cantidad: number;
  }[];

  cartCantidadProductos: number;
  cartCantidadPromociones: number;

  addToCartProducto: (product: {
    id_producto: string;
    img_url: string;
    nombre: string;
    precio: number;
  }) => void;
  addToCartPromocion: (promotion: {
    id_promocion: string;
    img_url: string;
    nombre: string;
    precio: number;
  }) => void;

  removeFromCartProducto: (productId: string) => void;
  removeFromCartPromocion: (promotionId: string) => void;

  updateCantidadProducto: (productId: string, cantidad: number) => void;
  updateCantidadPromocion: (promotionId: string, cantidad: number) => void;

  updateCantidadCarrito: () => void;
  totalPrice: () => number;
}

export const useCartStore = create(persist<useCartStoreProps>((set, get) => ({
  // Estado inicial del carrito de productos
  cartProductos: [],
  cartCantidadProductos: 0,
  // Estado inicial del carrito de promociones
  cartPromociones: [],
  cartCantidadPromociones: 0,

  // Función para agregar un producto al carrito
  addToCartProducto: (product) => {
    const existingProduct = get().cartProductos.find(
      (item) => item.id_producto === product.id_producto
    );
    if (existingProduct) {
      set((state) => ({
        cartProductos: state.cartProductos.map((item) =>
          item.id_producto === product.id_producto
            ? { ...item, cantidad: item.cantidad + 1 }
            : item
        ),
      }));
    } else {
      set((state) => ({
        cartProductos: [...state.cartProductos, { ...product, cantidad: 1 }],
        cartCantidadProductos: state.cartCantidadProductos + 1,
      }));
    }
    get().updateCantidadCarrito();
  },

  // Función para agregar una promoción al carrito
  addToCartPromocion: (promotion) => {
    const existingPromotion = get().cartPromociones.find(
      (item) => item.id_promocion === promotion.id_promocion
    );
    if (existingPromotion) {
      set((state) => ({
        cartPromociones: state.cartPromociones.map((item) =>
          item.id_promocion === promotion.id_promocion
            ? { ...item, cantidad: item.cantidad + 1 }
            : item
        ),
      }));
    } else {
      set((state) => ({
        cartPromociones: [
          ...state.cartPromociones,
          { ...promotion, cantidad: 1 },
        ],
        cartCantidadPromociones: state.cartCantidadPromociones + 1,
      }));
    }
    get().updateCantidadCarrito();
  },

  // Función para eliminar un producto del carrito
  removeFromCartProducto: (productId) => {
    set((state) => ({
      cartProductos: state.cartProductos.filter(
        (item) => item.id_producto !== productId
      ),
      cartCantidadProductos: state.cartProductos.some(
        (item) => item.id_producto === productId
      )
        ? state.cartCantidadProductos - 1
        : state.cartCantidadProductos,
    }));
    get().updateCantidadCarrito();
  },

  // Función para eliminar una promoción del carrito
  removeFromCartPromocion: (promotionId) => {
    set((state) => ({
      cartPromociones: state.cartPromociones.filter(
        (item) => item.id_promocion !== promotionId
      ),
      cartCantidadPromociones: state.cartPromociones.some(
        (item) => item.id_promocion === promotionId
      )
        ? state.cartCantidadPromociones - 1
        : state.cartCantidadPromociones,
    }));
    get().updateCantidadCarrito();
  },

  // Función para actualizar la cantidad de un producto
  updateCantidadProducto: (productId, cantidad) => {
    set((state) => ({
      cartProductos: state.cartProductos.map((item) =>
        item.id_producto === productId
          ? { ...item, cantidad: cantidad <= 0 ? 0 : cantidad }
          : item
      ),
    }));
    get().updateCantidadCarrito();
  },

  // Función para actualizar la cantidad de una promoción
  updateCantidadPromocion: (promotionId, cantidad) => {
    set((state) => ({
      cartPromociones: state.cartPromociones.map((item) =>
        item.id_promocion === promotionId
          ? { ...item, cantidad: cantidad <= 0 ? 0 : cantidad }
          : item
      ),
    }));
    get().updateCantidadCarrito();
  },

  // Función para actualizar el número de elementos únicos en el carrito
  updateCantidadCarrito: () => {
    const cartProductosUnicos = get().cartProductos.length;
    const cartPromocionesUnicas = get().cartPromociones.length;
    set({
      cartCantidadProductos: cartProductosUnicos,
      cartCantidadPromociones: cartPromocionesUnicas,
    });
  },

  // Función para obtener el precio total del carrito
  totalPrice: () => {
    const totalProductos = get().cartProductos.reduce(
      (total, item) => total + item.precio * item.cantidad,
      0
    );

    const totalPromociones = get().cartPromociones.reduce(
      (total, item) => total + item.precio * item.cantidad,
      0
    );

    return totalProductos + totalPromociones;
  },
}),{
  name: 'cart-storage',
  
}));
