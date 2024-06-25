"use server";

import { prisma } from "@/lib/prisma";

interface updateCategoriaPromocionByIdType {
  id_cat_promocion: string;
  nombre: string;
}

export const updateCategoriaPromocionById = async (
  values: updateCategoriaPromocionByIdType
) => {
  try {
    const data = await prisma.categoriaPromocion.update({
      where: {
        id_cat_promocion: values.id_cat_promocion,
      },
      data: {
        nombre: values.nombre,
      },
    });

    return data;
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error al actualizar la categoria:", error.message);
    }
    return null;
  }
};

interface updateActivityCategoriaPromocionByIdType {
  id_cat_promocion: string;
  activo: boolean;
}

export const updateActivityCategoriaProductoById = async (
  values: updateActivityCategoriaPromocionByIdType
) => {
  try {
    const data = await prisma.categoriaPromocion.update({
      where: {
        id_cat_promocion: values.id_cat_promocion,
      },
      data: {
        activo: values.activo,
      },
    });

    return data;
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error al actualizar la categoria:", error.message);
    }
    return null;
  }
};
