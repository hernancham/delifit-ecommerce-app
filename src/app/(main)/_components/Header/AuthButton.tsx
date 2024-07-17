"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { usuarioDefault } from "@/config/imageDefault";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const SignInButton = () => {
  const router = useRouter();
  return (
    <Button
      onClick={() => router.push("/login")}
      variant='ghost'
      size='icon'
      className='rounded-full'
    >
      <Avatar>
        <AvatarImage
          src={usuarioDefault}
          alt='Avatar'
        />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </Button>
  );
};
