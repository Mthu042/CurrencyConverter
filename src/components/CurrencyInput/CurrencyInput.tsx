import { CurrencyInputTypes } from './CurrencyInput.type';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import React, { FC, useEffect } from 'react';

const CurrencyInput: FC<CurrencyInputTypes> = ({
    amount,
    currency,
    currencies,
    onAmountChange,
    onCurrencyChange,
    baseInput,
}) => {
    useEffect(() => {
        baseInput && onAmountChange(1);
        console.log('ya tut tol`ko raz');
    }, []);

    return (
        <div className="space-x-4">
            <TextField
                inputProps={{ maxLength: 14 }}
                className="bg-white rounded text-white border-red-50"
                sx={{ color: 'white', border: 0 }}
                value={amount ? amount : 0}
                id="outlined-basic"
                variant="outlined"
                onChange={(ev) => onAmountChange(parseInt(ev.target.value))}
            />

            <TextField
                className="bg-bisque rounded w-24"
                id="outlined-select-currency"
                select
                value={currency}
                onChange={(ev) => onCurrencyChange(ev.target.value)}
            >
                {currencies.map((option) => (
                    <MenuItem key={option} value={option}>
                        {option}
                    </MenuItem>
                ))}
            </TextField>
        </div>
    );
};

export default CurrencyInput;
