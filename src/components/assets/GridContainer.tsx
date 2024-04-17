import { Button } from '../ui/button';

type GridContainer = {};

export const GridContainer: React.FC<GridContainer> = () => {
   return (
      <section className="relative bg-slate-300 mx-1">
         <article className="w-5/6 bg-slate-100 mx-auto p-2 grid grid-cols-3"></article>
      </section>
   );
};
