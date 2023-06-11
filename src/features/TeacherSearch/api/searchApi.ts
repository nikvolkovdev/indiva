import { rtkApi } from '@/shared/api/rtkApi';
import { TeacherProfile } from '@/entities/TeacherProfile';

export const searchApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getTeachers: build.query<TeacherProfile[], string>({
            query: () => ({
                url: `/teacherProfiles`,
                method: 'GET',
            }),
        }),
    }),
});

export const useGetTeachersQuery = searchApi.endpoints.getTeachers.initiate;
