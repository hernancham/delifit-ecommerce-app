"use server";

import { uploadImage } from "@/actions/image/upload-image";
import { prisma } from "@/lib/prisma";
import { TipoMedida } from "@prisma/client";

interface createInsumoType {
  nombre: string;
  cantidad: number;
  medidad: TipoMedida;
  id_cat_insumo: string;
  image_file?: File | null;
  image_url?: string | null;
}

export const createInsumo = async (values: createInsumoType) => {
  let imageUrl = values.image_url;

  try {
    // Manejo de la imagen
    if (values.image_file) {
      imageUrl = await uploadImage({ image_file: values.image_file });
      if (!imageUrl) {
        throw new Error("Error al subir la imagen.");
      }
    }

    // Crear el insumo en la base de datos
    const data = await prisma.insumo.create({
      data: {
        nombre: values.nombre,
        cantidad: values.cantidad,
        medida: values.medidad as TipoMedida,
        id_cat_insumo: values.id_cat_insumo,
        img_url: imageUrl || "",
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
