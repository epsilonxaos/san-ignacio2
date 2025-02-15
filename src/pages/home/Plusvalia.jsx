import Img from '@assets/img/placeholder.jpg'
import SectionContainer from '@components/SectionContainer'
import Text from '@components/Text'

const Plusvalia = () => {
	const cards = [
		{ title: 'Residencial', description: 'Privadas exclusivas o fraccionamientos premium.', img: Img },
		{ title: 'Comercial', description: 'Plazas, centros de conveniencia o usos mixtos.', img: Img },
		{ title: 'Industrial', description: 'Almacenes y centros logísticos.', img: Img },
		{ title: 'Turistico', description: 'Villas, eco-desarrollos o proyectos sustentables.', img: Img },
	]

	return (
		<SectionContainer
			borderBottom
			borderTop
			className='py-10 md:py-14'>
			<Text.Title className={'mb-0 text-center'}>Alto potencial de plusvalía y desarrollo</Text.Title>

			<div className='mt-10 grid grid-cols-1 gap-2 md:mt-14 md:grid-cols-2 lg:grid-cols-4'>
				{cards.map((card, index) => (
					<CardPlus
						key={index}
						title={card.title}
						img={card.img}
						description={card.description}
					/>
				))}
			</div>
		</SectionContainer>
	)
}

function CardPlus({ title, description, img }) {
	return (
		<div className='flex flex-col items-center justify-start border-[3px] border-verde-oscuro'>
			<img
				src={img}
				alt={title}
				className='min-h-[300px] w-full object-cover object-center lg:min-h-[450px]'
			/>
			<div className='p-4'>
				<Text.Title className='mb-1 text-center lg:text-xl'>{title}</Text.Title>
				<Text className='text-center'>{description}</Text>
			</div>
		</div>
	)
}

export default Plusvalia
