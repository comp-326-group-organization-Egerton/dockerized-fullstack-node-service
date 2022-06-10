import React from 'react';
import Table from 'components/Table';
import { Container, Typography } from '@mui/material';

// eslint-disable-next-line @typescript-eslint/naming-convention
const AdminLecturers = () => {
	return (
		<Container>
			<Typography variant='h2' p={2}>Lecturers data </Typography>
			<Table title='List of lecturers data table'/>
		</Container>
	);
};

export default AdminLecturers;