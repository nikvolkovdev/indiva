import { memo, useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppButton, ButtonSize, ButtonVariant } from '@/shared/ui/AppButton';
import cls from './Navbar.module.scss';
import { HStack } from '@/shared/ui/Stack';
import { AppText } from '@/shared/ui/AppText';
import { ThemeSwitcher } from '@/features/ThemeSwitcher';
import { LoginModal } from '@/features/AuthByEmail';
import LogoIcon from '@/shared/assets/icons/golden-ring.svg';
import { AppIcon } from '@/shared/ui/AppIcon';

interface NavbarProps {
    className?: string;
}

export const Navbar = memo((props: NavbarProps) => {
    const { className } = props;

    const [isAuthModal, setIsAuthModal] = useState(false);
    const [isRegModal, setIsRegModal] = useState(false);

    const onCloseModal = () => {
        setIsAuthModal(false);
    };

    const onShowModal = () => {
        setIsAuthModal(true);
    };

    const onCloseRegModal = () => {
        setIsRegModal(false);
    };

    const onShowMRegModal = () => {
        setIsRegModal(true);
    };

    // if (authData) {
    //     return (
    //         <header className={classNames(cls.Navbar, {}, [className])}>
    //
    //         </header>
    //     );
    // }

    return (
        <HStack
            className={classNames(cls.Navbar, {}, [className])}
            justify="center"
            align="center"
        >
            <HStack className={cls.container}>
                <HStack
                    max
                    justify="between"
                    className={cls.logoButtons}
                >
                    <HStack
                        gap="10"
                        className={cls.logo}
                    >
                        <AppIcon Svg={LogoIcon} />
                        <AppText
                            short="indiv"
                            bold
                        />
                    </HStack>
                    <HStack gap="16">
                        <AppButton
                            type="button"
                            variant={ButtonVariant.CLEAR}
                            onClick={onShowMRegModal}
                            size={ButtonSize.AUTO}
                            className={cls.sign_up}
                        >
                            Зарегистрироваться
                        </AppButton>
                        <AppButton
                            type="button"
                            variant={ButtonVariant.CLEAR}
                            onClick={onShowModal}
                            size={ButtonSize.AUTO}
                            className={cls.sign_in}
                        >
                            Войти
                        </AppButton>
                        <ThemeSwitcher />
                    </HStack>
                </HStack>

                {isAuthModal && (
                    <LoginModal
                        onClose={onCloseModal}
                        isOpen={isAuthModal}
                        isLogin={isAuthModal}
                    />
                )}

                {isRegModal && (
                    <LoginModal
                        onClose={onCloseRegModal}
                        isOpen={isRegModal}
                        isLogin={isAuthModal}
                    />
                )}
            </HStack>
        </HStack>
    );
});
