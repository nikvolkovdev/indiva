import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './AppDot.module.scss';

interface AppDotProps {
    className?: string;
}

export const AppDot = memo((props: AppDotProps) => {
    const { className } = props;

    return <div className={classNames(cls.AppDot, {}, [className])} />;
});
