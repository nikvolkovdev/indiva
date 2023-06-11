'use client';

import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppLink, AppLinkVariant } from '@/shared/ui/AppLink';
// import { getUserAuthData } from '@/entities/User';
import cls from './SidebarItem.module.scss';
import { SidebarItemType } from '../../model/types/sidebar';

interface SidebarItemProps {
    item: SidebarItemType;
}

export const SidebarItem = memo((props: SidebarItemProps) => {
    const { item } = props;

    // const isAuth = useSelector(getUserAuthData);

    // if (item.authOnly) {
    //     return null;
    // }

    return (
        <AppLink
            to={item.path}
            className={cls.item}
            variant={AppLinkVariant.INVERTED}
        >
            <item.Icon className={cls.icon} />
            <span className={classNames(cls.link, {})}>{item.text}</span>
        </AppLink>
    );
});
