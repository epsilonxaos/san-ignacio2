import img from '@assets/img/banner.jpg'
import SectionContainer from '@components/SectionContainer'

const Banner = () => {
	return (
		<SectionContainer className='py-10 md:py-14'>
			<img
				className='h-auto min-h-[450px] w-full border-[3px] border-verde-oscuro object-cover object-right'
				src={img}
				alt='Imagen de portada'
			/>
		</SectionContainer>
	)
}

export default Banner
