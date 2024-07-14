export default function Page() {
  return (
    <section>
      {" "}
      {/* Container */}{" "}
      <div className='mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20 '>
        {" "}
        {/* Component */}{" "}
        <div className='mx-auto flex max-w-xl flex-col items-center justify-center px-6 text-center lg:max-w-3xl lg:px-10 '>
          <h2 className='text-center font-bold text-black text-3xl lg:text-5xl dark:text-gray-50'>
            Preguntas Frecuentes
          </h2>
          <p className='font-inter mt-4 max-w-xl px-5 text-center text-base font-light text-gray-500 lg:max-w-lg'>
            Descubre más sobre nuestros productos saludables.{" "}
          </p>
        </div>{" "}
        {/* FAQs */}{" "}
        <div className='mt-10 flex flex-col justify-between lg:flex-row lg:flex-wrap'>
          {" "}
          {/* FAQ CONTAINER LEFT */}{" "}
          <div className='mx-4 flex max-w-3xl flex-col lg:shrink lg:grow lg:basis-96'>
            {" "}
            {/* FAQ BLOCK */}{" "}
            <div className='relative my-3 w-full rounded-md border border-gray-300 px-12 py-8'>
              <h2 className='font-bold text-black text-xl dark:text-gray-50'>
                {" "}
                ¿Qué tipo de productos ofrece Delifit Tacna?{" "}
              </h2>
              <p className='font-inter mt-4 text-base font-light text-gray-500'>
                {" "}
                Ofrecemos una variedad de comidas saludables como tortas,
                queques, pancakes, waffles, parfaits, antojitos, smoothies,
                bowls calientes, bebidas calientes e infusiones.{" "}
              </p>
            </div>{" "}
            {/* FAQ BLOCK */}{" "}
            <div className='relative my-3 w-full rounded-md border border-gray-300 px-12 py-8'>
              <h2 className='font-bold text-black text-xl dark:text-gray-50'>
                {" "}
                ¿Qué son las &quot;Deli Box&quot;?{" "}
              </h2>
              <p className='font-inter mt-4 text-base font-light text-gray-500'>
                {" "}
                Las &quot;Deli Box&quot;son presentaciones personalizadas
                diseñadas para satisfacer las necesidades específicas de
                nuestros clientes, ideales para eventos especiales o para
                disfrutar en casa.{" "}
              </p>
            </div>{" "}
            {/* FAQ BLOCK */}{" "}
            <div className='relative my-3 w-full rounded-md border border-gray-300 px-12 py-8'>
              <h2 className='font-bold text-black text-xl dark:text-gray-50'>
                {" "}
                ¿Dónde se encuentran ubicados?{" "}
              </h2>
              <p className='font-inter mt-4 text-base font-light text-gray-500'>
                {" "}
                Estamos ubicados en Tacna, Perú. Específicamente en la
                intersección de calle deustua con Calle Zela - Bulevar Plaza.{" "}
              </p>
            </div>
          </div>{" "}
          {/* FAQ CONTAINER RIGHT */}{" "}
          <div className='mx-4 flex max-w-3xl flex-col lg:shrink lg:grow lg:basis-96'>
            {" "}
            {/* FAQ BLOCK */}{" "}
            <div className='relative my-3 w-full rounded-md border border-gray-300 px-12 py-8'>
              <h2 className='font-bold text-black text-xl dark:text-gray-50'>
                {" "}
                ¿Realizan entregas a domicilio?{" "}
              </h2>
              <p className='font-inter mt-4 text-base font-light text-gray-500'>
                {" "}
                Sí, contamos con zonas de reparto específicas. Consulta nuestra
                sección de &quot;Zonas de Reparto&quot; para más información.{" "}
              </p>
            </div>{" "}
            {/* FAQ BLOCK */}{" "}
            <div className='relative my-3 w-full rounded-md border border-gray-300 px-12 py-8'>
              <h2 className='font-bold text-black text-xl dark:text-gray-50'>
                {" "}
                ¿Cómo puedo contactarlos?{" "}
              </h2>
              <p className='font-inter mt-4 text-base font-light text-gray-500'>
                {" "}
                Puedes contactarnos a través de nuestra sección de
                &quot;Atención al Cliente&quot; en el final de nuestra página
                web o redes sociales.{" "}
              </p>
            </div>{" "}
            {/* FAQ BLOCK */}{" "}
            <div className='relative my-3 w-full rounded-md border border-gray-300 px-12 py-8'>
              <h2 className='font-bold text-black text-xl dark:text-gray-50'>
                {" "}
                ¿Ofrecen productos para personas con restricciones alimentarias?{" "}
              </h2>
              <p className='font-inter mt-4 text-base font-light text-gray-500'>
                {" "}
                Sí, tenemos opciones saludables adecuadas para diversas
                necesidades dietéticas. Consulta nuestro catálogo para más
                detalles.{" "}
              </p>
            </div>
          </div>
        </div>
        <p className='font-inter mx-auto mt-12 text-center text-base text-gray-500'>
          {" "}
          ¿No pudiste resolver tus dudas?{" "}
          <a
            href='https://wa.me/51917774573'
            className='text-black font-bold dark:text-gray-50'
          >
            <span> </span> contactános.
          </a>
        </p>
      </div>
    </section>
  );
}
