import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export type CourseStateType = {
    [x: string]: any
    name: string;
    department: string;

}

const initialState: CourseStateType[] = [];

const coursesSlice = createSlice({
	name: 'lecturer',
	initialState,
	reducers: {
		loadCourses: (state, action: PayloadAction<CourseStateType[]>) => {
			state = action.payload;
		}
	}
});

export const { loadCourses } = coursesSlice.actions;

export default coursesSlice.reducer;