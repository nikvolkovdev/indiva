import { memo, useState } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';

import { AppButton, ButtonSize, ButtonVariant } from '@/shared/ui/AppButton';
import { AppInput } from '@/shared/ui/AppInput';

import cls from './LoginForm.module.scss';
import { HStack, VStack } from '@/shared/ui/Stack';
import { AppText, AppTextVariant, TextSize } from '@/shared/ui/AppText';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDisptach';
// import { loginByEmail } from '../../model/services/loginByEmail/loginByEmail';

export interface LoginFormProps {
    className?: string;
    onSuccess: () => void;
    toRegistration: () => void;
}

const LoginForm = memo((props: LoginFormProps) => {
    const { className, onSuccess, toRegistration } = props;
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const dispatch = useAppDispatch();

    const onChangeEmail = (value: string) => {
        setEmail(value);
    };

    const onChangePassword = (value: string) => {
        setPassword(value);
    };

    // const onLoginClick = () => {
    //
    // };

    // const onEnter = useCallback(
    //     async (e: KeyboardEvent) => {
    //         if (e.key === 'Enter') {
    //             const result = await onLoginClick();
    //         }
    //     },
    //     [onLoginClick],
    // );

    // useEffect(() => {
    //     window.addEventListener('keydown', onEnter);
    //
    //     return () => {
    //         window.removeEventListener('keydown', onEnter);
    //     };
    // }, [onEnter]);

    return (
        <VStack
            gap="20"
            className={classNames(cls.LoginForm, {}, [className])}
        >
            <AppText
                headerTag="h3"
                title="Регистрация"
                size={TextSize.M}
                variant={AppTextVariant.PRIMARY}
            />
            <AppInput
                autofocus
                type="text"
                placeholder="Введите email"
                onChange={onChangeEmail}
                value={email}
            />
            <AppInput
                type="text"
                placeholder="Введите пароль"
                onChange={onChangePassword}
                value={password}
            />
            <AppButton
                variant={ButtonVariant.PRIMARY}
                size={ButtonSize.XL}
            >
                Войти
            </AppButton>
            <HStack gap="20">
                <AppText short="Еще нет аккаунта?" />
                <AppButton
                    size={ButtonSize.M}
                    variant={ButtonVariant.SECONDARY}
                    onClick={toRegistration}
                >
                    Зарегистрироваться
                </AppButton>
            </HStack>
        </VStack>
    );
});

export default LoginForm;
