
import { Route, Switch } from 'wouter'
import Index from '@pages/Index'

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
