import type { AxiosError, AxiosResponse } from 'axios'

export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE'
export type ResponseTypes = 'json' | 'arraybuffer' | 'blob' | 'document' | 'text' | 'stream'
export type TonSuccessCallback<T> = (response: AxiosResponse<T>) => void
export type TonErrorCallback = (error: Error | AxiosError) => void

export interface IApiRequestOptions<Q = any> {
	/**
	 * Metodo peticion
	 */
	method?: HttpMethod
	/**
	 * Base URL
	 * @default APP_ENV.API_URL
	 */
	base?: string
	/**
	 * Url peticion
	 */
	url?: string
	/**
	 * Datos a enviar
	 * @property {Object} Q Object data
	 */
	data?: Q
	/**
	 * Datos a enviar usando GET
	 * @property {Object} Q Object params data
	 */
	params?: Q
	/**
	 * Cabeceras en la peticion
	 * @constant headers.token Token de la aplicacion
	 * @example { "auth": "12333" }
	 */
	headers?: object
	/**
	 * Tipo de respuesta de la peticion
	 */
	responseType?: ResponseTypes
	/**
	 * Activa alertas toast
	 * @default false
	 * @property {Object | boolean} showToast true or Object
	 */
	showToast?: boolean | TShowToastApiOption
	/**
	 *  Descomprimir gzip enviado de la peticion
	 *  @param
	 *  @return
	 *  @example
	 */
	decompress?: boolean
}

export type TShowToastApiOption = {
	/**
	 * @default 'Cargando...'
	 */
	loading?: string
	/**
	 * @default 'Solicitud exitosa'
	 */
	success?: string
	/**
	 * @default 'Error en la solicitud'
	 */
	error?: string
}
