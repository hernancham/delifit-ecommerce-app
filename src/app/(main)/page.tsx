import { auth } from "@/auth";
import { Hero } from "./_components/Hero";
import { Banner } from "./_components/Banner";
import { Menu } from "./_components/Menu";
import Funciones from "./_components/Funciones";
import { User } from "next-auth";

export default async function Page() {
  return (
    <div>
      <Hero />
      <Banner />
      <Funciones />
      <Menu />
    </div>
  );
}
