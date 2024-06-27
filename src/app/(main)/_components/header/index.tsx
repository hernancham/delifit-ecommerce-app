import Link from "next/link";

import { auth } from "@/auth";
//import { getSession } from "@/lib/auth";

import { SignUpButton, SignInButton, SignOutButton } from "./AuthButton";

export const Header = async () => {
  const session = await auth();
  const user = session?.user;

  return (
    <nav className='flex justify-around items-center py-4 bg-[#141414] text-white'>
      <Link
        href='/'
        className='text-xl font-bold'
      >
        Delifit App
      </Link>

      <ul className='hidden md:flex space-x-4 list-none'>
        {!user ? (
          <>
            <li>
              <SignInButton />
            </li>
            <li>
              <SignUpButton />
            </li>
          </>
        ) : (
          <>
            <li className='mt-2'>
              <Link
                href='/dashboard'
                className='hover:text-gray-400'
              >
                Dashboard
              </Link>
            </li>
            <SignOutButton />
          </>
        )}
      </ul>
    </nav>
  );
};
