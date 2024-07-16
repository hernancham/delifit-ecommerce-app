"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { MenuCard } from "./MenuCard";

const Menus = [
  {
    name: "Pizza",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "https://randomuser.me/api/portrait",
    price: 10,
  },
  {
    name: "Hamburguer",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "https://randomuser.me/api/portrait",
    price: 10,
  },
  {
    name: "Hot Dog",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "https://randomuser.me/api/portrait",
    price: 10,
  },
  {
    name: "Tacos",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "https://randomuser.me/api/portrait",
    price: 10,
  },
  {
    name: "Sushi",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "https://randomuser.me/api/portrait",
    price: 10,
  },
  {
    name: "Pasta",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "https://randomuser.me/api/portrait",
    price: 10,
  },
];

export const Menu = () => {
  const {
    data: Productos,
    isError,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["productos"],
    queryFn: getProductos,
  });

  return (
    <div className='py-16 bg-green_p-dark dark:bg-graphite-deep text-black dark:text-white'>
      <div className='container'>
        <div className='mb-10 space-y-5'>
          <h1 className='text-center text-4xl font-bold aos-init aos-animate'>
            Nuestro menú
          </h1>
          <div className='my-6 px-8 md:px-16 lg:px-32'>
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className='w-full'
              autoplay={{ delay: 5000, stopOnInteraction: false }}
            >
              <CarouselContent>
                {Productos?.map((producto, index) => (
                  <CarouselItem
                    key={index}
                    className='md:basis-1/3 lg:basis-1/4'
                  >
                    <MenuCard producto={producto} />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};
