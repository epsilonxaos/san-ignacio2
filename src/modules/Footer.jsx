import logo from '@assets/img/logo-blanco.svg'
import Button from '@components/Button'
import SectionContainer from '@components/SectionContainer'
import { Link } from 'wouter'

const Footer = () => {
	return (
		<footer className='bg-verde-oscuro text-center text-xs font-thin text-gris'>
			<SectionContainer className='flex flex-col gap-1 py-3 md:flex-row md:items-center md:justify-between'>
				<img
					src={logo}
					alt='Terreno San ignacio'
					className='hidden h-[20px] lg:block xl:h-[30px]'
				/>
				<a
					href='/'
					target='_blank'
					className='underline'
					rel='noopener noreferrer'>
					Ubicación del Predio
				</a>
				<a href='tel:+13056131186'>+1 (305) 613-1186</a>
				<a href='mailto:palfaro@elliman.com'>palfaro@elliman.com</a>

				<div className='hidden md:block'>
					<ByMBP />
				</div>
			</SectionContainer>

			<div className='bg-gris py-2 text-verde-oscuro md:hidden'>
				<ByMBP />
			</div>
		</footer>
	)
}

const ByMBP = () => {
	return (
		<p className='uppercase'>
			Desarrollado por{' '}
			<a
				href='https://www.madeby.partners/'
				target='_blank'
				rel='noopener noreferrer'>
				<span className='font-normal underline'>MadebyPartners®</span>
			</a>
		</p>
	)
}

export default Footer
