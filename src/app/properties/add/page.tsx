'use client'
import {Button} from "@/components/ui/button";
import {Form} from "@/components/ui/form";
import CategoryStep from "@/features/properties/steps/category-step";
import DescriptionStep from "@/features/properties/steps/description-step";
import DetailsStep from "@/features/properties/steps/details-step";
import ImageStep from "@/features/properties/steps/image-step";
import LocationStep from "@/features/properties/steps/location-step";
import {cn} from "@/lib/utils";
import {zodResolver} from "@hookform/resolvers/zod";
import {useState} from "react";
import {FormProvider, useForm} from "react-hook-form";
import {toast} from "sonner";
import {z} from "zod";
import {trpc} from '@/trpc/client';
import {useRouter} from 'next/navigation';


const addPropertySchema = z.object({
	title: z.string().min(4, 'Title is too short').max(100, 'Title is too long'),
	description: z.string().min(10, 'Description is too short').max(1000, 'Description is too long'),
	imageSrc: z.string('Invalid image URL'),
	category: z.string().min(1, 'Category is required'),
	roomCount: z.number().min(1, 'At least 1 room is required'),
	bathroomCount: z.number().min(1, 'At least 1 bathroom is required'),
	guestCount: z.number().min(1, 'At least 1 guest is required'),
	locationValue: z.string().min(1, 'Location is required'),
	price: z.number().min(1, 'Price must be at least 1'),
})

export type AddPropertyFormData = z.infer<typeof addPropertySchema>;

const AddPropertyPage = () => {
	const steps = [
		{
			title: "Choose a category",
			description: "Select the category that best matches your listing.",
			content: <CategoryStep/>
		},
		{
			title: "Select location",
			description: "Choose country and set marker on the map.",
			content: <LocationStep/>
		},
		{
			title: "Set details",
			description: "Specify guests, rooms and bathrooms.",
			content: <DetailsStep/>
		},
		{
			title: "Upload images",
			description: "Provide at least one image to show your place.",
			content: <ImageStep/>
		},
		{
			title: "Description & Price",
			description: "Write a short description and set a nightly price.",
			content: <DescriptionStep/>
		},
	] as const;
	const form = useForm<AddPropertyFormData>({
		defaultValues: {
			title: '',
			description: '',
			imageSrc: '',
			category: '',
			roomCount: 1,
			bathroomCount: 1,
			guestCount: 1,
			locationValue: '',
			price: 1,
		},
		resolver: zodResolver(addPropertySchema)
	})
	
	const router = useRouter();
	const createListing = trpc.createListing.useMutation({
		onSuccess() {
			toast.success('Listing created');
			// Optionally redirect to home or listing page
			router.push('/');
		},
		onError(e) {
			toast.error(e.message || 'Failed to create listing');
		}
	});
	
	const [step, setStep] = useState(0);
	const isActive = (s: number) => step === s
	const isFirst = () => step === 0
	const isLast = () => step === steps.length - 1
	const pending = createListing.status === 'pending'
	
	const addStep = () => {
		if (step === steps.length - 1) return
		setStep(step + 1)
	}
	
	const subStep = () => {
		if (step === 0) return
		setStep(step - 1)
	}
	
	const onSubmit = (data: AddPropertyFormData) => {
		createListing.mutate(data);
	}
	
	
	return (
		<FormProvider {...form}>
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)}>
					<div className='h-screen flex flex-col'>
						<div
							className='max-w-[1000px]  w-full flex flex-col mx-auto lg:py-20 h-full'>
							<div className='flex-1 border rounded-lg shadow-2xl md:p-4 flex flex-col h-full '>
								<div className='w-full  shrink-0 lg:px-10 flex justify-between overflow-x-auto'>
									{/*	steps*/}
									{steps.map((step, index) => (
										<Button key={step.title} variant='ghost'
												className='rounded-none text-sm lg:text-lg cursor-pointer'
												onClick={() => setStep(index)}
												asChild>
											<div
												className={cn('text-center py-2 px-4 font-semibold ',
													isActive(index) && 'bg-accent border-b-2 border-black'
												)}>
												{step.title}
											</div>
										</Button>
									))}
								</div>
								<div className='w-full lg:px-10 px-5 lg:pt-10 pt-5 pb-5 shrink-0'>
									<p className='lg:text-3xl md:text-3xl sm:text-2xl text-4xl font-semibold'>
										{steps[step].description}
									</p>
								</div>
								<div className='px-2 py-2.5 lg:py-5 lg:px-10 flex-1 min-h-0 overflow-y-auto'>
									{steps[step].content}
								</div>
								<div className='mt-auto h-20 flex items-center justify-between px-10'>
									<Button type='button' onClick={() => subStep()} disabled={isFirst() || pending}
											variant='outline'>
										Previous
									</Button>
									{isLast() ? <Button type='submit' disabled={pending}>
											Submit
										</Button> :
										<Button disabled={pending || isLast()} type='button' onClick={() => addStep()}
												variant='outline'>
											Next
										</Button>}
								</div>
							</div>
						</div>
					</div>
				</form>
			</Form>
		</FormProvider>
	)
}
export default AddPropertyPage
