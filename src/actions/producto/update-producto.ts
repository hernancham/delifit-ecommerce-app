"use server";

import { prisma } from "@/lib/prisma";

interface InsumoOnProductoType {
  id_insumo: string;
  cantidad: number;
}
