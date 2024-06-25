"use server";

import { prisma } from "@/lib/prisma";

interface deleteCategoriaPromocionByIdType {
  id_cat_promocion: string;
}

export const deleteCategoriaPromocionById = async (
  values: deleteCategoriaPromocionByIdType
) => {
  try {
    const data = await prisma.categoriaPromocion.delete({
      where: {
        id_cat_promocion: values.id_cat_promocion,
      },
    });

    return data;
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error al eliminar la categoria:", error.message);
    }
    return null;
  }
};
