import React, { Suspense, useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ROUTER_CONFIG } from '../lib/routerConfig/routerConfig';

import { PageLoader } from '@/widgets/PageLoader';
import { AppRoutesProps } from '@/shared/types/router';
import { RequireAuth } from './RequireAuth';

export const AppRouter = () => {
    const renderWithWrapper = useCallback((route: AppRoutesProps) => {
        const element = (
            // eslint-disable-next-line react/jsx-no-useless-fragment
            <>{route.element}</>
        );

        return (
            <Route
                key={route.path}
                path={route.path}
                element={route.authOnly ? <RequireAuth>{element}</RequireAuth> : element}
            />
        );
    }, []);

    return (
        <Suspense fallback={<PageLoader />}>
            <Routes>
                {Object.values(ROUTER_CONFIG).map(renderWithWrapper)}
            </Routes>
        </Suspense>
    );
};
