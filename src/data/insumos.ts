import axios from "axios";
import { CategoriaInsumo, Insumo } from "@/types/db";

export const getInsumo = async (id: string) => {
  try {
    const response = await axios.get<Insumo>(`/api/insumo/${id}`);
    return response.data;
  } catch (error) {
    throw new Error("Error al obtener el insumo");
  }
};

export const getCategoriasInsumo = async () => {
  try {
    const response = await axios.get<CategoriaInsumo[]>(
      "/api/categoria/insumo",
      {
        params: {
          activo: "true",
        },
      }
    );
    return response.data;
  } catch (error) {
    throw new Error("Error al leer las categorias de insumos");
  }
};
