import { dataFetchReducer, initialState } from '@/Reducer/dataFetchReducer';
import { FetchParams } from '@/Types/type';
import { useReducer, useEffect } from 'react';

type useFetch = {};

export const useFetch = <T>({ url }: FetchParams) => {
   const [state, dispatch] = useReducer(dataFetchReducer, initialState);
};
