"use client";

import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";

import { logout } from "@/actions/auth/logout";

export const SignUpButton = () => {
  const router = useRouter();
  return (
    <Button
      onClick={() => router.push("/register")}
      className='hidden rounded-sm bg-lime-500 px-8 py-3 text-base font-medium text-white transition duration-300 hover:bg-opacity-90 sm:block md:px-9 lg:px-6 xl:px-9'
    >
      Register
    </Button>
  );
};

export const SignInButton = () => {
  const router = useRouter();
  return (
    <Button
      onClick={() => router.push("/login")}
      className='text-dark hidden px-7 py-3 text-base font-medium hover:opacity-70 dark:text-white sm:block'
    >
      Login
    </Button>
  );
};

export const SignOutButton = () => {
  const router = useRouter();
  return (
    <Button
      onClick={() => logout()}
      className='hidden rounded-sm bg-lime-500 px-8 py-3 text-base font-medium text-white transition duration-300 hover:bg-opacity-90 sm:block md:px-9 lg:px-6 xl:px-9'
    >
      Logout
    </Button>
  );
};
