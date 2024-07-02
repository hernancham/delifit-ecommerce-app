import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { updatePuntosUsuarioSchema } from "@/schemas/usuario";

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    if (!params.id)
      return new NextResponse("Falta el id del usuario", { status: 400 });

    const body = await request.json();

    const isValidateDate = updatePuntosUsuarioSchema.safeParse(body);

    if (!isValidateDate.success)
      return NextResponse.json(
        {
          error: "Los datos proporcionados no son válidos",
          message: isValidateDate.error,
        },
        { status: 400 }
      );

    const { data } = isValidateDate;

    const userExists = await prisma.usuario.findUnique({
      where: {
        id_usuario: params.id,
      },
    });

    if (!userExists)
      return NextResponse.json(
        { error: "El usuario no existe en la base de datos" },
        {
          status: 404,
        }
      );

    const nuevosPuntos = userExists.puntos + data.puntos;

    if (nuevosPuntos < 0)
      return NextResponse.json(
        { error: "No tienes suficientes puntos para realizar esta acción" },
        {
          status: 400,
        }
      );

    if (nuevosPuntos > 2147483647)
      return NextResponse.json(
        { error: "Has superado el límite de puntos permitidos" },
        {
          status: 400,
        }
      );

    const updateUser = await prisma.usuario.update({
      where: {
        id_usuario: params.id,
      },
      data: {
        puntos: nuevosPuntos,
      },
    });
    return NextResponse.json(updateUser, { status: 200 });
  } catch (error) {
    if (error instanceof Error) {
      console.error(
        "Error al actualizar los puntos del usuario:",
        error.message
      );
    }
    return new NextResponse("Error al actualizar los puntos del usuario", {
      status: 500,
    });
  }
}
