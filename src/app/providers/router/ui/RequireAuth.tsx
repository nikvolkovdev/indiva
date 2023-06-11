import { Navigate } from 'react-router-dom';
import { getRouteAbout } from '@/shared/const/router';

interface RequireAuthProps {
    children: JSX.Element;
}

export function RequireAuth({ children }: RequireAuthProps) {
    const auth = true;

    if (!auth) {
        return (
            <Navigate
                to={getRouteAbout()}
                replace
            />
        );
    }

    return children;
}
