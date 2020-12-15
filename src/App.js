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
	// let [reminders, setReminders] = useState(null);
	// let [error, setError] = useState();

	// useEffect(() => {
	// 	let isCurrent = true;
	// 	setReminders(null);
	// 	let url = `/api/reminders`;

	// 	fetch(url)
	// 		.then((res) => res.json())
	// 		.then((json) => {
	// 			if (isCurrent) {
	// 				setReminders(json.reminders);

	// 				console.log(json.reminders);
	// 			}
	// 		})
	// 		.catch((e) => {
	// 			if (isCurrent) {
	// 				setError(
	// 					"We couldn't load your reminders. Try again soon."
	// 				);
	// 				console.error(e);
	// 			}
	// 		});

	// 	return () => {
	// 		isCurrent = false;
	// 	};
	// }, []);

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
