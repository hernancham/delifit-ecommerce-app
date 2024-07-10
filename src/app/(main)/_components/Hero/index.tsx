import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <header
      className='bg-green h-screen'
      style={{
        backgroundImage:
          "url(https://scontent.ftcq3-1.fna.fbcdn.net/v/t39.30808-6/310978899_770615947704387_2780528558775776338_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHOqUDlGCWbWEpTEmGkJOLTQJnlcEO8YaFAmeVwQ7xhoZ7m69KJepjYR9xX9Cx3UHpRDpXu8wBQ1TlLb3FV7FLT&_nc_ohc=MmjSlHtYl6gQ7kNvgGYQC2C&_nc_ht=scontent.ftcq3-1.fna&oh=00_AYAILxOD_-Cb8PD1Rauie7Ti4EKKwCUyuHXyc2PBDNpBCw&oe=669235B9)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className='mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20'>
        <div className='grid items-center justify-items-center gap-8 sm:gap-20 lg:grid-cols-1'>
          <div className='flex flex-col items-center justify-center text-center'>
            <h1 className='my-20 text-6xl font-bold text-white md:text-6xl'>
              Engríete saludable
            </h1>
            <p className='mb-6 max-w-lg text-xl text-white sm:text-2xl md:mb-10 lg:mb-12'>
              Disfruta la aventura de comer delicioso y saludable
            </p>
            <a
              href='#'
              className='mb-6 mr-6 w-36 rounded-md bg-black px-6 py-3 text-center font-semibold text-white md:mb-10 lg:mb-12 lg:mr-8'
            >
              ¡Quiero pedir!
            </a>
            <div className='max-w-xs'>
              <div className='flex items-center justify-center gap-11 sm:flex-row'></div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
