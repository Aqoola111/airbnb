'use client'
import {Separator} from "@/components/ui/separator";
import useCountries from "@/features/properties/hooks/useCountries";
import {RouterOutput} from "@/lib/utils";
import {Heart} from "lucide-react";
import Image from "next/image";
import {BsCurrencyDollar} from "react-icons/bs";

interface ListingCardProps {
	listing: RouterOutput['getListings'][number]
}

export const ListingCard = ({listing}: ListingCardProps) => {
	const {getByValue} = useCountries()
	const country = getByValue(listing.locationValue)
	return (
		<div className='flex flex-col gap-1'>
			<div className='relative'>
				<Image className='rounded-lg' src={listing.imageSrc} alt={listing.title + 'Image'} width={256}
					   height={256}/>
				<Heart className='absolute top-2 right-2 size-5 hover:scale-105 cursor-pointer'/>
			</div>
			<h1 className='font-semibold'>
				{
					country?.label
				},
				<span className='ml-2 font-normal text-sm'>
					{country?.region}
				</span>
			</h1>
			<Separator/>
			<div className='flex gap-2 items-center'>
				<h1 className='capitalize font-semibold text-sm'>
					{listing.category}
				</h1>
				<Separator orientation='vertical'/>
				<div className='flex items-center'>
					<BsCurrencyDollar className='size-4 text-muted-foreground'/>
					<h1 className='text-muted-foreground font-medium'>
						{listing.price}
					</h1>
					<h1 className='ml-2 font-normal text-sm'>
						Night
					</h1>
				</div>
			</div>
		
		</div>
	)
};