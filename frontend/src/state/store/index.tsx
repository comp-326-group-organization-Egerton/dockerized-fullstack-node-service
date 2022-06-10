import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import courseReducer from 'state/slices/courseSlice';
import lecturerReducer from 'state/slices/lecturersSlice';
import storage from 'redux-persist/lib/storage';
import unitsReducer from 'state/slices/unitsSlice';
import userReducer from 'state/slices/userSlice';
import {
	FLUSH,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
	REHYDRATE,
	persistReducer,
	persistStore,
} from 'redux-persist';

const persistConfig = {
	key: 'sample-redux',
	version: 1,
	storage,
};

const rootReducer = persistReducer(
	persistConfig,
	combineReducers({ user: userReducer })
);

const store = configureStore({
	reducer: {
		root: rootReducer,
		courses: courseReducer,
		lecturers: lecturerReducer,
		units: unitsReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [
					FLUSH,
					REHYDRATE,
					PAUSE,
					PERSIST,
					PURGE,
					REGISTER,
				],
			},
		}),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
