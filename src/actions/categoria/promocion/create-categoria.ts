"use server";

import { prisma } from "@/lib/prisma";

interface createCategoriaPromocionType {
  nombre: string;
}

export const createCategoriaPromocion = async (
  values: createCategoriaPromocionType
) => {
  try {
    const data = await prisma.categoriaPromocion.create({
      data: {
        nombre: values.nombre,
      },
    });

    return data;
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error al crear la categoria:", error.message);
    }
    return null;
  }
};
