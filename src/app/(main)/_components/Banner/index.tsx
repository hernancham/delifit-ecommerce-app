export const Banner = () => {
  return (
    <section>
      {" "}
      {/* Container */}{" "}
      <div className='mx-auto w-full max-w-7xl px-5 py-12 md:px-10 md:py-16 lg:py-20'>
        {" "}
        {/* Component */}{" "}
        <div className='grid gap-12 sm:gap-20 lg:grid-cols-2'>
          {/* Image */}
          <div className='min-h-[530px] overflow-hidden rounded-md bg-lime-100'>
            <img
              src='https://scontent.ftcq3-1.fna.fbcdn.net/v/t39.30808-6/313126658_788416682590980_2674951599738048754_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEFKa9TXHSl6CPqb2nmu_bGRFoK2kAcJVREWgraQBwlVK5Dr-FgTbbteo8IfbEmlUQT2zI2EArL9wFswAngO1Ac&_nc_ohc=_GjdVINKp5oQ7kNvgHTiO1Z&_nc_ht=scontent.ftcq3-1.fna&oh=00_AYCL6gULAjZ9NcmWIAx8g56zQtx09ti26u8rkvr2hhp3ag&oe=66923DF9'
              alt='Banner Image'
              className='object-cover w-full h-full'
            />
          </div>
          {/* Content */}{" "}
          <div className='flex flex-col items-start gap-2'>
            {/* Title */}{" "}
            <h1 className='mb-6 text-4xl font-bold md:text-6xl lg:mb-8'>
              {" "}
              Delifit{" "}
            </h1>
            <p className='text-sm text-gray-500 sm:text-xl'>
              En DELIFIT, por casi cinco años, hemos sido el sabor saludable de
              Tacna, ofreciendo opciones frescas y nutritivas. Desde desayunos
              energizantes hasta postres tentadores, cada plato resalta por sus
              ingredientes naturales y calidad insuperable. Como un referente
              culinario en la región, nos enorgullece haber nutrido y deleitado
              a los tacneños y visitantes con nuestra dedicación a la frescura y
              excelencia culinaria. Celebramos el equilibrio entre el buen comer
              y la salud, agradeciendo a todos quienes nos han acompañado en
              este viaje hacia una vida más saludable y deliciosa en Tacna.
            </p>
            {/* Divider */}{" "}
            <div className='mb-8 mt-8 h-px w-full bg-black'></div>
            {/* Link */} {/* Buttons */}{" "}
            <div className='flex flex-col gap-4 font-semibold sm:flex-row'>
              <a
                href='#'
                className='flex items-center gap-4 rounded-md bg-black px-6 py-3 text-white'
              >
                <img
                  src='https://assets.website-files.com/6458c625291a94a195e6cf3a/64b147043fe6ab404e65635e_Envelope.svg'
                  alt=''
                  className='inline-block'
                />
                <p>Email Me</p>
              </a>
              <a
                href='#'
                className='flex gap-4 rounded-md border border-solid border-black px-6 py-3'
              >
                <img
                  src='https://assets.website-files.com/6458c625291a94a195e6cf3a/64b14704c8616ad7ba080fe0_Note.svg'
                  alt=''
                  className='inline-block'
                />
                <p>Resume</p>
              </a>
            </div>
          </div>{" "}
        </div>
      </div>
    </section>
  );
};
