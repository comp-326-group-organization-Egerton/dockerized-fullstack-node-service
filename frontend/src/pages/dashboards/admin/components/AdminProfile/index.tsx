import React from 'react';
import { Container, Grid, Stack,Typography } from '@mui/material';

// eslint-disable-next-line @typescript-eslint/naming-convention
const AdminProfile = () => {
	return (
		<Container>
			<Grid container>
				<Grid item>
					<Typography>Profile</Typography>
				</Grid>

			</Grid>
			<Stack>
				<Typography>Username</Typography>
				<Typography>Email</Typography>
				<Typography>Password</Typography>

			</Stack>
		</Container>
	);
};

export default AdminProfile;