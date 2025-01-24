import type { ReactNode } from 'react'

declare global {
	const APP_ENV: {
		APP_URL?: string
		API_URL?: string
	}
}

export type THTMLButtonTypeAttribute = 'submit' | 'reset' | 'button'
export type THTMLInputTypeAttribute =
	| 'button'
	| 'checkbox'
	| 'color'
	| 'date'
	| 'datetime-local'
	| 'email'
	| 'file'
	| 'hidden'
	| 'image'
	| 'month'
	| 'number'
	| 'password'
	| 'radio'
	| 'range'
	| 'reset'
	| 'search'
	| 'submit'
	| 'tel'
	| 'text'
	| 'time'
	| 'url'
	| 'week'

export type TEventStateApp = {}
export type TEventActionApp = Partial<TEventStateApp>

export type TButtonParams = {
	text: string
	type?: THTMLButtonTypeAttribute
	className?: string
	onClick?: () => void
}

export type TTexts = {
	children: ReactNode
	className?: string
}

export type TClassName = string | string[] | undefined

export interface TextProps {
	children: ReactNode
	className?: TClassName
	parseHtml?: boolean
}

export interface TitleProps {
	children: ReactNode | string
	className?: TClassName
	parseHtml?: boolean
}
