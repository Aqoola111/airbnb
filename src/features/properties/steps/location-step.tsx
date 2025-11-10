"use client"
import useCountries from "@/features/properties/hooks/useCountries";
import CountrySelect from "@/features/properties/inputs/country-select";
import dynamic from "next/dynamic";
import {useMemo} from "react";
import {useFormContext} from "react-hook-form";


const Map = dynamic(() => import('@/components/Map'), {
	ssr: false,
});
const LocationStep = () => {
	const {watch} = useFormContext()
	const locationValue = watch('locationValue')
	const {getByValue} = useCountries()
	const country = getByValue(locationValue)
	
	const Map = useMemo(() => dynamic(() => import('@/components/Map'), {
		ssr: false
	}), [locationValue])
	
	return (
		<div className='flex flex-col gap-4 py-4 md:gap-6 md:py-6 lg:py-8'>
			<CountrySelect/>
			<div className='h-1/2 w-full mt-5 md:mt-10'>
				<Map center={country?.latlng}/>
			</div>
			{/*change to normal map later*/}
		
		</div>
	)
}
export default LocationStep
