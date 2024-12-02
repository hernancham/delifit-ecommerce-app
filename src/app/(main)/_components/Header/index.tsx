"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

import { Logo } from "./Logo";
import { SheetMenu } from "./SheetMenu";
import { NavMenu } from "./NavMenu";
import { ThemeToggler } from "./ThemeToggler";
import { SignInButton } from "./AuthButton";
import { OptionsAuth } from "./OptionsAuth";
import { Session } from "next-auth";
import { Home } from "lucide-react";
import { Icons } from "@/config/navLinksIcons";
import { Button } from "@/components/ui/button";

import { useRouter } from "next/navigation";
import { ShopCar } from "./ShopCar";

const navbarLinks = [
  //{ path: "/menu", label: "Menú" },
  { path: "/menu/productos", label: "Productos" },
  { path: "/menu/promociones", label: "Promociones" },
  { path: "/menu/carrito", label: "Carrito" },
  { path: "/preguntas-frecuentes", label: "FAQ" },
];

export const Header = ({ session }: { session: Session | null }) => {
  const router = useRouter();
  return (
    <header
      className={cn(
        "left-0 top-0 mx-auto flex w-full flex-row items-center bg-blue-600 dark:bg-black dark:bg-opacity-20 px-2 sm:px-4 md:px-8 lg:px-16",
        {
          "fixed z-50 bg-opacity-30 backdrop-blur-sm": true,
        }
      )}
    >
      <div className='flex w-auto flex-none flex-row items-center justify-start'>
        <SheetMenu navbarLinks={navbarLinks} />
        <Logo />
        {session && session.user.userRole === "ADMIN" ? (
          <Button
            size='icon'
            onClick={() => {
              router.push("/dashboard");
            }}
            className='m-2 shrink-0 rounded-lg bg-slate-50 bg-opacity-5'
          >
            <Home className='h-7 w-7 stroke-current' />
          </Button>
        ) : null}
      </div>
      <div className='grow'>
        <NavMenu navbarLinks={navbarLinks} />
      </div>
      <div className='flex w-auto flex-none flex-row items-center justify-end'>
        {/* <Auth Buttons /> */}
        <ThemeToggler />
        {session ? (
          <>
            <div className=' flex gap-2 m-4'>
              <OptionsAuth user={session.user} />
            </div>
          </>
        ) : (
          <div className=' flex gap-2 m-3'>
            <SignInButton />
          </div>
        )}
        <ShopCar />
      </div>
    </header>
  );
};
