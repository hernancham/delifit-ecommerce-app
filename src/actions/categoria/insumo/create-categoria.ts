"use server";

import { prisma } from "@/lib/prisma";

interface createCategoriaInsumoType {
  nombre: string;
}

export const createCategoriaInsumo = async (
  values: createCategoriaInsumoType
) => {
  try {
    const data = await prisma.categoriaInsumo.create({
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
