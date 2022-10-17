import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import LinearProgress from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';

const Convert = lazy(() => import('~/pages/Convert'));
const List = lazy(() => import('~/pages/List'));

export const Gates: React.FC = () => (
    <Suspense fallback={<LinearProgress />}>
        <Routes>
            <Route path="/" element={<Convert />} />
            <Route path="List" element={<List />} />
        </Routes>
    </Suspense>
);
