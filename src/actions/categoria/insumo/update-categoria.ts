"use server";

import { prisma } from "@/lib/prisma";

interface updateCategoriaInsumoByIdType {
  id_cat_insumo: string;
  nombre: string;
}

export const updateCategoriaInsumoById = async (
  values: updateCategoriaInsumoByIdType
) => {
  try {
    const data = await prisma.categoriaInsumo.update({
      where: {
        id_cat_insumo: values.id_cat_insumo,
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

interface updateActivityCategoriaInsumoByIdType {
  id_cat_insumo: string;
  activo: boolean;
}

export const updateActivityCategoriaInsumoById = async (
  values: updateActivityCategoriaInsumoByIdType
) => {
  try {
    const data = await prisma.categoriaInsumo.update({
      where: {
        id_cat_insumo: values.id_cat_insumo,
      },
      data: {
        activo: values.activo,
      },
    });

    return data;
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error al actualizar la categoría:", error.message);
    }
    return null;
  }
};
