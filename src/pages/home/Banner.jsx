import img from '@assets/img/placeholder.jpg'
import SectionContainer from '@components/SectionContainer'

const Banner = () => {
	return (
		<SectionContainer className='py-10 md:py-14'>
			<img
				className='border-verde-oscuro h-auto min-h-[450px] w-full border-[3px] object-cover object-right'
				src={img}
				alt='Imagen de portada'
			/>
		</SectionContainer>
	)
}

export default Banner
