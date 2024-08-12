import { twMerge } from 'tailwind-merge'

import type { TButtonParams } from '#types/main'

const Button = (opt: TButtonParams) => {
	const { text, className, type = 'button', onClick } = opt

	return (
		<button
			className={twMerge(
				'btn btn-sm bg-amarillo text-verde hover:bg-amarillo min-w-[160px] border-none font-normal uppercase',
				className
			)}
			{...{ type }}
			{...(onClick && { onClick })}>
			{text}
		</button>
	)
}

export default Button
