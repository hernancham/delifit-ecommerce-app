import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <header className='bg-lime-50'>
      {" "}
      {/* Hero Container */}{" "}
      <div className='mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20'>
        {" "}
        {/* Component */}{" "}
        <div className='grid items-center justify-items-start gap-8 sm:gap-20 lg:grid-cols-2'>
          {" "}
          {/* Hero Content */}{" "}
          <div className='flex flex-col'>
            {" "}
            {/* Hero Title */}{" "}
            <h1 className='mb-4 text-4xl font-bold md:text-6xl'>
              {" "}
              The Website You Want Without The Dev Time.{" "}
            </h1>
            <p className='mb-6 max-w-lg text-sm text-gray-500 sm:text-xl md:mb-10 lg:mb-12'>
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis, lectus{" "}
            </p>{" "}
            {/* Hero Button */}{" "}
            <a
              href='#'
              className='mb-6 mr-6 w-36 rounded-md bg-black px-6 py-3 text-center font-semibold text-white md:mb-10 lg:mb-12 lg:mr-8'
            >
              {" "}
              Get Started{" "}
            </a>{" "}
            {/* Hero Comment */}{" "}
            <div className='max-w-xs'>
              <p className='mb-4 text-sm text-gray-500'>
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                aliquam, purus{" "}
              </p>
              <div className='flex items-center gap-11 sm:flex-row'>
                <div className='flex items-center'>
                  <img
                    src='https://firebasestorage.googleapis.com/v0/b/flowspark-1f3e0.appspot.com/o/Tailspark%20Images%2FPlaceholder%20Image.svg?alt=media&token=375a1ea3-a8b6-4d63-b975-aac8d0174074'
                    alt=''
                    className='mr-2 inline-block rounded-full object-cover h-7 w-7 sm:h-7'
                  />
                  <p className='text-sm font-bold'>Aleeyah</p>
                </div>
                <div className='flex items-center'>
                  <p className='mr-2 text-sm font-bold'>5.0</p>
                  <img
                    src='https://assets.website-files.com/6357722e2a5f19121d37f84d/6357722e2a5f195bcf37f880_Vector.svg'
                    alt=''
                    className='mr-1.5 inline-block w-4'
                  />
                  <img
                    src='https://assets.website-files.com/6357722e2a5f19121d37f84d/6357722e2a5f195bcf37f880_Vector.svg'
                    alt=''
                    className='mr-1.5 inline-block w-4'
                  />
                  <img
                    src='https://assets.website-files.com/6357722e2a5f19121d37f84d/6357722e2a5f195bcf37f880_Vector.svg'
                    alt=''
                    className='mr-1.5 inline-block w-4'
                  />
                  <img
                    src='https://assets.website-files.com/6357722e2a5f19121d37f84d/6357722e2a5f195bcf37f880_Vector.svg'
                    alt=''
                    className='mr-1.5 inline-block w-4'
                  />
                  <img
                    src='https://assets.website-files.com/6357722e2a5f19121d37f84d/6357722e2a5f195bcf37f880_Vector.svg'
                    alt=''
                    className='mr-1.5 inline-block w-4'
                  />
                </div>
              </div>
            </div>
          </div>{" "}
          {/* Hero Image */}
          <img
            src='https://firebasestorage.googleapis.com/v0/b/flowspark-1f3e0.appspot.com/o/Tailspark%20Images%2FPlaceholder%20Image.svg?alt=media&token=375a1ea3-a8b6-4d63-b975-aac8d0174074'
            alt=''
            className='inline-block h-full w-full max-w-2xl'
          />
        </div>
      </div>
    </header>
  );
};
