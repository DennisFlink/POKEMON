import { GridContainer } from '@/components/assets/GridContainer';
import { Header } from '@/components/assets/Header';

type HomeView = {};

export const HomeView: React.FC<HomeView> = () => {
   return (
      <>
         <Header></Header>
         <GridContainer></GridContainer>
      </>
   );
};
