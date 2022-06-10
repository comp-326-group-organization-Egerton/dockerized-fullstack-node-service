import React from 'react';
import { Outlet } from 'react-router-dom';
import StudentSideBar from './components/StudentSideBar';
import styles from './styles.module.scss';

const StudentDashBoard = () => {
	return (
		<div className={styles.container}>
			<div className={styles.sidebar}>
				<StudentSideBar />
			</div>
			<div className={styles.mainContent}>
				<Outlet />
			</div>
		</div>
	);
};

export default StudentDashBoard;
