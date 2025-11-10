'use client'

import {FormField, FormMessage} from "@/components/ui/form";
import useCountries from "@/features/properties/hooks/useCountries";
import Image from "next/image";
import {useEffect, useState} from "react";
import {Controller, useFormContext} from "react-hook-form";

import {
	cn
} from "@/lib/utils"
import {
	Button
} from "@/components/ui/button"
import {
	Form,
	FormControl,
	FormDescription,
	FormItem,
	FormLabel,
} from "@/components/ui/form"

import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList
} from "@/components/ui/command"
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover"
import {
	Check,
	ChevronsUpDown
} from "lucide-react"

export type CountrySelectValue = {
	flag: string,
	label: string,
	value: string,
	region: string,
	latlng: number[]
}


const CountrySelect = () => {
	const [selectedCountryName, setSelectedCountryName] = useState<string | null>(null)
	const [open, setOpen] = useState(false)
	const {getAll} = useCountries()
	const countries = getAll()
	const {watch, register, control, setValue} = useFormContext()
	const locationValue = watch('locationValue')
	const {onChange} = register('locationValue')
	
	useEffect(() => {
		const countryName = countries.find((country) => country.value === locationValue)?.label || null
		setSelectedCountryName(countryName)
		setOpen(false)
	}, [locationValue])
	
	
	return (
		<FormField control={control} name={'locationValue'} render={({field}) => (
			<FormItem className="flex flex-col">
				<FormLabel>Language</FormLabel>
				<Popover onOpenChange={setOpen} open={open}>
					<PopoverTrigger asChild>
						<FormControl>
							<Button
								variant="outline"
								role="combobox"
								className={cn(
									"w-full md:w-[300px] justify-between",
									!field.value && "text-muted-foreground"
								)}
							
							>
								{field.value
									? countries.find(
										(country) => country.value === field.value
									)?.label
									: "Select country"}
								<ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50"/>
							</Button>
						</FormControl>
					</PopoverTrigger>
					<PopoverContent className=" w-full md:w-[300px] p-0">
						<Command>
							<CommandInput placeholder="Search language..."/>
							<CommandList>
								<CommandEmpty>No country found.</CommandEmpty>
								<CommandGroup>
									{countries.map((country) => (
										<CommandItem
											value={country.label}
											key={country.value}
											onSelect={() => {
												setValue("locationValue", country.value);
											}}
										>
											<Check
												className={cn(
													"mr-2 h-4 w-4",
													country.value === field.value
														? "opacity-100"
														: "opacity-0"
												)}
											/>
											{country.label},
											<span className='mr-1'>
											{country.region}
											</span>
										</CommandItem>
									))}
								</CommandGroup>
							</CommandList>
						</Command>
					</PopoverContent>
				</Popover>
				<FormMessage/>
			</FormItem>
		)}/>
	)
}
export default CountrySelect
