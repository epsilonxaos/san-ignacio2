import { twMerge } from 'tailwind-merge'

import type { TInputParams } from '#types/forms'

export default function Input(opt: Readonly<TInputParams>) {
	const { name, label, type = 'text', className, placeholder, value, id, disabled, validate, onChange } = opt

	return (
		<label
			htmlFor={name}
			className={twMerge('form-control w-full', className)}>
			<div className='label'>
				<span className='label-text'>
					{label} {validate && <span className='font-bold text-red-500'>*</span>}
				</span>
			</div>
			<input
				className='input bg-verde w-full rounded-none !border-none text-white !shadow-none !outline-none'
				{...(id && { id: name })}
				{...(type && { type })}
				{...{ name }}
				{...(placeholder && { placeholder })}
				{...(value && { value })}
				{...(disabled && { disabled })}
				{...(validate && validate.register(name, validate.rules))}
				{...(!validate && { name })}
				{...(onChange && { onChange })}
			/>
			<div className='label'>
				{validate?.validateErrorMessage && (
					<span className='label-text-alt font-medium text-red-500'>{validate.validateErrorMessage}</span>
				)}
			</div>
		</label>
	)
}
