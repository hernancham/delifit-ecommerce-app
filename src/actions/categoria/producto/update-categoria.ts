"use server";

import { prisma } from "@/lib/prisma";

interface updateCategoriaProductoByIdType {
  id_cat_producto: string;
  nombre: string;
}

export const updateCategoriaProductoById = async (
  values: updateCategoriaProductoByIdType
) => {
  try {
    const data = await prisma.categoriaProducto.update({
      where: {
        id_cat_producto: values.id_cat_producto,
      },
      data: {
        nombre: values.nombre,
      },
    });

    return data;
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error al actualizar la categoría:", error.message);
    }
    return null;
  }
};

interface updateActivityCategoriaProductoByIdType {
  id_cat_producto: string;
  activo: boolean;
}

export const updateActivityCategoriaProductoById = async (
  values: updateActivityCategoriaProductoByIdType
) => {
  try {
    const data = await prisma.categoriaProducto.update({
      where: {
        id_cat_producto: values.id_cat_producto,
      },
      data: {
        activo: values.activo,
      },
    });

    return data;
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error al actualizar la categoría:", error.message);
    }
    return null;
  }
};
