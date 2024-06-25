"use server";

import { prisma } from "@/lib/prisma";
import { uploadImage } from "@/actions/image/upload-image";

interface InsumoOnProductoType {
  id_insumo: string;
  cantidad: number;
}
