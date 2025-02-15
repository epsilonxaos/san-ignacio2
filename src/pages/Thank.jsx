import fondo from '@assets/img/placeholder.jpg'
import Button from '@components/Button'
import Text from '@components/Text'

const Thank = () => {
	return (
		<div
			className='relative flex h-[calc(100vh-115px)] min-h-[350px] items-center justify-center border-b-[3px] border-b-gris bg-cover bg-center md:h-[calc(100vh-40px)] lg:h-[calc(100vh-44px)]'
			style={{ backgroundImage: `url(${fondo})` }}>
			<div className='absolute left-0 top-0 z-10 h-full w-full bg-verde-oscuro/90'></div>

			<div className='relative z-10 mx-auto max-w-[550px] text-center'>
				<Text.Title className={'text-gris'}>
					Gracias por considerar Terreno San Ignacio para tu próximo proyecto
				</Text.Title>
				<Text className={'uppercase text-gris'}>Un asesor se contactará contigo.</Text>

				<Button.Navigation
					className={'inline-block w-[150px] py-3'}
					to={'/'}>
					Regresar
				</Button.Navigation>
			</div>
		</div>
	)
}

export default Thank
