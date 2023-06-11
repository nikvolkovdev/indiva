import { memo } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';

import { AppButton, ButtonSize, ButtonVariant } from '@/shared/ui/AppButton';
import { AppInput } from '@/shared/ui/AppInput';

import cls from './RegistrationForm.module.scss';
import { HStack, VStack } from '@/shared/ui/Stack';
import { AppText, AppTextVariant, TextSize } from '@/shared/ui/AppText';

export interface LoginFormProps {
    className?: string;
    onSuccess: () => void;
    toLogin: () => void;
}

const RegistrationForm = memo((props: LoginFormProps) => {
    const { className, onSuccess, toLogin } = props;

    // const username = useSelector(getLoginUsername);
    // const password = useSelector(getLoginPassword);
    // const isLoading = useSelector(getLoginIsLoading);
    // const error = useSelector(getLoginError);
    //
    // const dispatch = useAppDispatch();
    //
    // const onChangeUsername = useCallback(
    //     (value: string) => {
    //         dispatch(loginActions.setUsername(value));
    //     },
    //     [dispatch],
    // );
    //
    // const onChangePassword = useCallback(
    //     (value: string) => {
    //         dispatch(loginActions.setPassword(value));
    //     },
    //     [dispatch],
    // );
    //
    // const onLoginClick = useCallback(async () => {
    //     const result = await dispatch(loginByEmail({ username, password }));
    //     if (result.meta.requestStatus === 'fulfilled') {
    //         onSuccess();
    //     }
    // }, [dispatch, onSuccess, password, username]);
    //

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
            className={classNames(cls.RegistrationForm, {}, [className])}
            align="center"
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
                placeholder="Фамилия"
                // onChange={onChangeUsername}
                // value={username}
            />
            <AppInput
                autofocus
                type="text"
                placeholder="Имя"
                // onChange={onChangeUsername}
                // value={username}
            />
            <AppInput
                type="email"
                placeholder="Электронная почта"
            />
            <AppInput
                type="password"
                placeholder="Пароль"
            />
            <AppInput
                type="password"
                placeholder="Пароль повторно"
            />
            <AppButton
                variant={ButtonVariant.PRIMARY}
                size={ButtonSize.XL}
            >
                Зарегистрироваться
            </AppButton>
            <HStack gap="20">
                <AppText short="Уже есть аккаунт?" />
                <AppButton
                    size={ButtonSize.M}
                    variant={ButtonVariant.SECONDARY}
                    onClick={toLogin}
                >
                    Войти
                </AppButton>
            </HStack>
        </VStack>
    );
});

export default RegistrationForm;
