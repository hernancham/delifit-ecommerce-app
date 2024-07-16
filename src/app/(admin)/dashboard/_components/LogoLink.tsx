import Link from "next/link";
import Image from "next/image";

export const LogoLink = () => {
  return (
    <Link
      href='/'
      className='group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base'
    >
      <Image
        src='/delifit-logo.svg'
        alt='Delifit'
        width={36}
        height={36}
        className='transition-all group-hover:scale-150'
      />
      <span className='sr-only'>Delifit App</span>
    </Link>
  );
};
