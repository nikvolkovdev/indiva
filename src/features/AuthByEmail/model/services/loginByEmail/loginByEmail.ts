import { createAsyncThunk } from '@reduxjs/toolkit';
import { User, initAuthData } from '@/entities/User';
import { USER_LOCALSTORAGE_KEY } from '@/shared/types/localstorage';

interface LoginByUsernameProps {
    email: string;
    password: string;
}

export const loginByEmail = createAsyncThunk<User, LoginByUsernameProps>(
    'login/loginByEmail',
    async (authData, thunkAPI) => {
        const { dispatch, extra, rejectWithValue } = thunkAPI;

        try {
            // @ts-ignore
            const response = await extra.api.post<User>('/login', authData);

            if (!response.data) {
                throw new Error();
            }

            localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));

            initAuthData();

            return response.data;
        } catch (e) {
            return rejectWithValue('Вы ввели неверный логин или пароль');
        }
    },
);
