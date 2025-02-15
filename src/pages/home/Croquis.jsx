import svgCroquis from '@assets/img/croquis.svg'
import SectionContainer from '@components/SectionContainer'
import Text from '@components/Text'

const Croquis = () => {
	return (
		<div className='bg-verde-oscuro my-10 pb-10 md:my-14 md:pb-14 lg:pb-0'>
			<SectionContainer className='py-10 md:py-14 lg:pr-0'>
				<div className='grid grid-cols-1 lg:grid-cols-3 lg:gap-10'>
					<div className='col-span-1 flex flex-col justify-center lg:pl-10'>
						<Text.Title className={'text-gris'}>Ubicado en la península de Yucatán.</Text.Title>
						<ul className='list-disc pl-4 text-gris'>
							<li>
								<Text className={'mb-0 font-thin text-gris'}>A solo 20 minutos del periférico de Mérida.</Text>
							</li>
							<li>
								<Text className={'mb-0 font-thin text-gris'}>
									Conectividad directa con el puerto de Progreso y el aeropuerto internacional de Mérida.
								</Text>
							</li>
							<li>
								<Text className={'mb-0 font-thin text-gris'}>
									Cercano a universidades, hospitales, centros comerciales y desarrollos habitacionales en crecimiento.
								</Text>
							</li>
							<li>
								<Text className={'mb-0 font-thin text-gris'}>
									Área con alta demanda de inversión y plusvalía en aumento.
								</Text>
							</li>
						</ul>
					</div>
					<div className='col-span-2 hidden items-center justify-center lg:flex'>
						<img
							src={svgCroquis}
							alt='Croquis'
							className='w-full'
						/>
					</div>
				</div>
			</SectionContainer>

			<img
				src={svgCroquis}
				alt='Croquis'
				className='w-full lg:hidden'
			/>
		</div>
	)
}

export default Croquis
