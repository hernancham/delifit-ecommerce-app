import Image from "next/image";
import Link from "next/link";

import { siteConfig } from "@/config/site";

export function Logo() {
  return (
    <Link
      href='/'
      className='flex w-full items-center gap-4 py-5 lg:py-4'
    >
      <Image
        src='/assets/esisfactu-logo.svg'
        alt='logo'
        width={42}
        height={42}
        className='w-15'
      />
    </Link>
  );
}
