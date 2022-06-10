/* eslint-disable @typescript-eslint/naming-convention */
import { Container } from '@mui/system';
import React from 'react';
import Table from 'components/Table';
import { Typography } from '@mui/material';

const AdminStudents = () => {
	return (
		<Container>
			<Typography variant='h2' p={2}>Student data </Typography>
			<Table title='List of students table'/>
		</Container>
	);
};

export default AdminStudents;