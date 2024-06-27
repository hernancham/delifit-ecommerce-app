"use server";

import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";
import { TipoDocumento } from "@prisma/client";

interface updateUsuarioByIdType {
  id_usuario: string;
  nombre: string;
  apellido: string;
  email: string;
  telefono: string;
  documento: string;
  tipo_doc: string;
  password: string;
  image: string;
}

export const updateUsuarioById = async (values: updateUsuarioByIdType) => {
  try {
    // Encriptar la contraseña
    const hashedPassword = await bcrypt.hash(values.password, 10);

    // Actualizar el usuario en la base de datos
    const data = await prisma.usuario.update({
      where: {
        id_usuario: values.id_usuario,
      },
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
      console.error("Error al actualizar el usuario:", error.message);
    }
    return null;
  }
};

interface updateActivityUsuarioByIdType {
  id_usuario: string;
  activo: boolean;
}

export const updateActivityUsuarioById = async (
  values: updateActivityUsuarioByIdType
) => {
  try {
    const data = await prisma.usuario.update({
      where: {
        id_usuario: values.id_usuario,
      },
      data: {
        activo: values.activo,
      },
    });

    return data;
  } catch (error) {
    if (error instanceof Error) {
      console.error(
        "Error al actualizar la actividad del usuario:",
        error.message
      );
    }
    return null;
  }
};
