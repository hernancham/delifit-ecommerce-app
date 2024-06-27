import { TipoDocumento, TipoMedida } from "@prisma/client";

export const TIPOS_DOCUMENTO = Object.values(TipoDocumento) as [
  string,
  ...string[]
];

export const TIPOS_MEDIDA = Object.values(TipoMedida) as [string, ...string[]];
