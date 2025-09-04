import { lazy } from 'react';
import type { RouteObject } from 'react-router-dom';

const MainPage = lazy(() => import('@pages/MainPage'));
const PrivacyPolicyPage = lazy(() => import('@pages/PrivacyPolicyPage'));
const NotFoundPage = lazy(() => import('@pages/NotFoundPage'));

export const routes: RouteObject[] = [
    { path: '/', element: <MainPage /> },
    { path: '/privacyPolicy', element: <PrivacyPolicyPage /> },
    { path: '*', element: <NotFoundPage /> },
];
