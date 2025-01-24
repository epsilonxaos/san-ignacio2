import Index from '@pages/home/Index'
import { Route, Switch } from 'wouter'

const Routes = () => {
	return (
		<main>
			<Switch>
				<Route
					path='/'
					component={Index}
				/>

				<Route>404: No such page!</Route>
			</Switch>
		</main>
	)
}

export default Routes
