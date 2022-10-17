import { createReducer } from '@reduxjs/toolkit';
import { request } from '../actions/requestActions';

const InitialState = {
    rates: {},
};

const requestReducer = createReducer(InitialState, (builder) => {
    builder.addCase(request, (state, action) => {
        state.rates = Object.assign({}, action.payload);
    });
});

export default requestReducer;
