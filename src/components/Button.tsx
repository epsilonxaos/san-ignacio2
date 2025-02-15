import { cn } from '@utils/cn'
import { Link } from 'wouter'

import type { TButtonParams } from '#types/main'

const Button = ({ children, onClick, type, className }: TButtonParams) => {
	return (
		<button
			type={type ?? 'button'}
			className={cn(
				'min-w-[100px] bg-mostaza p-4 font-america text-[10px] font-normal uppercase tracking-wider text-verde-oscuro md:text-xs',
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
				'min-w-[100px] bg-mostaza p-4 font-america text-[10px] font-normal uppercase tracking-wider text-verde-oscuro md:text-xs',
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
				'min-w-[100px] bg-mostaza p-4 font-america text-[10px] font-normal uppercase tracking-wider text-verde-oscuro md:text-xs',
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
