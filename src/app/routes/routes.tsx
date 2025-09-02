import { lazy } from 'react';
import type { RouteObject } from 'react-router-dom';

const MainPage = lazy(() => import('@pages/index').then((m) => ({ default: m.MainPage })));
const PrivacyPolicyPage = lazy(() =>
    import('@pages/index').then((m) => ({ default: m.PrivacyPolicyPage })),
);
const NotFoundPage = lazy(() => import('@pages/index').then((m) => ({ default: m.NotFoundPage })));

export const routes: RouteObject[] = [
    { path: '/', element: <MainPage /> },
    { path: '/privacyPolicy', element: <PrivacyPolicyPage /> },
    { path: '*', element: <NotFoundPage /> },
];
