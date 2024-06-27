"use server";

import { prisma } from "@/lib/prisma";
import { TipoMedida } from "@prisma/client";

interface updateInsumoByIdType {
  id_insumo: string;
  nombre: string;
  cantidad: number;
  medidad: TipoMedida;
  id_cat_insumo: string;
  img_url: string;
}

export const updateInsumoById = async (values: updateInsumoByIdType) => {
  try {
    // Actualizar el insumo en la base de datos
    const data = await prisma.insumo.update({
      where: {
        id_insumo: values.id_insumo,
      },
      data: {
        nombre: values.nombre,
        cantidad: values.cantidad,
        medida: values.medidad as TipoMedida,
        id_cat_insumo: values.id_cat_insumo,
        img_url: values.img_url,
      },
    });

    return data;
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error al actualizar el insumo:", error.message);
    }
    return null;
  }
};

interface updateActivityInsumoByIdType {
  id_insumo: string;
  activo: boolean;
}

export const updateActivityInsumoById = async (
  values: updateActivityInsumoByIdType
) => {
  try {
    // Actualizar el insumo en la base de datos
    const data = await prisma.insumo.update({
      where: {
        id_insumo: values.id_insumo,
      },
      data: {
        activo: values.activo,
      },
    });

    return data;
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error al actualizar el insumo:", error.message);
    }
    return null;
  }
};
