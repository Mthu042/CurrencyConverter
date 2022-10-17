import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const currenciesApi = createApi({
    reducerPath: 'currenciesApi',
    baseQuery: fetchBaseQuery({
        baseUrl:
            'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/',
    }),
    endpoints: (builder) => ({
        getCurrencies: builder.query({
            query: (type) => `${type}`,
        }),
    }),
});

export const { useGetCurrenciesQuery } = currenciesApi;
