import type { TEventActionApp, TEventStateApp } from '#types/main'

import { type Dispatch, createContext } from 'react'

interface IAppContext {
	state: TEventStateApp
	dispatch: Dispatch<TEventActionApp>
}

const AppContext = createContext<IAppContext>({
	state: {} as TEventStateApp,
	dispatch: () => {},
})

export default AppContext
