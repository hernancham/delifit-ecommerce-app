import { HeaderPromocion } from "./_components/HeaderPromocion";
import { TablaPromocion } from "./_components/TablaPromocion";

export default function Page() {
  return (
    <div className='container mx-auto py-6'>
      <HeaderPromocion />
      <TablaPromocion />
    </div>
  );
}
