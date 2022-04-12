import React from 'react'
import Home from './pages/home/Home'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import NewWorkout from './pages/new-workout/NewWorkout'

const App = () => {
	return (
		<Router>
			<Switch>
				<Route path="/" exact={true}>
					<Home />
				</Route>
				<Route path="/new-workout">
					<NewWorkout />
				</Route>
			</Switch>
		</Router>
	)
}

export default App
