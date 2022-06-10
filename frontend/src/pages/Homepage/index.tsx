/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/naming-convention */
import { GraphicEq } from '@mui/icons-material';
import React from 'react';
// import { loadLecturers } from 'state/slices/lecturersSlice';
// import { publicAxios } from 'constants/services';
// import { useAppDispatch } from 'state/hooks';
import {
	Box,
	Button,
	Container,
	Grid,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Stack,
	Typography,
} from '@mui/material';

const Homepage = () => {
	// const dispatch = useAppDispatch();
	// const queryLecturers = async () => {
	// 	try {
	// 		const response = await publicAxios('/lecturers/all', {
	// 			method: 'GET',
	// 		});
	// 		console.log(response.data.data);
	// 		dispatch(loadLecturers(response.data.data));
	// 	} catch (err: any) {
	// 		console.log(err);
	// 	}
	// };
	// React.useEffect(() => {
	// 	document.title = 'Homepage';
	// 	queryLecturers();
	// }, []);

	return (
		<Container
			maxWidth={'xl'}
			sx={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
			}}
		>
			{/* Banner section */}
			<Stack
				direction={'column'}
				p={2}
				width={'100%'}
				sx={{
					display: 'flex',
					justifyContent: 'center',
					minHeight: '30rem',
					backgroundImage:
						'repeating-linear-gradient(60deg, #01318a 0%, transparent 100%),url(\'/img1.jpg\')',
					backgroundSize: 'cover',
					backgroundPosition: 'center center',
					backgroundAttachment: 'fixed',
				}}
			>
				<Typography
					variant='h2'
					component={'h2'}
					textAlign={'center'}
					sx={{ fontWeight: 'bold', color: '#fffefe' }}
				>
					Welcome to exam cell automation{' '}
				</Typography>
				<Typography
					textAlign={'center'}
					variant={'h5'}
					component={'h3'}
					fontWeight={'bold'}
					color={'#ffffff'}
				>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Ullam, quos?
				</Typography>
			</Stack>
			{/* App services */}
			<Grid
				container
				spacing={2}
				sx={{
					padding: '2rem',
					width: '100%',
					marginTop: '.02rem',
					marginLeft: '.1rem',
				}}
			>
				<Grid
					sm={12}
					md={5}
					flexDirection={'row-reverse'}
					flexWrap={'wrap-reverse'}
				>
					<Stack direction={'column'} p={2} gap={2}>
						<Typography
							variant={'h3'}
							sx={{ textDecoration: 'underline' }}
						>
							Services offered
						</Typography>
						<Typography variant={'h5'}>
							We offer the following services to our users
						</Typography>
						<Box>
							<List>
								{[1, 2, 3, 4].map((item) => (
									<ListItem key={item}>
										<ListItemIcon>
											<GraphicEq />
										</ListItemIcon>
										<ListItemText>
											Marks analytics
										</ListItemText>
									</ListItem>
								))}
							</List>
						</Box>
					</Stack>
				</Grid>
				<Grid item sm={12} md={6}>
					<img
						src={'/grad.png'}
						alt={''}
						style={{
							width: '100%',
							height: '100%',
							objectFit: 'cover',
						}}
					/>
				</Grid>
			</Grid>
			<Stack direction={'column'} gap={2} p={3}>
				<Typography
					variant={'h2'}
					component={'h2'}
					textAlign={'center'}
				>
					Get access to the dashboard
				</Typography>
				<Typography textAlign={'center'} variant={'h5'} component={'p'}>
					To access the dashboard click on the link below
				</Typography>
				<Box sx={{ display: 'flex', justifyContent: 'center' }}>
					<Button
						variant='contained'
						color='primary'
						sx={{
							padding: '10px 20px',
						}}
						href='#/login'
					>
						Login to dashboard
					</Button>
				</Box>
			</Stack>
		</Container>
	);
};

export default Homepage;
