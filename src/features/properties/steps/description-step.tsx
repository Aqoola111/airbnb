import {FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form"
import {Input} from "@/components/ui/input"
import {BsCurrencyDollar} from "react-icons/bs"
import {useFormContext} from "react-hook-form"

const DescriptionStep = () => {
	const {control} = useFormContext()
	
	return (
		<div className="flex flex-col gap-3">
			
			<FormField
				control={control}
				name="title"
				render={({field}) => (
					<FormItem className="space-y-1.5">
						<FormLabel className="text-sm font-medium text-muted-foreground">Name your property</FormLabel>
						<FormControl>
							<Input
								placeholder="Villa del Sol"
								type="text"
								{...field}
								className="h-9 text-sm"
							/>
						</FormControl>
						<FormMessage/>
					</FormItem>
				)}
			/>
			<FormField
				control={control}
				name="description"
				render={({field}) => (
					<FormItem className="space-y-1.5">
						<FormLabel className="text-sm font-medium text-muted-foreground">Description</FormLabel>
						<FormControl>
							<Input
								placeholder="Beautiful apartment in the city center"
								type="text"
								{...field}
								className="h-9 text-sm"
							/>
						</FormControl>
						<FormMessage/>
					</FormItem>
				)}
			/>
			<FormField
				control={control}
				name="price"
				render={({field}) => (
					<FormItem className="space-y-1.5">
						<FormLabel className="text-sm font-medium text-muted-foreground">Price per night</FormLabel>
						<FormControl>
							<div className="relative">
								<BsCurrencyDollar
									className="absolute left-2 top-1/2 -translate-y-1/2 text-muted-foreground size-4"/>
								<Input
									placeholder="150"
									type="number"
									value={field.value}
									onChange={(e) => field.onChange(Number(e.target.value))}
									className="pl-7 h-9 text-sm"
								/>
							</div>
						</FormControl>
						<FormMessage/>
					</FormItem>
				)}
			/>
		</div>
	)
}

export default DescriptionStep
