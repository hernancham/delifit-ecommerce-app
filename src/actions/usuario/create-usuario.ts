"use server";

import bcrypt from "bcryptjs";
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
  image: string;
}

export const createUsuario = async (values: createUsuarioType) => {
  try {
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
        image: values.image,
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
