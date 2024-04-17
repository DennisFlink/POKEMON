import { Button } from '@/components/ui/button';
import { Heart } from 'lucide-react';
type Header = {};
export const Header: React.FC<Header> = () => {
   return (
      <header className="flex h-20 items-center justify-between bg-slate-500">
         <h1 className=" text-2xl p-2 sm:text-6xl">POKEOMON</h1>
         <div className=" flex ">
            <Button variant={'default'}>All Pokemons</Button>
            <Button type="button" className="relative  text-white font-bold py-2 px-6 rounded-full mx-4">
               <Heart />
            </Button>
         </div>
      </header>
   );
};
