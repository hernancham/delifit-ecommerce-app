import { columns } from "./Columns";
import { DataTable } from "./DataTable";
import { Usuario } from "@/types/db";
import { ObtenerUsuario } from "@/data/Usuario";

async function getData(): Promise<Usuario[]> {
  const result = await ObtenerUsuario();

  return result as Usuario[];
}

export default async function SectionUsuario() {
  const data = await getData();
  return (
    <div>
      <DataTable
        columns={columns}
        data={data}
      />
    </div>
  );
}
