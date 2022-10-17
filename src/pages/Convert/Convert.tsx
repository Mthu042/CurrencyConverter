import React, { useState, FC } from 'react';
import CurrencyInput from '~/components/CurrencyInput';

import { useGetCurrenciesQuery } from '~/services/currencies';

export const Convert: FC = () => {
    const [amount1, setAmount1] = useState(1);
    const [amount2, setAmount2] = useState(1);
    const [currency1, setCurrency1] = useState('usd');
    const [currency2, setCurrency2] = useState('rub');

    const { data, error, isLoading } = useGetCurrenciesQuery(
        currency1 + '.json'
    );

    function format(number: number, val?: number) {
        let str = number.toString();
        const defaultVal = val ? val : 2;
        str = str.slice(0, str.indexOf('.') + defaultVal + 1);
        return Number(str);
    }

    function handleAmount1Change(amount1: number) {
        setAmount2(
            format(
                (amount1 * data[currency1][currency2]) /
                    data[currency1][currency1]
            )
        );
        setAmount1(amount1);
    }

    function handleCurrency1Change(currency1: string) {
        data[currency1] &&
            setAmount2(
                format(
                    (amount1 * data[currency1][currency2]) /
                        data[currency1][currency1]
                )
            );
        setCurrency1(currency1);
    }

    function handleAmount2Change(amount2: number) {
        setAmount1(
            format(
                (amount2 * data[currency1][currency1]) /
                    data[currency1][currency2]
            )
        );
        setAmount2(amount2);
    }

    function handleCurrency2Change(currency2: string) {
        setAmount2(
            format(
                (amount1 * data[currency1][currency2]) /
                    data[currency1][currency1]
            )
        );
        setCurrency2(currency2);
    }

    if (error) {
        return <div>Oops, an error occured</div>;
    }
    if (isLoading) {
        return <></>;
    }

    return (
        <div className="">
            {data[currency1] && (
                <div className="w-fit m-auto mt-16  space-y-4">
                    <CurrencyInput
                        onAmountChange={handleAmount1Change}
                        onCurrencyChange={handleCurrency1Change}
                        currencies={Object.keys(data[currency1])}
                        amount={amount1}
                        currency={currency1}
                        baseInput
                    />
                    <CurrencyInput
                        onAmountChange={handleAmount2Change}
                        onCurrencyChange={handleCurrency2Change}
                        currencies={Object.keys(data[currency1])}
                        amount={amount2}
                        currency={currency2}
                    />
                </div>
            )}
        </div>
    );
};
