import Image from "next/image";
interface MenuCardProps {
  menu: {
    image: string;
    name: string;
    description: string;
    price: number;
  };
}

export const MenuCard = ({ menu }: MenuCardProps) => {
  return (
    <div className='flex flex-col gap-4 py-8 px-6 mx-4 rounded-xl'>
      <div className='mb-3 flex justify-center'>
        <img
          src={menu.image}
          alt='menu'
          className='rounded-full w-auto sm:max-w-[200px] md:max-w-[250px] shadow-1'
        />
      </div>
      <div className='flex flex-col items-center gap-4'>
        <div className='space-y-3 text-center'>
          <h1 className='text-xl'>{menu.name}</h1>
          <p className='text-3xl font-semibold'>
            <span className='text-2xl font-cursive'>Only</span> $ {menu.price}
          </p>
          <a
            href='#'
            className='underline hover:text-lime-700 dark:hover:text-green_p-dark'
          >
            Comprar ahora
          </a>
        </div>
      </div>
    </div>
  );
};
