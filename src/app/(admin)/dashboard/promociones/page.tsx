import { HeaderUsuarios } from "./_components/HeaderPromocion";
import { TablaUsuarios } from "./_components/TablaUsuarios";

export default function Page() {
  return (
    <div className='container mx-auto py-6'>
      <HeaderUsuarios />
      <TablaUsuarios />
    </div>
  );
}
