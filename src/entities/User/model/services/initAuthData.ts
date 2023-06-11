import { createAsyncThunk } from '@reduxjs/toolkit';
import { getUserDataByIdQuery } from '../../api/userApi';
import { User } from '../types/user';
import { USER_LOCALSTORAGE_KEY } from '@/shared/types/localstorage';

export const initAuthData = createAsyncThunk<User, void>('user/initAuthData', async (newJsonSettings, thunkAPI) => {
    const { rejectWithValue, dispatch } = thunkAPI;

    const userId = localStorage.getItem(USER_LOCALSTORAGE_KEY);

    if (!userId) {
        return rejectWithValue('');
    }

    try {
        return await dispatch(getUserDataByIdQuery(userId)).unwrap();
    } catch (e) {
        return rejectWithValue('');
    }
});
