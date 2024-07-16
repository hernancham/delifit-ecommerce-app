"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { MenuCard } from "./MenuCard";

import axios from "axios";
import { useQuery } from "@tanstack/react-query";

// Types
import { Producto } from "@/types/db";

const getProductos = async () => {
  try {
    const response = await axios.get<Producto[]>("/api/producto");
    return response.data;
  } catch (error) {
    throw new Error("Error al leer los Productos");
  }
};

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
