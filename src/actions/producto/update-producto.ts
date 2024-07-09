"use server";

import { prisma } from "@/lib/prisma";

interface InsumoOnProductoType {
  id_insumo: string;
  cantidad: number;
}

interface updateProductoByIdType {
  id_producto: string;
  nombre: string;
  descripcion: string;
  precio_base: number;
  id_cat_prodcuto: string;
  img_url: string;
  insumos: InsumoOnProductoType[];
}

export const updateProductoById = async (values: updateProductoByIdType) => {
  try {
    // Crear el insumo en la base de datos
    const data = await prisma.producto.update({
      where: {
        id_producto: values.id_producto,
      },
      data: {
        nombre: values.nombre,
        descripcion: values.descripcion,
        precio_base: values.precio_base,
        id_cat_producto: values.id_cat_prodcuto,
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
