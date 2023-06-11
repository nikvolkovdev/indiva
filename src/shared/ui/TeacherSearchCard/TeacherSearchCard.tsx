import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './TeacherSearchCard.module.scss';
import { HStack, VStack } from '../Stack';
import { AppImage } from '../AppImage';
import { AppText } from '../AppText';
import { AppDot } from '../AppDot/AppDot';

interface TeacherSearchCardProps {
    className?: string;
    src?: string;
    firstName?: string;
    lastName?: string;
    firstStyle?: string;
    secondStyle?: string;
    city?: string;
}

export const TeacherSearchCard = memo((props: TeacherSearchCardProps) => {
    const { className, src, firstName, lastName, firstStyle, secondStyle, city } = props;

    return (
        <HStack className={classNames(cls.TeacherSearchCard, {}, [className])}>
            <AppImage src={src} />
            <VStack>
                <HStack>
                    <AppText short={firstName} />
                    <AppText short={lastName} />
                </HStack>
                <HStack>
                    <AppDot />
                    <AppText short={firstStyle} />
                </HStack>
                {secondStyle && (
                    <HStack>
                        <AppDot />
                        <AppText short={secondStyle} />
                    </HStack>
                )}
            </VStack>
            <AppText short={`г.${city}`} />
        </HStack>
    );
});
