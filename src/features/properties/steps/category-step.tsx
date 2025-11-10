import {categories} from "@/features/categories/categories"
import {cn} from "@/lib/utils"
import {useFormContext} from "react-hook-form"

const FIELD_NAME = "category"

const CategoryStep = () => {
	const {setValue, watch} = useFormContext()
	const category = watch(FIELD_NAME)
	
	return (
		<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 px-2 md:px-6">
			{categories.map((item) => {
				const selected = category === item.value
				
				return (
					<button
						type="button"
						key={item.value}
						onClick={() => setValue(FIELD_NAME, item.value)}
						className={cn(
							"flex flex-col  items-center justify-center gap-2 rounded-xl border border-black text-center transition-all duration-150 h-28 md:h-32",
							selected
								? "border-primary bg-primary/10 shadow-sm"
								: "border-muted hover:border-primary/60 hover:bg-muted/10"
						)}
					>
						<item.icon
							className={cn(
								"size-6 transition-colors",
								selected
									? "text-primary"
									: "text-muted-foreground group-hover:text-primary"
							)}
						/>
						<span
							className={cn(
								"text-sm font-medium transition-colors",
								selected ? "text-primary" : "text-foreground"
							)}
						>
              {item.title}
            </span>
					</button>
				)
			})}
		</div>
	)
}

export default CategoryStep
