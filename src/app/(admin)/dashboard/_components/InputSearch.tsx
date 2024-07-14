import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

export function InputSearch() {
  return (
    <div className='group relative ml-auto flex-1 md:grow-0 hidden sm:block'>
      <Search className='absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground group-hover:stroke-primary' />
      <Input
        type='search'
        placeholder='Buscar...'
        className='border-background w-full rounded-lg bg-background pl-8 md:w-48 lg:w-80 group-hover:border-primary'
      />
    </div>
  );
}
