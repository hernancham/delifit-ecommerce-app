import { columns } from "./table/Columns";
import { DataTable } from "./table/DataTable";
import { Usuario } from "@/types/db";
import axios from "axios";
const getUsuarios = async () => {
  try {
    const response = await axios.get<Usuario[]>("/api/usuario");
    return response.data;
  } catch (error) {
    throw new Error("Error al leer los usuarios");
  }
};
export default async function SectionUsuario() {
  const data = await getUsuarios();
  return (
    <div>
      <DataTable
        columns={columns}
        data={data}
        searchKey='nombre'
      />
    </div>
  );
}
