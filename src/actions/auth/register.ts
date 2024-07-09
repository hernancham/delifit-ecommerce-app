"use server";

import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";
import { signIn } from "@/auth";
// types
import { registerSchema, registerType } from "@/schemas/auth";
// errors
import { AuthError } from "next-auth";

export const register = async (values: registerType) => {
  try {
    const { data, success } = registerSchema.safeParse(values);
    if (!success) return { error: "Los datos proporcionados no son válidos" };

    const userExists = await prisma.usuario.findFirst({
      where: {
        OR: [
          { email: data.email },
          { telefono: data.telefono },
          { documento: data.documento },
        ],
      },
    });

    if (userExists) {
      let errors = [];

      if (userExists.email === data.email) errors.push("Email");
      if (userExists.telefono === data.telefono) errors.push("Teléfono");
      if (userExists.documento === data.documento) errors.push("Documento");
      return {
        error: "Hay campos que ya están en uso",
        message: `${errors.join(", ")} ya están en uso`,
      };
    }

    const hashedPassword = await bcrypt.hash(data.password, 10);

    await prisma.usuario.create({
      data: {
        nombre: data.nombre,
        apellido: data.apellido,
        telefono: data.telefono,
        email: data.email,
        documento: data.documento,
        tipo_doc: data.tipo_doc,
        password: hashedPassword,
        image: data.image,
      },
    });

    await signIn("credentials", {
      telefono: data.telefono,
      password: data.password,
      redirect: false,
    });

    return { success: "Te has registrado correctamente" };
  } catch (error) {
    if (error instanceof AuthError) {
      return { error: error.cause?.err?.message };
    }
    return { error: "Error 500" };
  }
};
