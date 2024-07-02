import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";
import { createUsuarioSchema } from "@/schemas/usuario";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const isValidateDate = createUsuarioSchema.safeParse(body);

    if (!isValidateDate.success)
      return NextResponse.json(
        {
          error: "Los datos proporcionados no son válidos",
          message: isValidateDate.error,
        },
        { status: 400 }
      );

    const { data } = isValidateDate;

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

      if (errors.length > 0) {
        return NextResponse.json(
          {
            error: "Hay campos que ya están en uso",
            message: `${errors.join(", ")} ya están en uso`,
          },
          { status: 409 }
        );
      }
    }

    const hashedPassword = await bcrypt.hash(data.password, 10);

    const newUser = await prisma.usuario.create({
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

    return NextResponse.json(newUser, { status: 201 });
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error al crear el usuario:", error.message);
    }
    return new NextResponse("Error al crear el usuario", { status: 500 });
  }
}
