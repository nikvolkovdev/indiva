import React, { ButtonHTMLAttributes, ForwardedRef, ReactNode } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './AppButton.module.scss';

export enum ButtonVariant {
    CLEAR = 'clear',
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
    ACTION = 'action',
    APPROVE = 'approve',
    APPROVE_ALL = 'approve_all',
    DECLINE = 'decline',
    DECLINE_ALL = 'decline_all',
}

export enum ButtonSize {
    AUTO = 'size_auto',
    PLUS = 'size_plus',
    S = 'size_s',
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    variant?: ButtonVariant;
    size?: ButtonSize;
    children?: ReactNode;
    disabled?: boolean;
    fullWidth?: boolean;
}

export const AppButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
    (props: ButtonProps, ref: ForwardedRef<HTMLButtonElement>) => {
        const {
            className,
            children,
            variant = ButtonVariant.PRIMARY,
            size = ButtonSize.L,
            disabled = false,
            ...otherProps
        } = props;

        return (
            <button
                className={classNames(
                    cls.AppButton,
                    {
                        [cls.disabled]: disabled,
                    },
                    [cls[variant], cls[size], className],
                )}
                {...otherProps}
                disabled={disabled}
                ref={ref}
                type="button"
            >
                {children}
            </button>
        );
    },
);
