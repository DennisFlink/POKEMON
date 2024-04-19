import { useFetch } from '@/CustomHooks/useFetch';
import { Pokemon, childrenProp } from '@/Types/type';
import { PokemonContext } from './PokemonContext';

export const PokemonProvider = ({ children }: childrenProp) => {
   const { state } = useFetch({ url: 'https://pokeapi.co/api/v2/pokemon?limit=10&offset=0' });
   const data: Pokemon = state.data || [];
   console.log(data.results);
   return <PokemonContext.Provider value={state}>{children}</PokemonContext.Provider>;
};
