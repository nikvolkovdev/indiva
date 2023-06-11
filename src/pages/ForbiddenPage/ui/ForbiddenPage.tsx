import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';

interface ForbiddenPageProps {
    className?: string;
}

export const ForbiddenPage = memo((props: ForbiddenPageProps) => {
    const { className } = props;

    return (
        <div
            className={classNames('', {}, [className])}
        >
            У вас нет доступа к этой странице
        </div>
    );
});
