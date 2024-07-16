"use server";

import { prisma } from "@/lib/prisma";

interface createPedidoType {
  id_usuario: string;
  total: number;
  productos: {
    id_producto: string;
    precio_cantidad: number;
    cantidad: number;
  }[];
  promocion: {
    id_promocion: string;
    precio_cantidad: number;
    cantidad: number;
  }[];
}

export const createPedido = async (values: createPedidoType) => {
  try {
    // Crear el pedido en la base de datos
    const data = await prisma.pedido.create({
      data: {
        id_usuario: values.id_usuario,
        total: values.total,
        lista_producto: {
          createMany: {
            data: values.productos,
          },
        },
        lista_promocion: {
          createMany: {
            data: values.promocion,
          },
        },
      },
    });

    return data;
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error al crear el pedido:", error.message);
    }
    return null;
  }
};
