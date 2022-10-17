import React, { FC } from 'react';
import { CurrencyInputTypes } from './CurrencyInput.type';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

const CurrencyInput: FC<CurrencyInputTypes> = ({
    amount,
    currency,
    currencies,
    onAmountChange,
    onCurrencyChange,
}) => {
    return (
        <div>
            <TextField
                value={amount ? amount : 0}
                helperText="Enter amount"
                id="outlined-basic"
                variant="outlined"
                onChange={(ev) => onAmountChange(parseInt(ev.target.value))}
            />

            <TextField
                id="outlined-select-currency"
                select
                value={currency}
                onChange={(ev) => onCurrencyChange(ev.target.value)}
                helperText="Please select your currency"
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
