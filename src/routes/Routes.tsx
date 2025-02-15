import Header from '@modules/Header'
import Thank from '@pages/Thank'
import Index from '@pages/home/Index'
import { Route, Switch } from 'wouter'

const Routes = () => {
	return (
		<main>
			<Switch>
				<Route
					path='/'
					component={Home}
				/>
				<Route
					path='/gracias'
					component={Thank}
				/>

				<Route>404: No such page!</Route>
			</Switch>
		</main>
	)
}

const Home = () => {
	return (
		<>
			<Header />
			<Index />
		</>
	)
}

export default Routes
