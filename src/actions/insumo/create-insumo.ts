"use server";

import { prisma } from "@/lib/prisma";
import { TipoMedida } from "@prisma/client";

interface createInsumoType {
  nombre: string;
  cantidad: number;
  medidad: TipoMedida;
  id_cat_insumo: string;
  img_url: string;
}

export const createInsumo = async (values: createInsumoType) => {
  try {
    // Crear el insumo en la base de datos
    const data = await prisma.insumo.create({
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
      console.error("Error al crear el insumo:", error.message);
    }
    return null;
  }
};
