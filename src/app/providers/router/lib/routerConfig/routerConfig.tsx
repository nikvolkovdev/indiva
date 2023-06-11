import {
    AppRoutes,
    getRouteAbout,
    getRouteForbidden, getRouteSearch,
} from '@/shared/const/router';
import { AppRoutesProps } from '@/shared/types/router';
import {NotFoundPage} from "@/pages/NotFoundPage";
import {ForbiddenPage} from "@/pages/ForbiddenPage";
import {MainPage} from "@/pages/MainPage";
import {SearchPage} from "@/pages/SearchPage";


export const ROUTER_CONFIG: Record<AppRoutes, AppRoutesProps> = {
    [AppRoutes.ABOUT]: {
        path: getRouteAbout(),
        element: <MainPage />,
    },
    [AppRoutes.SEARCH]: {
        path: getRouteSearch(),
        element: <SearchPage />,
    },
    // [AppRoutes.PROFILE]: {
    //     path: getRouteProfile(':id'),
    //     element: <ProfilePage />,
    //     authOnly: true,
    // },
    // [AppRoutes.NOTIFICATIONS]: {
    //     path: getRouteNotifications(':id'),
    //     element: <NotificationsPage />,
    //     authOnly: true,
    // },
    // [AppRoutes.SUBS_NEWS]: {
    //     path: getRouteSubsNews(':id'),
    //     element: <SubsNews />,
    //     authOnly: true,
    // },
    // [AppRoutes.CALENDAR]: {
    //     path: getRouteCalendar(),
    //     element: <CalendarPage />,
    //     authOnly: true,
    // },
    // [AppRoutes.ARCHIVE]: {
    //     path: getRouteArchive(':id'),
    //     element: <ArchivePage />,
    //     authOnly: true,
    // },
    // [AppRoutes.ADMIN_PANEL]: {
    //     path: getRouteAdmin(),
    //     element: <AdminPanelPage />,
    //     authOnly: true,
    // },
    [AppRoutes.FORBIDDEN]: {
        path: getRouteForbidden(),
        element: <ForbiddenPage />,
    },
    [AppRoutes.NOT_FOUND]: {
        path: '*',
        element: <NotFoundPage />,
    },
};
