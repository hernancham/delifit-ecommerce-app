"use server";

import { prisma } from "@/lib/prisma";
import { uploadImage } from "@/actions/image/upload-image";

interface InsumoOnProductoType {
  id_insumo: string;
  cantidad: number;
}

interface createProductoType {
  nombre: string;
  descripcion: string;
  precio_base: number;
  id_cat_prodcuto: string;
  image_file?: File | null;
  image_url?: string | null;
  insumos: InsumoOnProductoType[];
}

export const createProducto = async (values: createProductoType) => {
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
    const data = await prisma.producto.create({
      data: {
        nombre: values.nombre,
        descripcion: values.descripcion,
        precio_base: values.precio_base,
        id_cat_producto: values.id_cat_prodcuto,
        img_url: imageUrl || "",
      },
    });

    for (let insumo of values.insumos) {
      await prisma.insumoOnProducto.create({
        data: {
          id_insumo: insumo.id_insumo,
          id_producto: data.id_producto,
          cantidad: insumo.cantidad,
        },
      });
    }

    return data;
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error al crear el producto:", error.message);
    }
    return null;
  }
};
