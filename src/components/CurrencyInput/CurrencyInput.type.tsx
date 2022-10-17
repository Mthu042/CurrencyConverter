export type CurrencyInputTypes = {
    amount: number;
    currency: string;
    currencies: string[];
    onAmountChange: (amount: number) => void;
    onCurrencyChange: (currency: string) => void;
    baseInput?: boolean;
};
