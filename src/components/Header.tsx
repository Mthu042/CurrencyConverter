import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Link } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const Header = () => {
    return (
        <ThemeProvider theme={darkTheme}>
            <AppBar
                enableColorOnDark
                color="primary"
                position="static"
                className="z-50"
            >
                <Toolbar className="justify-center">
                    <Link className="mx-10 text-2xl " to="/">
                        <p className="hover:text-sky-400">Convert</p>
                    </Link>
                    <Link className="mx-10 text-2xl" to="/List">
                        <p className="hover:text-sky-400">List</p>
                    </Link>
                </Toolbar>
            </AppBar>
        </ThemeProvider>
    );
};

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#242629',
        },
    },
});

export default Header;
