'use client';

import { memo, useState } from 'react';
import { Modal } from '@/shared/ui/Modal';
import { HStack, VStack } from '@/shared/ui/Stack';
import { AppText } from '@/shared/ui/AppText';
import LoginImage from '@/shared/assets/images/login-picture.png';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './LoginModal.module.scss';
import LoginForm from '../LoginForm/LoginForm';
import RegistrationForm from '../RegistrationForm/RegistrationForm';
import { AppImage } from '@/shared/ui/AppImage';

interface LoginModalProps {
    onClose: () => void;
    isOpen: boolean;
    isLogin?: boolean;
}

export const LoginModal = memo((props: LoginModalProps) => {
    const { onClose, isOpen, isLogin } = props;

    const [isLoginForm, setIsLoginForm] = useState(isLogin);

    return (
        <Modal
            onClose={onClose}
            isOpen={isOpen}
        >
            <HStack
                className={classNames(cls.contentModal, {})}
                justify="between"
            >
                <VStack
                    className={cls.formSide}
                    align="center"
                    justify="center"
                >
                    <AppText title="Социальные танцы" />
                    <AppText short="танцевальное сообщество для тренеров и учеников" />
                    {isLoginForm && (
                        <LoginForm
                            onSuccess={() => {}}
                            toRegistration={() => setIsLoginForm(false)}
                        />
                    )}
                    {!isLoginForm && (
                        <RegistrationForm
                            toLogin={() => setIsLoginForm(true)}
                            onSuccess={() => {}}
                        />
                    )}
                </VStack>
                <AppImage
                    src={LoginImage}
                    alt="dance"
                />
            </HStack>
        </Modal>
    );
});
