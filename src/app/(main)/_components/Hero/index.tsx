import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <header
      className={`bg-green h-screen dark:opacity-90`}
      style={{
        backgroundImage: "url(/media/img1_homepage.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className='mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20'>
        <div className='flex flex-col items-center justify-center text-center'>
          <h1 className='my-28 text-6xl font-extrabold text-white md:text-6xl font-georgia'>
            ENGRÍETE SALUDABLE
          </h1>
          <p className='mb-6 max-w-lg text-2xl text-white sm:text-4xl md:mb-10 lg:mb-12 font-roboto'>
            Disfruta la aventura de comer delicioso y saludable
          </p>

          <a
            href='/menu'
            className='m-10 mb-6 mr-6 w-44 rounded-xl bg-green-600 px-6 py-4 text-center font-semibold text-white md:mb-10 lg:mb-12 lg:mr-8 hover:bg-green-700'
          >
            ¡Quiero pedir!
          </a>
        </div>
      </div>
    </header>
  );
};
