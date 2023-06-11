import { UserSchema } from '@/entities/User';
import { rtkApi } from '@/shared/api/rtkApi';

export interface StateSchema {
    user: UserSchema;
    [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>;
}

export type StateSchemaKey = keyof StateSchema;
export type MountedReducers = OptionalRecord<StateSchemaKey, boolean>;
