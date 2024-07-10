import Image from "next/image";
import Link from "next/link";

import { siteConfig } from "@/config/site";

export function Logo() {
  return (
    <Link
      href='/'
      className='flex w-full items-center gap-4 py-5 lg:py-4'
    >
      <img
        src='food-safety.svg'
        alt='logo'
        width={20}
        height={20}
        className='w-10'
      />
      <h1 className='text-3xl font-bold text-lime-500'>{siteConfig.name}</h1>
    </Link>
  );
}
