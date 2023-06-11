import React from 'react';
import cls from './MainPage.module.scss';
import { AppText, TextSize } from '@/shared/ui/AppText';
import { classNames } from '@/shared/lib/classNames/classNames';
import { HStack, VStack } from '@/shared/ui/Stack';
import { AppDot } from '@/shared/ui/AppDot/AppDot';
import { AppImage } from '@/shared/ui/AppImage';
import MainPageImage from '@/shared/assets/images/photo/first-page-picture.png';

const MainPage = () => (
    <HStack>
        <VStack
            gap="20"
            justify="start"
            align="start"
            className={classNames(cls.content, {})}
            max
        >
            <AppText
                title="Твой танцевальный календарь"
                headerTag="h1"
                size={TextSize.XL}
                bold
            />
            <AppText
                size={TextSize.L}
                description="Данное сообщество создано для людей, влюбленных в танцы и
                    будет полезно и преподавателям, и ученикам."
            />
            <VStack gap="8">
                <AppText
                    short="Ученики смогут:"
                    bold
                    size={TextSize.L}
                />
                <HStack gap="16">
                    <AppDot />
                    <AppText
                        short="Находить своих тренеров по душе"
                        size={TextSize.L}
                    />
                </HStack>
                <HStack gap="16">
                    <AppDot />
                    <AppText
                        short="Удобно записываться на занятия к тренерам"
                        size={TextSize.L}
                    />
                </HStack>
                <HStack gap="16">
                    <AppDot />
                    <AppText
                        short="Вести собственное расписание"
                        size={TextSize.L}
                    />
                </HStack>
            </VStack>
            <VStack gap="8">
                <AppText
                    short="Преподаватели смогут:"
                    bold
                    size={TextSize.L}
                />
                <HStack gap="16">
                    <AppDot />
                    <AppText
                        short="Составлять окна индивидуальных занятий"
                        size={TextSize.L}
                    />
                </HStack>
                <HStack gap="16">
                    <AppDot />
                    <AppText
                        short="Вести собственное расписание"
                        size={TextSize.L}
                    />
                </HStack>
                <HStack gap="16">
                    <AppDot />
                    <AppText
                        short="Записываться на занятия к другим преподавателям"
                        size={TextSize.L}
                    />
                </HStack>
                <HStack gap="16">
                    <AppDot />
                    <AppText
                        short="Выкладывать тематические посты"
                        size={TextSize.L}
                    />
                </HStack>
            </VStack>
        </VStack>
        <AppImage
            className={cls.rightImage}
            src={MainPageImage}
            alt="hmm"
        />
    </HStack>
);

export default MainPage;
