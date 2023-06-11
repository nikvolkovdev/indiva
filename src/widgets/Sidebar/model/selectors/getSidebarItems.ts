import SearchIcon from '@/shared/assets/icons/light-theme/icon-searchteacher-28px.svg';
import AboutIcon from '@/shared/assets/icons/light-theme/icon-about-28px.svg';
import { SidebarItemType } from '../types/sidebar';
import { getRouteAbout, getRouteSearch } from '@/shared/const/router';

export const getSidebarItems = (isAuth: boolean) => {
    const sidebarItemsList: SidebarItemType[] = [
        {
            path: getRouteAbout(),
            text: 'О сервисе',
            Icon: AboutIcon,
        },
        {
            path: getRouteSearch(),
            text: 'Найти преподавателя',
            Icon: SearchIcon,
        },
    ];

    if (isAuth) {
        sidebarItemsList.push();
    }

    return sidebarItemsList;
};
