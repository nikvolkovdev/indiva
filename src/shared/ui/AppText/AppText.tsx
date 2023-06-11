import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './AppText.module.scss';

export enum AppTextVariant {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
    SECONDARY_ITALIC = 'secondary_italic',
    INACTIVE = 'inactive',
    ERROR = 'error',
}

export enum TextAlign {
    RIGHT = 'right',
    LEFT = 'left',
    CENTER = 'center',
}

export enum TextSize {
    XS = 'xs',
    S = 's',
    M = 'm',
    L_MOB = 'l-mob',
    L = 'l',
    XL = 'xl',
    XXL = 'xxl',
}

type HeaderTagType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

interface AppTextProps {
    className?: string;
    title?: string;
    description?: string;
    short?: string;
    variant?: AppTextVariant;
    align?: TextAlign;
    size?: TextSize;
    headerTag?: HeaderTagType;
    bold?: boolean;
}

export const AppText = memo((props: AppTextProps) => {
    const {
        className,
        title,
        description,
        short,
        variant = AppTextVariant.PRIMARY,
        align = TextAlign.LEFT,
        size = TextSize.M,
        headerTag = 'h2',
        bold = false,
    } = props;

    const HeaderTag = headerTag;

    return (
        <div className={classNames('', { [cls.bold]: bold }, [className, cls[variant], cls[align], cls[size]])}>
            {title && <HeaderTag>{title}</HeaderTag>}
            {description && <p>{description}</p>}
            {short && <span>{short}</span>}
        </div>
    );
});
