"use server";

import { prisma } from "@/lib/prisma";

interface readCategoriaProductoByIdType {
  id_cat_producto: string;
}

export const readCategoriaProductoById = async (
  values: readCategoriaProductoByIdType
) => {
  try {
    const data = await prisma.categoriaProducto.findUnique({
      where: {
        id_cat_producto: values.id_cat_producto,
      },
      select: {
        id_cat_producto: true,
        nombre: true,
      },
    });

    return data;
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error al leer la categoría:", error.message);
    }
    return null;
  }
};

export const readCategoriasProducto = async () => {
  try {
    const data = await prisma.categoriaProducto.findMany();

    return data;
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error al leer las categorías:", error.message);
    }
    return null;
  }
};

interface readCategoriaProductoByActivityType {
  activo: boolean;
}

export const readCategoriaProductoByActivity = async (
  values: readCategoriaProductoByActivityType
) => {
  try {
    const data = await prisma.categoriaProducto.findMany({
      where: {
        activo: values.activo,
      },
    });

    return data;
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error al leer las categorías:", error.message);
    }
    return null;
  }
};
