import type { IApiRequestOptions } from '#types/apiRequest'

import ApiRequest from './ApiRequest'

const apiRequest = new ApiRequest()

type IInitialCharge = {
	datos: {}
}

export const getCargaInicialService = (opt?: IApiRequestOptions) => {
	const requestOptions: IApiRequestOptions = {
		url: '/api/service',
		method: 'GET',
	}

	return apiRequest.fetchData<IInitialCharge>({ ...requestOptions, ...opt })
}
