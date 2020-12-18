import React from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from "react-router-dom";

import Main from "layout/Main";
import Auth from "layout/Auth";

export default function App() {
	return (
		<Router>
			<div>
				<Switch>
					<Route exact path="/auth">
						<Auth />
					</Route>
					<Route path="/main">
						<Main />
					</Route>

					<Redirect to="/main" />
				</Switch>
			</div>
		</Router>
	);
}
