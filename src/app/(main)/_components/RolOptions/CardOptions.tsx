import Image from "next/image";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useRouter } from "next/navigation";

interface CardOptionsProps {
  url: string;
  title: string;
  image: string;
  description: string;
  footer: string;
}

export const CardOptions = ({
  url,
  title,
  image,
  description,
  footer,
}: CardOptionsProps) => {
  const router = useRouter();
  return (
    <Card
      onClick={() => {
        router.push(url);
      }}
    >
      <CardHeader>
        <CardTitle className='text-2xl font-semibold dark:text-black '>
          {title}
        </CardTitle>
        <Image
          src={image}
          alt={title}
          width={64}
          height={64}
          className='mx-auto py-2'
        />
      </CardHeader>
      <CardContent>
        <CardDescription className='mt-2 text-gray-600'>
          {description}
        </CardDescription>
      </CardContent>
      <CardFooter>{footer}</CardFooter>
    </Card>
  );
};
