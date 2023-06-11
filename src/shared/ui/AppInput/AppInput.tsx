import React, { InputHTMLAttributes, memo, useEffect, useRef, useState } from 'react';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import cls from './AppInput.module.scss';

export enum InputVariant {
    TRANSPARENT = 'transparent',
    NORMAL = 'normal',
}

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readOnly'>;

interface AppInputProps extends HTMLInputProps {
    className?: string;
    value?: string | number;
    onChange?: (value: string) => void;
    variant?: InputVariant;
    autofocus?: boolean;
    readOnly?: boolean;
}

// TODO onFocus

export const AppInput = memo((props: AppInputProps) => {
    const {
        className,
        value,
        onChange,
        variant = InputVariant.NORMAL,
        type = 'text',
        placeholder,
        autofocus,
        readOnly,
        ...otherProps
    } = props;

    const ref = useRef<HTMLInputElement | null>(null);
    const [isFocused, setIsFocused] = useState(false);

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };

    useEffect(() => {
        if (autofocus) {
            setIsFocused(true);
            ref.current?.focus();
        }
    }, [autofocus]);

    const mods: Mods = {
        [cls.readOnly]: readOnly,
    };

    return (
        <div className={classNames(cls.AppInputWrapper, mods, [])}>
            <input
                ref={ref}
                type={type}
                value={value}
                placeholder={placeholder}
                onChange={onChangeHandler}
                className={classNames(cls.input, {}, [cls[variant], className])}
                readOnly={readOnly}
                {...otherProps}
            />
        </div>
    );
});
