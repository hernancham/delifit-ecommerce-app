"use server";

import { prisma } from "@/lib/prisma";

interface readCategoriaPromocionByIdType {
  id_cat_promocion: string;
}

export const readCategoriaPromocionById = async (
  values: readCategoriaPromocionByIdType
) => {
  try {
    const data = await prisma.categoriaPromocion.findUnique({
      where: {
        id_cat_promocion: values.id_cat_promocion,
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

export const readCategoriaPromocion = async () => {
  try {
    const data = await prisma.categoriaPromocion.findMany();

    return data;
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error al leer las categorías:", error.message);
    }
    return null;
  }
};

interface readCategoriaPromocionByActivityType {
  activo: boolean;
}

export const readCategoriaPromocionByActivity = async (
  values: readCategoriaPromocionByActivityType
) => {
  try {
    const data = await prisma.categoriaPromocion.findMany({
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
