import React from 'react';
import Header from '~/components/Header';
import { BrowserRouter } from 'react-router-dom';

const App: React.FC = () => (
    <BrowserRouter>
        <div className="bg-site h-screen ">
            <Header />
        </div>
    </BrowserRouter>
);
export default App;
