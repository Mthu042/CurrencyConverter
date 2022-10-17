import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { currenciesApi } from '~/services/currencies';

const store = configureStore({
    reducer: {
        [currenciesApi.reducerPath]: currenciesApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(currenciesApi.middleware),
});

setupListeners(store.dispatch);

export default store;
