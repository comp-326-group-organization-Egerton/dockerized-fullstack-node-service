import React from 'react';
import { AdminPanelSettings, Dashboard, Dehaze, EditOutlined, HomeOutlined, LocalLibraryOutlined, Person, SchoolOutlined } from '@mui/icons-material';
import {
	Button,
	Divider,
	IconButton,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Stack,
	Typography,
} from '@mui/material';

type PropListType = {
	icon: JSX.Element;
	title: string;
	id: string | number;
	url: string;
}
// eslint-disable-next-line @typescript-eslint/naming-convention
const AdminDashboardList: PropListType[] = [
	{
		icon: <Dashboard />,
		title: 'Dashboard',
		id: 'dashboard',
		url: '#/dashboard/admin',
	},
	{
		title: 'Faculties',
		icon: <HomeOutlined />,
		id: 'faculties',
		url: '#/dashboard/admin/faculties',
	},
	{
		title: 'Courses',
		icon: <LocalLibraryOutlined />,
		id: 'courses',
		url: '#/dashboard/admin/courses',
	},
	{
		title: 'Students',
		icon: <SchoolOutlined />,
		id: 'students',
		url: '#/dashboard/admin/students',
	},
	{
		title: 'Lectures',
		icon: <Person />,
		id: 'lectures',
		url: '#/dashboard/admin/lecturers',
	},
	{
		title: 'Units',
		icon: <EditOutlined />,
		id: 'units',
		url: '#/dashboard/admin/units',
	},
	{
		title: 'Departments',
		icon: <HomeOutlined />,
		id: 'departments',
		url: '#/dashboard/admin/departments',
	},
	{
		title: 'Profile',
		icon: <AdminPanelSettings />,
		id: 'profile',
		url: '#/dashboard/admin/profile',
	},
];
const mapListToListItem = (list: PropListType[]) => {
	return list.map((item) => {
		return (
			<ListItem button key={item.id} component="a" href={item.url}>
				<ListItemIcon>{item.icon}</ListItemIcon>
				<ListItemText primary={item.title} />
			</ListItem>
		);
	});
};

// eslint-disable-next-line @typescript-eslint/naming-convention
const AdminSidebar = () => {
	return (
		<Stack direction={'column'} sx={{ position: 'sticky', top: 0 }}>
			<Stack
				direction={'row'}
				alignItems={'center'}
				justifyContent={'space-between'}
			>
				<Typography variant={'h5'} component={'h5'}>
					Administrator
				</Typography>
				<IconButton>
					<Dehaze />
				</IconButton>

			</Stack>
			<Stack>
				<Button href="#/" variant="contained" color="primary">Back to homepage</Button>
			</Stack>
			<Divider />
			<List>
				{mapListToListItem(AdminDashboardList)}
			</List>
		</Stack>
	);
};

export default AdminSidebar;
