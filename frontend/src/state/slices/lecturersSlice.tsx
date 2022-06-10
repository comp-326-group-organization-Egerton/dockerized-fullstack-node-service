import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export type LecturerStateType = {
	id: number;
	name: string;
	email: string;
	phone: string;
	address: string;
};

const initialState: LecturerStateType[] = [];

const lecturerSlice = createSlice({
	name: 'lecturers',
	initialState,
	reducers: {
		loadLecturers: (state, action: PayloadAction<LecturerStateType[]>) => {
			console.log('Loaded ', action.payload);

			state = [...action.payload];
		},
	},
});

export const { loadLecturers } = lecturerSlice.actions;

export default lecturerSlice.reducer;
