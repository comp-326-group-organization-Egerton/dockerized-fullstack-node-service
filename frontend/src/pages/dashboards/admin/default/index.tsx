/* eslint-disable @typescript-eslint/naming-convention */
import AdminSidebar from '../components/AdminSidebar';
import LineGraphs from 'components/LineGraphs';
import { Outlet } from 'react-router-dom';
import React from 'react';
import { Container, Grid } from '@mui/material';

const AdminDashboard = () => {
	return (
		<Container maxWidth={'xl'} sx={{ padding: 0 }}>
			<Grid container maxWidth={'xl'} spacing={2}>
				<Grid item sx={{ height: '100vh', backgroundColor: '#00000022' }} sm={2}>
					<AdminSidebar />
				</Grid>
				<Grid item sm={10} height={'100vh'} sx={{ overflowY: 'scroll' }}>
					<Outlet />
				</Grid>
			</Grid>
			<Container>
				<LineGraphs/>
			</Container>
		</Container>
	);
};

export default AdminDashboard;
