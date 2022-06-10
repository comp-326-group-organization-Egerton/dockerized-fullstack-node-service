import {
	Avatar,
	Box,
	Button,
	Container,
	Grid,
	Stack,
	TextField,
	Typography,
} from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
	return (
		<Container>
			<Box
				sx={{
					display: 'flex',
					justifyContent: 'center',
					minHeight: 'calc(100vh - 2rem)',
					alignItems: 'center',
				}}
			>
				<form style={{ maxWidth: '25rem' }}>
					<Stack justifyContent={'center'} alignItems="center">
						<Avatar
							alt={'account'}
							src="/grad.png"
							sx={{ width: 60, height: 60 }}
						/>
						<Typography marginTop={2} mb={2} variant={'h4'}>
							Login
						</Typography>
					</Stack>
					<Grid container gap={2}>
						<Grid item sx={{ width: '100%' }}>
							<TextField
								id="standard-basic"
								label="Email address"
								variant="standard"
								placeholder="example@gmail.com"
								fullWidth
							/>
						</Grid>
						<Grid item sx={{ width: '100%' }}>
							<TextField
								id="standard-basic"
								label="Password"
								variant="standard"
								placeholder="example@gmail.com"
								fullWidth
							/>
						</Grid>
						<Grid item sx={{ width: '100%' }}>
							<Button
								sx={{ flex: 1, width: '100%', padding: '10px 20px' }}
								variant="contained"
								color={'primary'}
								href="#/dashboard/admin"
							>
								Sign in
							</Button>
						</Grid>
						<Grid item>
							<Typography>
								Forgot password? <Link to={'#'}>Reset password</Link>
							</Typography>
						</Grid>
					</Grid>
				</form>
			</Box>
		</Container>
	);
};

export default Login;
