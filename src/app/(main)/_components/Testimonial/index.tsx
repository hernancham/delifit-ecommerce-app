"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { ComentCard } from "./ComentCard";

const Comentarios = [
  {
    name: "John Doe",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "https://randomuser.me/api/portrait",
  },
  {
    name: "Jane Doe",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "https://randomuser.me/api/portrait",
  },
  {
    name: "John Doe",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "https://randomuser.me/api/portrait",
  },
  {
    name: "John Doe",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "https://randomuser.me/api/portrait",
  },
  {
    name: "Jane Doe",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "https://randomuser.me/api/portrait",
  },
  {
    name: "John Doe",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "https://randomuser.me/api/portrait",
  },
];

export const Testimonial = () => {
  return (
    <section className='bg-gray-100 py-20'>
      <div className='container mx-auto'>
        <h2 className='text-4xl font-bold text-center'>Testimonios</h2>

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
              {Comentarios.map((comentario, index) => (
                <CarouselItem
                  key={index}
                  className='md:basis-1/2 lg:basis-1/3'
                >
                  <ComentCard coment={comentario} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
};
