import { SideNav } from "./_components/SideNav";
import { Header } from "./_components/Header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Header />
      <div className='flex'>
        <SideNav />
        <div className='w-full overflow-x-auto'>
          <div className='sm:h-[calc(99vh-60px)] overflow-auto'>
            <div className='w-full flex justify-center mx-auto overflow-auto h-[calc(100vh - 120px)] overflow-y-auto relative'>
              <div className='w-full max-w-screen-2xl'>{children}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
