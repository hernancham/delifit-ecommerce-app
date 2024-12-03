import { Hero } from "./_components/Hero";
import { Banner } from "./_components/Banner";
import { Menu } from "./_components/Menu";
import Funciones from "./_components/Funciones";
import { RolOptions } from "./_components/RolOptions";

export default function Page() {
  return (
    <div className='min-h-screen bg-gray-100 dark:bg-neutral-700 flex flex-col items-center pt-20'>
      <RolOptions />
      {/* <Hero />
      <Banner />
      <Funciones />
      <Menu /> */}
    </div>
  );
}
