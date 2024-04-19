import { dataFetchReducer, initialState } from '@/Reducer/dataFetchReducer';
import { FetchParams } from '@/Types/type';
import axios from 'axios';
import { useReducer, useEffect } from 'react';

type useFetch = {};

export const useFetch = ({ url }: FetchParams) => {
   const [state, dispatch] = useReducer(dataFetchReducer, initialState);

   useEffect(() => {
      const fetchData = async () => {
         dispatch({ type: 'FETCH_LOADING', error: undefined });
         try {
            const result = await axios.get(url);

            dispatch({ type: 'FETCH_SUCCESS', data: result.data });
         } catch (error) {
            if (axios.isAxiosError(error)) {
               dispatch({ type: 'FETCH_ERROR', error });
            } else {
               console.error('Unexpected error:', error);
            }
         }
      };
      fetchData();
   }, [url]);
   return { state };
};
