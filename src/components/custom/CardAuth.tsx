"use client";

import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

interface CardWrapperProps {
  title?: string;
  description?: string;
  header?: React.ReactNode;
  children: React.ReactNode;
  footer?: React.ReactNode;
}

export const CardAuth = ({
  children,
  header,
  title,
  description,
  footer,
}: CardWrapperProps) => {
  return (
    <Card className='w-[400px] shadow-md'>
      <CardHeader className='w-full flex flex-col gap-y-1 items-center justify-center'>
        {header}
        <CardTitle className={cn("text-3xl font-semibold", font.className)}>
          {title}
        </CardTitle>
        <CardDescription className='text-muted-foreground text-sm text-center'>
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent>{children}</CardContent>
      <CardFooter className='flex justify-center'>{footer}</CardFooter>
    </Card>
  );
};
