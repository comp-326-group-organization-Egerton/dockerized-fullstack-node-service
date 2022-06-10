/* eslint-disable @typescript-eslint/naming-convention */
import AdminStats from 'pages/dashboards/admin/components/AdminStats';
import AdminStudents from 'pages/dashboards/admin/components/AdminStudents';
import Homepage from 'pages/Homepage';
import LecturerDashboard from 'pages/dashboards/lecturer';
import LecturerProfile from 'pages/dashboards/lecturer/components/LecturerProfile';
import Login from 'pages/login';
import React from 'react';
import StudentDashBoard from 'pages/dashboards/student';
import StudentProfile from 'pages/dashboards/student/components/StudentProfile';
import { Route, HashRouter as Router, Routes } from 'react-router-dom';
// eslint-disable-next-line sort-imports
import {
	AdminCourses,
	AdminDashBoard,
	AdminDepartments,
	AdminFaculties,
	AdminLecturers,
	AdminProfile,
	AdminUnits,
} from 'pages/dashboards/admin';

const App = () => {
	return (
		<Router>
			<Routes>
				<Route path="/">
					<Route index element={<Homepage />} />
					<Route path="login" element={<Login />} />
				</Route>
				<Route path="dashboard">
					<Route path="student" element={<StudentDashBoard />}>
						<Route index element={<StudentProfile />} />
					</Route>
					<Route path="admin" element={<AdminDashBoard />}>
						<Route index element={<AdminStats />} />
						<Route path="students" element={<AdminStudents />} />
						<Route path="courses" element={<AdminCourses />} />
						<Route path="lecturers" element={<AdminLecturers />} />
						<Route path="departments" element={<AdminDepartments />} />
						<Route path="units" element={<AdminUnits />} />
						<Route path="faculties" element={<AdminFaculties />} />
						<Route path="profile" element={<AdminProfile />} />
					</Route>
					<Route path="lecturer" element={<LecturerDashboard />}>
						<Route index element={<LecturerProfile />} />
					</Route>
				</Route>
			</Routes>
		</Router>
	);
};

export default App;
