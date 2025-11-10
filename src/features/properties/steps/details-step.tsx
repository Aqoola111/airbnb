import {Counter} from "@/features/properties/inputs/counter"
import {useFormContext} from "react-hook-form"

const DetailsStep = () => {
	const {setValue, getValues, watch} = useFormContext()
	const guests = watch("guestCount")
	const rooms = watch("roomCount")
	const bathrooms = watch("bathroomCount")
	
	const updateValue = (
		field: "guestCount" | "roomCount" | "bathroomCount",
		delta: 1 | -1
	) => {
		const currentValue = getValues(field)
		const newValue = Math.max(1, currentValue + delta)
		setValue(field, newValue)
	}
	
	const options = [
		{label: "Guests", field: "guestCount", value: guests},
		{label: "Rooms", field: "roomCount", value: rooms},
		{label: "Bathrooms", field: "bathroomCount", value: bathrooms},
	] as const
	
	return (
		<div className="flex flex-col gap-4 px-2 py-3 lg:px-4 lg:py-6">
			{options.map(({label, field, value}) => (
				<div
					key={field}
					className="flex items-center justify-between border-b pb-3 last:border-none"
				>
					<div>
						<h2 className="text-base font-medium">{label}</h2>
						<p className="text-sm text-muted-foreground">
							{label === "Guests"
								? "How many can stay"
								: label === "Rooms"
									? "Total available"
									: "Private or shared"}
						</p>
					</div>
					<Counter
						value={value}
						onIncrement={() => updateValue(field, 1)}
						onDecrement={() => updateValue(field, -1)}
					/>
				</div>
			))}
		</div>
	)
}

export default DetailsStep
