"use client";

import {
  Card,
  CardContent,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

interface CommentCardProps {
  coment: {
    image: string;
    name: string;
    description: string;
  };
}

export const ComentCard = ({ coment }: CommentCardProps) => {
  return (
    <Card className='flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl bg-primary/10 relative'>
      <div className='mb-4'>
        <img
          src={coment.image}
          alt='usuario'
          className='rounded-full w-20 h-20'
        />
      </div>
      <CardContent className='flex flex-col items-center gap-4'>
        <div className='space-y-3'>
          <CardDescription className='text-xs text-gray-500'>
            {coment.description}
          </CardDescription>
          <CardTitle className='text-xl font-bold text-black/80 font-cursive2'>
            {coment.name}
          </CardTitle>
        </div>
      </CardContent>
      <p className='text-black/20 text-9xl font-serif absolute top-0 right-0'>
        ,,
      </p>
    </Card>
  );
};
