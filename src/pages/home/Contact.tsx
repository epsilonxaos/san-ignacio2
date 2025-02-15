import Img from '@assets/img/contacto.jpg'
import svgIsotipo from '@assets/img/isotipo.svg'
import Button from '@components/Button'
import SectionContainer from '@components/SectionContainer'
import Text from '@components/Text'
import { cn } from '@utils/cn'
import { toast } from 'sonner'

import { useForm } from 'react-hook-form'

const Contact = () => {
	return (
		<SectionContainer className='py-10 md:py-14'>
			<div className='grid grid-cols-1 gap-8 md:grid-cols-2'>
				<div className='col-span-1 flex items-center justify-center'>
					<div className='mx-auto max-w-[450px]'>
						<Text.Title className={'mb-2'}>
							Agenda una reunión hoy mismo y conoce todos los detalles de esta oportunidad.
						</Text.Title>
						<Text>Ofrecemos asesoría personalizada sobre:</Text>
						<ul className='mb-5 list-disc pl-4 text-verde-oscuro'>
							<li>
								<Text className={'mb-0'}>Modelo financiero y opciones de financiamiento.</Text>
							</li>
							<li>
								<Text className={'mb-0'}>Proceso de compra, documentación y tiempos de cierre.</Text>
							</li>
							<li>
								<Text className={'mb-0'}>Visitas guiadas al predio.</Text>
							</li>
						</ul>

						<Form />
					</div>
				</div>

				<div className='col-span-1'>
					<div className='relative h-full'>
						<img
							src={Img}
							alt='Imagen de contacto'
							className='aspect-square h-full min-h-[230px] w-full border-[3px] border-verde-oscuro object-cover object-center lg:aspect-auto xl:min-h-[750px]'
						/>

						<img
							src={svgIsotipo}
							alt='Isotipo'
							className='absolute inset-0 m-auto w-[38px] lg:w-[90px]'
						/>
					</div>
				</div>
			</div>
		</SectionContainer>
	)
}

const Form = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm()

	const onSubmit = (data: any) => {
		toast.success('Datos enviados correctamente')
		reset()
	}

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className='max-w-[570px]'>
			<div className='form-group'>
				<Input
					name={'nombre'}
					placeholder='Nombre completo'
					validate={true}
					register={register}
					rules={{ required: 'Campo requerido' }}
					validateError={!!errors.nombre}
					validateErrorMessage={errors.nombre?.message}
				/>
			</div>
			<div className='form-group'>
				<Input
					name={'correo'}
					placeholder='Correo electrónico'
					validate={true}
					register={register}
					rules={{ required: 'Campo requerido', pattern: { value: /^\S+@\S+$/i, message: 'Correo inválido' } }}
					validateError={!!errors.correo}
					validateErrorMessage={errors.correo?.message}
				/>
			</div>
			<div className='form-group'>
				<Input
					name={'telefono'}
					placeholder='Teléfono'
					validate={true}
					register={register}
					rules={{
						required: 'Campo requerido',
						pattern: { value: /^\d+$/, message: 'Solo números' },
						minLength: { value: 10, message: 'Mínimo 10 caracteres' },
					}}
					validateError={!!errors.telefono}
					validateErrorMessage={errors.telefono?.message}
				/>
			</div>
			<div className='form-group'>
				<Input
					name={'fecha'}
					placeholder='Fecha y hora'
					validate={true}
					type='datetime-local'
					register={register}
					rules={{ required: 'Campo requerido' }}
					validateError={!!errors.fecha}
					validateErrorMessage={errors.fecha?.message}
				/>
			</div>

			<div className='pt-2 text-center md:text-left'>
				<Button
					type='submit'
					className='mx-auto min-w-[200px] md:ml-0'>
					agendar reunión
				</Button>
			</div>
		</form>
	)
}

function Input({
	name = '',
	type = 'text',
	placeholder = '',
	register,
	validate = false,
	rules,
	validateError = '',
	validateErrorMessage = '',
}) {
	return (
		<>
			{validateError && <span className='text-xs text-red-400'>{validateErrorMessage}</span>}
			<input
				{...(validate && register(name, rules))}
				type={type}
				placeholder={placeholder}
				{...(!validate && { name })}
				id={name}
				className={cn(
					'mb-4 h-[50px] w-full border-[3px] border-verde-oscuro bg-gris px-6 text-verde-oscuro !shadow-none !outline-none !ring-0 placeholder:text-verde-oscuro/80',
					validateError && 'border-2 border-red-300 bg-red-100 text-black'
				)}
			/>
		</>
	)
}

export default Contact
