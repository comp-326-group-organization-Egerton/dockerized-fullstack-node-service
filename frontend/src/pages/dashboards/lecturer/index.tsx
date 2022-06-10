import React from 'react';
import { Outlet } from 'react-router-dom';
import LecturerSidebar from './components/LecturerSideBar';
import styles from './styles.module.scss';

const LecturerDashboard = () => {
	return (
		<div className={styles.container}>
			<div className={styles.sidebar}>
				<LecturerSidebar />
			</div>
			<div className={styles.mainContent}>
				<Outlet />
			</div>
		</div>
	);
};

export default LecturerDashboard;
