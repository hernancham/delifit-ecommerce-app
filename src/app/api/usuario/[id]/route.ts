import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { updateUsuarioSchema } from "@/schemas/usuario";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    if (!params.id)
      return new NextResponse("Falta el id del usuario", { status: 400 });
    const data = await prisma.usuario.findUnique({
      where: {
        id_usuario: params.id,
      },
    });
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error al leer el usuario:", error.message);
    }
    return new NextResponse("Error al leer el usuario", { status: 500 });
  }
}

export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    if (!params.id)
      return new NextResponse("Falta el id del usuario", { status: 400 });

    const body = await request.json();

    const isValidateDate = updateUsuarioSchema.safeParse(body);

    if (!isValidateDate.success)
      return NextResponse.json(
        {
          error: "Los datos proporcionados no son válidos",
          message: isValidateDate.error,
        },
        { status: 400 }
      );

    const { data } = isValidateDate;

    if (data.email || data.telefono || data.documento) {
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
    }

    console.log("data: ", data);
    console.log("data.nombre: ", data.nombre);
    console.log("data.apellido: ", data.apellido);

    const updateUser = await prisma.usuario.update({
      where: {
        id_usuario: params.id,
      },
      data: {
        nombre: data.nombre,
        apellido: data.apellido,
        email: data.email,
        telefono: data.telefono,
        documento: data.documento,
        tipo_doc: data.tipo_doc,
        image: data.image,
      },
    });
    return NextResponse.json(updateUser, { status: 200 });
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error al actualizar el usuario:", error.message);
    }
    return new NextResponse("Error al actualizar el usuario", { status: 500 });
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    if (!params.id)
      return new NextResponse("Falta el id del usuario", { status: 400 });

    const deleteUser = await prisma.usuario.delete({
      where: {
        id_usuario: params.id,
      },
    });
    return NextResponse.json(deleteUser, { status: 200 });
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error al eliminar el usuario:", error.message);
    }
    return new NextResponse("Error al eliminar el usuario", { status: 500 });
  }
}
