"use server";

import { auth } from "@/auth";
/* import { Footer } from "./_components/Footer"; */
import { Header } from "./_components/Header";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  return (
    <section>
      <Header session={session} />
      {children}
      {/* <Footer /> */}
    </section>
  );
}
