export type FetchParams = {
   url: string;
   method?: Methods;
   body?: undefined;
   config?: undefined;
};

type Methods = 'POST' | 'GET' | 'DELETE';
