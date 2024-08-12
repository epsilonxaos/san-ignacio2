import { twMerge } from 'tailwind-merge'

import type { TTexts } from '#types/main'

const Text = (opt: TTexts) => {
	const { children, className } = opt

	return <p className={twMerge('text-sm', className)}>{children}</p>
}

const Title = (opt: TTexts) => {
	const { children, className } = opt

	return <h3 className={twMerge('text-xl font-medium lg:text-[26px]', className)}>{children}</h3>
}

Text.Title = Title

export default Text
