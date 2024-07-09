import { HeaderInsumos } from "./_components/HeaderInsumos";
import { TablaUsuarios } from "./_components/TablaUsuarios";

export default function Page() {
  return (
    <div className='container mx-auto py-6'>
      <HeaderInsumos />
      <TablaUsuarios />
    </div>
  );
}
