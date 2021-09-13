import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useRecoilValue } from "recoil";

import { userAtom } from "../../global/globalState";

const PrivateRoute = ({ component: Component, doc, ...rest }) => {
	const user = useRecoilValue(userAtom);

	return (
		<Route
			{...rest}
			render={(props) =>
				user ? <Component {...props} /> : <Redirect to="/login" />
			}
		/>
	);
};

export default PrivateRoute;
