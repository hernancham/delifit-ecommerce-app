"use server";

import { prisma } from "@/lib/prisma";

interface readCategoriaInsumoByIdType {
  id_cat_insumo: string;
}

export const readCategoriaInsumoById = async (
  values: readCategoriaInsumoByIdType
) => {
  try {
    const data = await prisma.categoriaInsumo.findUnique({
      where: {
        id_cat_insumo: values.id_cat_insumo,
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

export const readCategoriasInsumo = async () => {
  try {
    const data = await prisma.categoriaInsumo.findMany();

    return data;
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error al leer las categorías:", error.message);
    }
    return null;
  }
};

interface readCategoriaInsumoByActivityType {
  activo: boolean;
}

export const readCategoriaInsumoByActivity = async (
  values: readCategoriaInsumoByActivityType
) => {
  try {
    const data = await prisma.categoriaInsumo.findMany({
      where: {
        activo: values.activo,
      },
    });

    return data;
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error al leer las categorias:", error.message);
    }
    return null;
  }
};
