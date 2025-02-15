import { cn } from '@utils/cn'

type TSectionContainer = {
	children: React.ReactNode
	className?: string
	id?: string
	borderTop?: boolean
	borderBottom?: boolean
}

const SectionContainer = ({ children, className, id, borderTop, borderBottom }: TSectionContainer) => {
	return (
		<>
			{borderTop && (
				<Section>
					<hr className='border-t-[3px] border-t-verde-oscuro' />
				</Section>
			)}

			<Section
				id={id}
				className={className}>
				{children}
			</Section>

			{borderBottom && (
				<Section>
					<hr className='border-t-[3px] border-t-verde-oscuro' />
				</Section>
			)}
		</>
	)
}

const Section = ({ children, className, id }: TSectionContainer) => {
	return (
		<section
			{...(id && { id })}
			className={cn('mx-auto max-w-section px-8 lg:px-14 xl:px-20', className)}>
			{children}
		</section>
	)
}

export default SectionContainer
