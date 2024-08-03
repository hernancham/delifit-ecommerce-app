import { create } from "zustand";
import { persist } from "zustand/middleware";

interface CartItemProducto {
  id_producto: string;
  img_url: string;
  nombre: string;
  precio: number;
  cantidad: number;
  incluir: boolean; // Añadido para incluir o no en el pedido
}

interface CartItemPromocion {
  id_promocion: string;
  img_url: string;
  nombre: string;
  precio: number;
  cantidad: number;
  incluir: boolean; // Añadido para incluir o no en el pedido
}

interface useCartStoreProps {
  cartProductos: CartItemProducto[];
  cartPromociones: CartItemPromocion[];
  cartCantidadProductos: number;
  cartCantidadPromociones: number;

  addToCartProducto: (
    product: Omit<CartItemProducto, "cantidad" | "incluir">
  ) => void;
  addToCartPromocion: (
    promotion: Omit<CartItemPromocion, "cantidad" | "incluir">
  ) => void;

  removeFromCartProducto: (productId: string) => void;
  removeFromCartPromocion: (promotionId: string) => void;

  updateCantidadProducto: (productId: string, cantidad: number) => void;
  updateCantidadPromocion: (promotionId: string, cantidad: number) => void;

  toggleIncluirProducto: (productId: string) => void;
  toggleIncluirPromocion: (promotionId: string) => void;

  clearCart: () => void;
  updateCantidadCarrito: () => void;
  totalPrice: () => number;
}

export const useCartStore = create(
  persist<useCartStoreProps>(
    (set, get) => ({
      cartProductos: [],
      cartCantidadProductos: 0,
      cartPromociones: [],
      cartCantidadPromociones: 0,

      clearCart: () => {
        set({
          cartProductos: [],
          cartCantidadProductos: 0,
          cartPromociones: [],
          cartCantidadPromociones: 0,
        });
      },

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
            cartProductos: [
              ...state.cartProductos,
              { ...product, cantidad: 1, incluir: true }, // Añadido incluir
            ],
            cartCantidadProductos: state.cartCantidadProductos + 1,
          }));
        }
        get().updateCantidadCarrito();
      },

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
              { ...promotion, cantidad: 1, incluir: true }, // Añadido incluir
            ],
            cartCantidadPromociones: state.cartCantidadPromociones + 1,
          }));
        }
        get().updateCantidadCarrito();
      },

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

      toggleIncluirProducto: (productId) => {
        set((state) => ({
          cartProductos: state.cartProductos.map((item) =>
            item.id_producto === productId
              ? { ...item, incluir: !item.incluir }
              : item
          ),
        }));
      },

      toggleIncluirPromocion: (promotionId) => {
        set((state) => ({
          cartPromociones: state.cartPromociones.map((item) =>
            item.id_promocion === promotionId
              ? { ...item, incluir: !item.incluir }
              : item
          ),
        }));
      },

      updateCantidadCarrito: () => {
        const cartProductosUnicos = get().cartProductos.length;
        const cartPromocionesUnicas = get().cartPromociones.length;
        set({
          cartCantidadProductos: cartProductosUnicos,
          cartCantidadPromociones: cartPromocionesUnicas,
        });
      },

      totalPrice: () => {
        const totalProductos = get()
          .cartProductos.filter((item) => item.incluir) // Solo sumar productos incluidos
          .reduce((total, item) => total + item.precio * item.cantidad, 0);

        const totalPromociones = get()
          .cartPromociones.filter((item) => item.incluir) // Solo sumar promociones incluidas
          .reduce((total, item) => total + item.precio * item.cantidad, 0);

        return totalProductos + totalPromociones;
      },
    }),
    {
      name: "cart-storage",
    }
  )
);
