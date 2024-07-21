import axios from "axios";
import { CategoriaProducto, Producto } from "@/types/db";

export const getProducto = async (id: string) => {
  try {
    const response = await axios.get<Producto>(`/api/producto/${id}`);
    return response.data;
  } catch (error) {
    throw new Error("Error al obtener el producto");
  }
};

export const getCategoriasProducto = async () => {
  try {
    const response = await axios.get<CategoriaProducto[]>(
      "/api/categoria/producto",
      {
        params: {
          activo: "true",
        },
      }
    );
    return response.data;
  } catch (error) {
    throw new Error("Error al leer las categorias de productos");
  }
};
