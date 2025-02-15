import { cn } from '@utils/cn'

import type { TButtonParams } from '#types/main'

import { Link } from 'react-router-dom'

const Button = ({ children, onClick, type, className }: TButtonParams) => {
	return (
		<button
			type={type ?? 'button'}
			className={cn(
				'bg-mostaza font-america text-verde-oscuro min-w-[100px] p-4 text-[10px] font-normal uppercase tracking-wider md:text-xs',
				className
			)}
			onClick={onClick}>
			{children}
		</button>
	)
}

const Url = ({ children, href, className }: TButtonParams & { href: string }) => {
	return (
		<a
			href={href}
			target='_blank'
			rel='noopener noreferrer'
			className={cn(
				'bg-mostaza font-america text-verde-oscuro min-w-[100px] p-4 text-[10px] font-normal uppercase tracking-wider md:text-xs',
				className
			)}>
			{children}
		</a>
	)
}

const Navigation = ({ to, children, onClick, className }: TButtonParams & { to: string }) => {
	return (
		<Link
			to={to}
			className={cn(
				'bg-mostaza font-america text-verde-oscuro min-w-[100px] p-4 text-[10px] font-normal uppercase tracking-wider md:text-xs',
				className
			)}
			onClick={onClick}>
			{children}
		</Link>
	)
}

Button.Url = Url
Button.Navigation = Navigation

export default Button
