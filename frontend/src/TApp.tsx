import { Table } from '@mui/material';
import Graph from 'components/Graph';
import SocialMedia from 'components/SocialMedia';
import UserState from 'components/UserState';
import React from 'react';

const TApp = () => {
	return (
		<div>
			<UserState />
			<SocialMedia/>
			<Graph />
			<Table />
		</div>
	);
};

export default TApp;