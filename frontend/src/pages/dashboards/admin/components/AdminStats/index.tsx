/* eslint-disable @typescript-eslint/naming-convention */
import CountUp from 'react-countup';
import Graph from 'components/Graph';
import { Person } from '@mui/icons-material';
import React from 'react';
import { styled } from '@mui/material/styles';
import { Box, Container, Divider, Grid, GridProps, IconButton, Stack, Typography } from '@mui/material';

type AdminStatType = {
  title: string;
  count: number;
  color: string;
  icon?: JSX.Element;
};

const adminStats: AdminStatType[] = [
	{
		title: 'Total Users',
		count: 867,
		color: 'primary',
		icon: <Person />
	},
	{
		title: 'Lectures',
		count: 40,
		color: 'secondary',
		icon: <Person />
	},
	{
		title: 'Students',
		count: 300,
		color: 'secondary',
		icon: <Person />
	},
	{
		title: 'Courses',
		count: 20,
		color: 'secondary',
		icon: <Person />
	}
	, {
		title: 'Units',
		count: 50,
		color: 'secondary',
		icon: <Person />
	},
	{
		title: 'Departments',
		count: 10,
		color: 'secondary',
		icon: <Person />
	},
	{
		title: 'Faculties',
		count: 4,
		color: 'secondary',
		icon: <Person />
	}

];

const StyledGridStat = styled(Grid)<GridProps>(({ theme }) => ({
	boxShadow: theme.shadows[4],
	borderRadius: '10px',
	padding: '10px',
	background: '#4942A1',
	color: '#ffffff',
}));

const StyledBoxHeader = styled(Box)(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	marginTop:'20px',
	padding: '10px',
  
	color: theme.palette.text.primary,
	boxShadow: theme.shadows[1],
	borderRadius: '10px',

}));

const mapAdminStats = (stats: AdminStatType[]) => {
	return stats.map((stat, index) => {
		return (<StyledGridStat  key={index} item xs={12} sm={4} md={3} sx={{

		}}>
			<Stack direction={'row'} justifyContent="space-between">
				<Stack direction="column">
					<Typography variant="h3" fontWeight={'bold'}>
						<CountUp start={0} end={stat.count} duration={2} separator="," />
					</Typography>
					<Typography variant="h6">{stat.title}</Typography>
				</Stack>
				<Box>
					<IconButton>
						{stat.icon}
					</IconButton>
				</Box>

			</Stack>
			
		</StyledGridStat>);
	});
};


const AdminStats = () => {
	return (
		<Container>

			<Stack direction={'column'} spacing={4} >
				<StyledBoxHeader >
					<Typography variant="h4" component="h5" textAlign={'center'}>Admin dashboard</Typography>
				</StyledBoxHeader>
				<Divider />
				<Container>
					<Grid container spacing={3} sx={{ gap: '20px' }}>
						{mapAdminStats(adminStats)}
					</Grid>

				</Container>
				<Container>
					<Graph />
				</Container>
			</Stack>
		</Container>
	);
};

export default AdminStats;
