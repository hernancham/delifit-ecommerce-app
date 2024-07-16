"use server";

import { prisma } from "@/lib/prisma";

interface createCategoriaProductoType {
  nombre: string;
}

export const createCategoriaProducto = async (
  values: createCategoriaProductoType
) => {
  try {
    const data = await prisma.categoriaProducto.create({
      data: {
        nombre: values.nombre,
      },
    });

    return data;
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error al crear la categoría:", error.message);
    }
    return null;
  }
};
