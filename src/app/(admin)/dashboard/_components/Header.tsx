"use client";

import { SheetMenu } from "./SheetMenu";
import { LogoLink } from "./LogoLink";
import { IndexPage } from "./IndexPage";
import { InputSearch } from "./InputSearch";
import { ThemeToggler } from "./ThemeToggler";
import { OptionsAuth } from "./OptionsAuth";

export function Header() {
  return (
    <header className='flex items-center h-16 px-4 border-green_p-light dark:border-graphite-deep shrink-0 md:px-6 justify-between bg-green_p-light dark:bg-graphite-deep'>
      <div className='flex items-center gap-4'>
        <SheetMenu />
        <LogoLink />
        <IndexPage />
      </div>
      <div className='flex items-center gap-4'>
        <InputSearch />
        <ThemeToggler />
        <OptionsAuth />
      </div>
    </header>
  );
}
