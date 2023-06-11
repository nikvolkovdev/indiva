export enum AppRoutes {
	ABOUT = 'about',
	SEARCH = 'search',
	// PROFILE = 'profile',
	// NOTIFICATIONS = 'notifications',
	// SUBS_NEWS = 'subs-news',
	// CALENDAR = 'calendar',
	// ARCHIVE = 'archive',
	// ADMIN_PANEL = 'admin_panel',
	FORBIDDEN = 'forbidden',
	// last one
	NOT_FOUND = 'notFound',
}

export const getRouteAbout = () => '/';
export const getRouteSearch = () => '/search';
export const getRouteProfile = (id: string) => `/profile/${id}`;
export const getRouteNotifications = (id: string) => `/notifications/${id}`;
export const getRouteSubscriptions = (id: string) => `/articles/${id}`;
export const getRouteCalendar = (id: string) => `/calendar/${id}`;
export const getRouteArchive = (id: string) => `/archive/${id}`;
export const getRouteForbidden = () => '/forbidden';
