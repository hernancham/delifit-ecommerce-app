"use server";

import { prisma } from "@/lib/prisma";

interface deleteCategoriaProductoByIdType {
  id_cat_producto: string;
}

export const deleteCategoriaProductoById = async (
  values: deleteCategoriaProductoByIdType
) => {
  try {
    const data = await prisma.categoriaProducto.delete({
      where: {
        id_cat_producto: values.id_cat_producto,
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
