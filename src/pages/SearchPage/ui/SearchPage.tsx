import { useEffect } from 'react';
import { Card } from '@/shared/ui/Card';
import cls from './SearchPage.module.scss';
import { HStack, VStack } from '@/shared/ui/Stack';
import { TeacherSearch } from '@/features/TeacherSearch';

const SearchPage = () => {
    useEffect(() => {}, []);

    return (
        <HStack
            gap="40"
            justify="center"
            align="start"
        >
            <Card className={cls.searchCard}>
                <TeacherSearch />
            </Card>
            <VStack>
                <div>blablablock</div>
            </VStack>
        </HStack>
    );
};

export default SearchPage;
