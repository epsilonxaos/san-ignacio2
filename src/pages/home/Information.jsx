import Img from '@assets/img/placeholder.jpg'
import SectionContainer from '@components/SectionContainer'
import Text from '@components/Text'

const Information = () => {
	return (
		<>
			<SloganText />
			<Location />
		</>
	)
}

const SloganText = () => {
	return (
		<SectionContainer
			borderBottom
			borderTop
			className='py-10 md:py-14'>
			<Text.Title className='mx-auto mb-0 max-w-[1050px] text-center font-thin lg:text-[40px] lg:leading-[45px]'>
				UNA OPORTUNIDAD DE <span className='font-normal'>INVERSIÓN PREMIUM</span> A <br className='hidden md:block' />{' '}
				SOLO 15 MINUTOS DE PROGRESO, YUCATÁN.
			</Text.Title>
		</SectionContainer>
	)
}

const Location = () => {
	return (
		<SectionContainer
			borderBottom
			className='py-10 md:py-14'>
			<div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
				<div className='col-span-1 md:px-8'>
					<Text.Title className={'md:mb-4'}>
						Ubicado en una de las zonas con mayor crecimiento en la península de Yucatán.
					</Text.Title>

					<Text>
						<span className='font-normal'>Este terreno se encuentra en la carretera Mérida-Progreso,</span> una región
						con alta demanda inmobiliaria para desarrollos residenciales y comerciales.
					</Text>
					<Text className={'mb-0 font-normal'}>El crecimiento en la zona ha impulsado:</Text>
					<ul className='text-verde-oscuro mb-6 ml-2 list-disc pl-5'>
						<li>
							<Text className={'mb-0'}>Incremento en la plusvalía de terrenos.</Text>
						</li>
						<li>
							<Text className={'mb-0'}>Expansión de desarrollos privados, comerciales y turísticos.</Text>
						</li>
						<li>
							<Text className={'mb-0'}>Mejoras en infraestructura y accesos.</Text>
						</li>
					</ul>
					<Text className={'md:mb-0'}>
						Contamos con referencias de proyectos exitosos en la zona, respaldando el potencial de esta inversión.
					</Text>
				</div>
				<div className='col-span-1 lg:col-span-2'>
					<img
						className='border-verde-oscuro aspect-square h-full min-h-[230px] w-full border-[3px] object-cover object-center lg:aspect-auto'
						src={Img}
						alt='Imagen cercania mar'
					/>
				</div>
			</div>
		</SectionContainer>
	)
}

export default Information
