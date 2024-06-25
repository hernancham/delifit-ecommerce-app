"use server";

import bcrypt from "bcryptjs";
import { uploadImage } from "@/actions/image/upload-image";
import { prisma } from "@/lib/prisma";
import { TipoDocumento } from "@prisma/client";

interface createUsuarioType {
  nombre: string;
  apellido: string;
  email: string;
  telefono: string;
  documento: string;
  tipo_doc: string;
  password: string;
  image_file?: File | null;
  image_url?: string | null;
}

export const createUsuario = async (values: createUsuarioType) => {
  let imageUrl = values.image_url;

  try {
    // Manejo de la imagen
    if (values.image_file) {
      imageUrl = await uploadImage({ image_file: values.image_file });
      if (!imageUrl) {
        throw new Error("Error al subir la imagen.");
      }
    }

    // Encriptar la contraseña
    const hashedPassword = await bcrypt.hash(values.password, 10);

    // Crear el usuario en la base de datos
    const data = await prisma.usuario.create({
      data: {
        nombre: values.nombre,
        apellido: values.apellido,
        email: values.email,
        telefono: values.telefono,
        documento: values.documento,
        tipo_doc: values.tipo_doc as TipoDocumento,
        password: hashedPassword,
        image: imageUrl || undefined,
      },
    });

    return data;
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error al crear el usuario:", error.message);
    }
    return null;
  }
};
