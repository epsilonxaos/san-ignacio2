import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import { toast } from 'sonner'

import type { IApiRequestOptions, TShowToastApiOption } from '#types/apiRequest'

class ApiRequest {
	private controller?: any
	private base: string = APP_ENV.API_URL ?? ''
	private defaultHeaders = {
		token: '',
	}
	private defaultShowToast = {
		loading: 'Cargando...',
		success: 'Solicitud exitosa',
		error: 'Error en la solicitud',
	}

	/**
	 * Realiza una solicitud a una API con las opciones proporcionadas y devuelve una promesa con la respuesta de la API.
	 * @param {IApiRequestOptions} options - Las opciones de la solicitud a la API.
	 * @returns {Promise<AxiosResponse<T>>} Una promesa que se resuelve con la respuesta de la API en formato AxiosResponse con un tipo genérico T opcional.
	 * @template T - Opcional: El tipo de datos esperado en la respuesta de la API.
	 */
	fetchData = <T>(options: IApiRequestOptions): Promise<AxiosResponse<T>> => {
		const abortController = new AbortController()
		const signal = abortController.signal
		this.controller = abortController

		return new Promise(async (resolve, reject) => {
			const { method, url, data, headers, responseType, base, showToast = false, decompress = false, params } = options
			const mergedHeaders = { ...this.defaultHeaders, ...headers }
			let mergedToast: TShowToastApiOption | boolean

			if (showToast === true) {
				mergedToast = this.defaultShowToast
			} else if (typeof showToast === 'object') {
				mergedToast = showToast
			} else mergedToast = false

			if (mergedToast && mergedToast?.loading) {
				toast.loading(mergedToast.loading)
			}
			const config: AxiosRequestConfig = {
				method: method ?? 'GET',
				url: base ? base + url : this.base + url,
				data,
				params,
				headers: mergedHeaders,
				responseType,
				decompress,
				signal,
				validateStatus: status => {
					return status <= 299
				},
			}

			try {
				const response = await axios.request<T>(config)
				if (response.status >= 200 && response.status <= 299) {
					if (mergedToast) toast.dismiss()
					if (mergedToast && mergedToast?.success) toast.success(mergedToast.success)
					resolve(response)
				}
			} catch (data) {
				console.error(data)
				if (mergedToast) toast.dismiss()
				if (mergedToast && mergedToast?.error) toast.error(mergedToast.error)
				reject(new Error())
			}
		})
	}

	/**
	 * Cancelación la solicitud en curso de manera manual
	 */
	cancelRequest = () => {
		if (this.controller) {
			this.controller.abort()
			this.controller = null
		}
	}
}

export default ApiRequest
