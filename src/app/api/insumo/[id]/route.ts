import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    if (!params.id)
      return new NextResponse("Falta el id del insumo", { status: 400 });
    const data = await prisma.insumo.findUnique({
      where: {
        id_insumo: params.id,
      },
    });
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error al leer el insumo:", error.message);
    }
    return new NextResponse("Error al leer el insumo", { status: 500 });
  }
}
