import { configureStore } from '@reduxjs/toolkit';
import { userApi } from '@/entities/User';
// import { searchApi } from '@/features/TeacherSearch';

export const store = configureStore({
    reducer: {
        [userApi.reducerPath]: userApi.reducer,
        // [searchApi.reducerPath]: searchApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(userApi.middleware),
});

export type AppDispatch = ReturnType<typeof configureStore>['dispatch'];
