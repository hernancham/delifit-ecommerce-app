import { HeaderUsuarios } from "./_components/HeaderUsuarios";
import { TablaUsuarios } from "./_components/TablaUsuarios";

export default function Page() {
  return (
    <div className='container mx-auto py-6'>
      <HeaderUsuarios />
      <TablaUsuarios />
    </div>
  );
}
