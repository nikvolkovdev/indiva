import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { VStack } from '@/shared/ui/Stack';
import { getSidebarItems } from '../model/selectors/getSidebarItems';
import { SidebarItem } from './SidebarItem/SidebarItem';
import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

export const Sidebar = memo((props: SidebarProps) => {
    const { className } = props;

    const sidebarItemsList = getSidebarItems(true);

    return (
        <nav
            className={classNames(cls.Sidebar, {}, [className])}
        >
            <VStack
                role="navigation"
                gap="20"
                className={cls.items}
                max
            >
                {sidebarItemsList.map((item) => (
                    <SidebarItem
                        item={item}
                        key={item.path}
                    />
                ))}
            </VStack>
        </nav>
    );
});
