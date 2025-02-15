import { cn } from '@utils/cn'

import type { TextProps, TitleProps } from '#types/main'

import parse from 'html-react-parser'

const Text = ({ children, className, parseHtml }: TextProps) => {
	if (parseHtml && !children) return null

	if (parseHtml)
		return (
			<div className={cn('text-verde-oscuro mb-4 text-sm font-thin lg:text-base', className)}>
				{parse(children as string)}
			</div>
		)

	return <p className={cn('text-verde-oscuro mb-4 text-sm font-thin lg:text-base', className)}>{children}</p>
}

const Title = ({ children, className, parseHtml }: TitleProps) => {
	if (parseHtml && !children) return null

	if (parseHtml)
		return (
			<div
				className={cn('text-verde-oscuro mb-4 text-base font-thin uppercase lg:text-3xl lg:tracking-wider', className)}>
				{parse(children as string)}
			</div>
		)

	return (
		<h3 className={cn('text-verde-oscuro mb-4 text-base font-thin uppercase lg:text-3xl lg:tracking-wider', className)}>
			{children}
		</h3>
	)
}

Text.Title = Title

export default Text
