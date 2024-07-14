import Image from "next/image";

export const Banner = () => {
  return (
    <section>
      {" "}
      {/* Container */}{" "}
      <div className='bg-gray-100 mx-auto w-full max-w-7xl px-5 py-12 md:px-10 md:py-16 lg:py-20'>
        {" "}
        {/* Component */}{" "}
        <div className='grid gap-12 sm:gap-20 lg:grid-cols-2'>
          {/* Image */}
          <div className='max-h-[530px] max-w-[570px] overflow-hidden rounded-md'>
            <Image
              src='/media/img2_homepage.jpg'
              width={570}
              height={530}
              alt='Imagen delifit 2'
            />
          </div>{" "}
          <div className='flex-col items-start gap-2'>
            <h1 className='mb-6 text-4xl font-bold text-center text-green_p-deep md:text-6xl lg:mb-8'>
              Delifit
            </h1>
            <p className='text-sm text-gray-500 sm:text-base lg:text-xl text-left'>
              En DELIFIT, por casi cinco años, hemos sido el sabor saludable de
              Tacna, ofreciendo opciones frescas y nutritivas. Desde desayunos
              energizantes hasta postres tentadores, cada plato resalta por sus
              ingredientes naturales y calidad insuperable. Como un referente
              culinario en la región, nos enorgullece haber nutrido y deleitado
              a los tacneños y visitantes con nuestra dedicación a la frescura y
              excelencia culinaria. Celebramos el equilibrio entre el buen comer
              y la salud, agradeciendo a todos quienes nos han acompañado en
              este viaje hacia una vida más saludable y deliciosa en Tacna.
            </p>{" "}
            <div className='mb-8 mt-8 h-px w-full bg-black'></div>
          </div>{" "}
        </div>
      </div>
    </section>
  );
};
