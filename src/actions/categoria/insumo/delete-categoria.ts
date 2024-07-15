"use server";

import { prisma } from "@/lib/prisma";

interface deleteCategoriaInsumoByIdType {
  id_cat_insumo: string;
}

export const deleteCategoriaInsumoById = async (
  values: deleteCategoriaInsumoByIdType
) => {
  try {
    const data = await prisma.categoriaInsumo.delete({
      where: {
        id_cat_insumo: values.id_cat_insumo,
      },
    });

    return data;
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error al eliminar la categoría:", error.message);
    }
    return null;
  }
};
