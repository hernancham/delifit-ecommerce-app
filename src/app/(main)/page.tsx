import { auth } from "@/auth";
import { Hero } from "./_components/Hero";
import { Banner } from "./_components/Banner";
import { Menu } from "./_components/Menu";
import { Testimonial } from "./_components/Testimonial";
import { Newsletter } from "./_components/Newsletter";

export default async function Page() {
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
