import Link from "next/link";

export const Hero = () => {
  return (
    <header
      className={`bg-green h-screen `}
      style={{
        backgroundImage: "url(/media/img1_homepage.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className='mx-auto w-full max-w-7xl px-5 py-24 md:px-10 md:py-24'>
        <div className='flex flex-col items-center justify-center text-center'>
          <h1 className='font-quicksand my-28 text-5xl font-extrabold text-white md:text-5xl leading-relaxed'>
            ENGRÍETE <span className='text-green_p-deep'>SALUDABLE</span>
          </h1>

          <p className='font-quicksand mb-10 max-w-lg text-2xl text-white sm:text-3xl md:mb-10 lg:mb-12'>
            Disfruta la aventura de comer delicioso y saludable
          </p>

          <Link
            href='/productos'
            className='m-10 mb-6 mr-6 w-56 rounded-xl bg-gray-800 px-6 py-4 text-center font-semibold text-white text-xl md:mb-10 lg:mb-12 lg:mr-4 hover:bg-gray-600'
          >
            ¡Quiero pedir!
          </Link>
        </div>
      </div>
    </header>
  );
};
