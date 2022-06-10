/* eslint-disable @typescript-eslint/naming-convention */
import React from 'react';
import { useAppSelector } from 'state/hooks';
import { Navigate, useLocation } from 'react-router-dom';

const LoginRequired = ({ children }:{children:JSX.Element}) => {
	const {isAuthenticated} = useAppSelector((state) => state.root.user.profile);
	const location = useLocation();

	if (!isAuthenticated) {
		// Redirect them to the /login page, but save the current location they were
		// trying to go to when they were redirected. This allows us to send them
		// along to that page after they login, which is a nicer user experience
		// than dropping them off on the home page.
		return <Navigate to="/login" state={{ from: location }} replace />;
	}

	return children;
};

export default LoginRequired;