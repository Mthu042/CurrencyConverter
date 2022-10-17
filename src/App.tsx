import React from 'react';
import Header from '~/components';
import { BrowserRouter } from 'react-router-dom';
import Routes from '~/routes';

const App: React.FC = () => (
    <BrowserRouter>
        <Header />
        <Routes />
    </BrowserRouter>
);
export default App;
