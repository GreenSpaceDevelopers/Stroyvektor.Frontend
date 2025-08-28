import { Suspense } from 'react';
import { useRoutes } from 'react-router-dom';

import { BaseLoader } from '@shared/ui/BaseLoader/BaseLoader';

import { routes } from './routes';

import '../App.css';

export function AppRouter() {
    const element = useRoutes(routes);

    return (
        <Suspense
            fallback={
                <div className="appLoading">
                    <BaseLoader />
                </div>
            }
        >
            {element}
        </Suspense>
    );
}
