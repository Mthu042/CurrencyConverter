import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Popover from '@mui/material/Popover';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';

import { useGetCurrenciesQuery } from '~/services/currencies';

export const List: React.FC = () => {
    const [currency, setCurrency] = useState('rub');
    const { data, error, isLoading } = useGetCurrenciesQuery(
        currency + '.json'
    );

    const handleChangeCurrency = (newCur: string) => {
        setCurrency(newCur);
    };

    function format(number: number, val?: number) {
        let str = number.toString();
        const defaultVal = val ? val : 2;
        str = str.slice(0, str.indexOf('.') + defaultVal + 1);
        return Number(str);
    }

    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 50 },
        { field: 'Currency', headerName: 'Currency', width: 140 },
        { field: 'Value', headerName: 'Value', width: 140 },
    ];

    let rows = [{ id: 0, Currency: '', Value: 0 }];

    if (!isLoading && data[currency]) {
        rows = Object.keys(data[currency]).map((item: string, index) => {
            return {
                id: index + 1,
                Currency: item.toUpperCase(),
                Value: format(1 / data[currency][item]),
            };
        });
    }

    // const rows = [{ id: 1, Currency: currency, Value: '1.08' }];

    if (error) {
        return <div> an Error occured</div>;
    }
    if (isLoading) {
        return <></>;
    }
    return (
        <div className="w-fit m-auto mt-6  space-y-2 justify-center">
            <div className="flex">
                <TextField
                    className="bg-bisque rounded"
                    id="outlined-select-currency"
                    select
                    value={currency}
                    onChange={(ev) => handleChangeCurrency(ev.target.value)}
                >
                    {data[currency] &&
                        Object.keys(data[currency]).map((option: string) => (
                            <MenuItem key={option} value={option}>
                                {option}
                            </MenuItem>
                        ))}
                </TextField>
                <PopupState variant="popover" popupId="demo-popup-popover">
                    {(popupState) => (
                        <div className="mt-auto ml-auto mr-0">
                            <Button
                                variant="contained"
                                {...bindTrigger(popupState)}
                            >
                                Help
                            </Button>
                            <Popover
                                {...bindPopover(popupState)}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'center',
                                }}
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'center',
                                }}
                            >
                                <Typography sx={{ p: 2 }}>
                                    For searh currency use filter
                                </Typography>
                            </Popover>
                        </div>
                    )}
                </PopupState>
            </div>
            <Box sx={{ height: 400, width: 400 }}>
                <DataGrid
                    className="bg-white"
                    pageSize={15}
                    rowsPerPageOptions={[5]}
                    rows={rows}
                    columns={columns}
                />
            </Box>
        </div>
    );
};
