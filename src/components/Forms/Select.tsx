import { twMerge } from 'tailwind-merge'

import type { TInputParams } from '#types/forms'

export default function Select(opt: Readonly<TInputParams>) {
	const { name, label, options, className, id, disabled, validate, onChange } = opt

	return (
		<div className={twMerge('relative z-0 mb-4 w-full', className)}>
			<label
				htmlFor={name}
				className={`mb-1 block text-sm ${validate?.validateErrorMessage ? 'border-2 border-none text-red-500' : ''}`}>
				{label}
				{validate && <span className='text-verde font-bold'>*</span>}
			</label>

			<select
				className='select bg-verde w-full rounded-none !border-none text-white !shadow-none !outline-none'
				{...(id && { id: name })}
				{...{ name }}
				{...(disabled && { disabled })}
				{...(validate && validate.register(name, validate.rules))}
				{...(!validate && { name })}
				{...(onChange && { onChange })}>
				{options &&
					options.map((op, idx) => (
						<option
							className='bg-white text-sm text-black'
							key={'select_' + name + '_' + idx}
							value={op.value}>
							{op.name}
						</option>
					))}
			</select>

			{validate?.validateErrorMessage && <span className='text-xs text-red-500'>{validate.validateErrorMessage}</span>}
		</div>
	)
}
