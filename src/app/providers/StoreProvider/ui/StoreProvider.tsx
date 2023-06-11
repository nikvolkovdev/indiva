import { memo, ReactNode } from 'react';
import { Provider } from 'react-redux';
import { ReducersMapObject } from '@reduxjs/toolkit';
import { StateSchema } from '../config/StateSchema';
import { store } from '../config/store';

interface StoreProviderProps {
    children?: ReactNode;
    initialState?: DeepPartial<StateSchema>;
    asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>;
}

export const StoreProvider = memo((props: StoreProviderProps) => {
    const { children, initialState, asyncReducers } = props;

    return <Provider store={store}>{children}</Provider>;
});
