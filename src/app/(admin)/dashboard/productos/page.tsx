import { HeaderProductos } from "./_components/HeaderProductos";
import { TablaProductos } from "./_components/TablaProductos";

export default function Page() {
  return (
    <div className='container mx-auto py-6'>
      <HeaderProductos />
      <TablaProductos />
    </div>
  );
}
