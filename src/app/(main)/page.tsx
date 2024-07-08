import { auth } from "@/auth";
import { Hero } from "./_components/Hero";
import { Banner } from "./_components/Banner";
import { Menu } from "./_components/Menu";
import { Testimonial } from "./_components/Testimonial";
import { Newsletter } from "./_components/Newsletter";

export default async function Page() {
  const session = await auth();
  return (
    <div>
      <Hero />
      <Banner />
      <Menu />
      <Testimonial />
      <Newsletter />
    </div>
  );
}

/* 
      <div className='flex items-center justify-center'>
      <div className='flex flex-col gap-4'>
        <h1>Prueba de Deploy en Vercel: </h1>
        <pre>{JSON.stringify(session, null, 2)}</pre>
        <span>Delifit App Test</span>
      </div>
    </div> 
    */
