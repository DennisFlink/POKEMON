import { ReactNode } from 'react';

export type FetchParams = {
   url: string;
   method?: Methods;
   body?: undefined;
   config?: undefined;
};
export type PokemonListItem = {
   name: string;
   url: string;
};

export type Pokemon = {
   results?: PokemonListItem[];
};
type Methods = 'POST' | 'GET' | 'DELETE';

export type childrenProp = {
   children: ReactNode;
};
