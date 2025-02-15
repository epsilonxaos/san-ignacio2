import logoMovil from '@assets/img/logo-movil.svg'
import logo from '@assets/img/logo.svg'
import Button from '@components/Button'
import SectionContainer from '@components/SectionContainer'

const Header = () => {
	return (
		<header className='w-full'>
			<SectionContainer
				borderBottom
				className='relative flex items-center justify-between py-5 md:h-[100px] md:py-0'>
				<span className='text-verde-oscuro hidden text-xs md:block'>YUCATÁN, MÉXICO</span>
				<img
					src={logoMovil}
					className='w-[150px] md:hidden'
					alt='Terreno San Ingacio'
				/>
				<img
					src={logo}
					className='left-1/2 hidden h-[25px] md:absolute md:top-1/2 md:block md:-translate-x-1/2 md:-translate-y-1/2 xl:h-[40px]'
					alt='Terreno San Ingacio'
				/>
				<Button>AGENDAR REUNIÓN</Button>
			</SectionContainer>
		</header>
	)
}

export default Header
