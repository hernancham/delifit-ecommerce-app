import axios from "axios";
import { CategoriaPromocion, Promocion } from "@/types/db";

export const getProducto = async (id: string) => {
  try {
    const response = await axios.get<Promocion>(`/api/promocion/${id}`);
    return response.data;
  } catch (error) {
    throw new Error("Error al obtener la promoción");
  }
};

export const getCategoriasPromocion = async () => {
  try {
    const response = await axios.get<CategoriaPromocion[]>(
      "/api/categoria/promocion",
      {
        params: {
          activo: "true",
        },
      }
    );
    return response.data;
  } catch (error) {
    throw new Error("Error al leer las categorias de promociones");
  }
};
