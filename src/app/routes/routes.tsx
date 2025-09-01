import { lazy } from 'react';
import type { RouteObject } from 'react-router-dom';

const MainPage = lazy(() => import('@pages/MainPage').then((m) => ({ default: m.MainPage })));

export const routes: RouteObject[] = [
    { path: '/', element: <MainPage /> },
    { path: '*', element: <MainPage /> },
];
