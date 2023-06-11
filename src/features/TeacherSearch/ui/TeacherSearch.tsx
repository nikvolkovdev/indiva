import { memo, useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './TeacherSearch.module.scss';
import { HStack, VStack } from '@/shared/ui/Stack';
import { AppInput } from '@/shared/ui/AppInput';
import FilterIcon from '@/shared/assets/icons/light-theme/icon-filter.svg';
import { AppIcon } from '@/shared/ui/AppIcon';
import { AppText } from '@/shared/ui/AppText';

interface TeacherSearchProps {
    className?: string;
}

export const TeacherSearch = memo((props: TeacherSearchProps) => {
    const { className } = props;
    const [query, setQuery] = useState<string>('');

    return (
        <VStack className={cls.TeacherSearch}>
            <HStack
                gap="50"
                className={classNames(cls.inputGroup, {}, [className])}
            >
                <HStack gap="20">
                    <AppInput
                        placeholder="Направление или преподаватель"
                        className={cls.searchInput}
                    />
                    <AppIcon Svg={FilterIcon} />
                </HStack>
                <HStack gap="4">
                    <AppText short="Найдено:" />
                    <AppText short="216" />
                </HStack>
            </HStack>
            <VStack>
                <div>...</div>
            </VStack>
        </VStack>
    );
});
