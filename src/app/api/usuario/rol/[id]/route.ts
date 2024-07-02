import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { updateRolUsuarioSchema } from "@/schemas/usuario";

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    if (!params.id)
      return new NextResponse("Falta el id del usuario", { status: 400 });

    const body = await request.json();

    const isValidateDate = updateRolUsuarioSchema.safeParse(body);

    if (!isValidateDate.success)
      return NextResponse.json(
        {
          error: "Los datos proporcionados no son válidos",
          message: isValidateDate.error,
        },
        { status: 400 }
      );

    const { data } = isValidateDate;

    const updateUser = await prisma.usuario.update({
      where: {
        id_usuario: params.id,
      },
      data: {
        rol: data.rol,
      },
    });
    return NextResponse.json(updateUser, { status: 200 });
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error al actualizar el rol del usuario:", error.message);
    }
    return new NextResponse("Error al actualizar el rol del usuario", {
      status: 500,
    });
  }
}
