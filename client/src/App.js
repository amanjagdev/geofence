import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import "./index.scss";

//Pages
import Home from "./pages/Home";
import NotFoundPage from "./pages/NotFoundPage";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/Login";

//Components
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Dashboard from "./pages/Dashboard";

const App = () => {
	return (
		<div className="App">
			<Router>
				<NavBar />
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/dashboard" exact component={Dashboard} />
					<Route path="/signin" exact component={SignIn} />
					<Route path="/signup" exact component={SignUp} />
					<Route component={NotFoundPage} />
				</Switch>
				<Footer />
			</Router>
		</div>
	);
};

export default App;
