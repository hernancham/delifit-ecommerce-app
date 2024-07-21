"use server";

import { prisma } from "@/lib/prisma";

interface InsumoOnProductoType {
  id_insumo: string;
  cantidad: number;
}

interface createProductoType {
  nombre: string;
  descripcion: string;
  precio_base: number;
  id_cat_producto: string;
  img_url: string;
  insumos: InsumoOnProductoType[];
}

export const createProducto = async (values: createProductoType) => {
  try {
    // Crear el producto en la base de datos
    const data = await prisma.producto.create({
      data: {
        nombre: values.nombre,
        descripcion: values.descripcion,
        precio_base: values.precio_base,
        id_cat_producto: values.id_cat_producto,
        img_url: values.img_url,
      },
    });

    for (let insumo of values.insumos) {
      await prisma.insumoOnProducto.create({
        data: {
          id_insumo: insumo.id_insumo,
          id_producto: data.id_producto,
          cantidad: insumo.cantidad,
        },
      });
    }

    return data;
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error al crear el producto:", error.message);
    }
    return null;
  }
};
