import {Button} from "@/components/ui/button";
import {SearchIcon} from "lucide-react";

interface FilterButtonProps {
	// define props here
}

export const FilterButton = ({}: FilterButtonProps) => {
	return (
		<>
			<Button variant='outline' className='pl-6 pr-4 rounded-xl hidden lg:inline-flex'>
			<span className='pr-4 border-r'>
				Anywhere
			</span>
				<span className='pl-2 pr-4 border-r'>
				Any week
			</span>
				<div className='pl-2 flex gap-2 items-center'>
					Add guests
					<SearchIcon/>
				</div>
			</Button>
			<Button variant='outline' className='pl-6 pr-4 rounded-xl flex-1 lg:hidden'>
				Search for perfect home
			</Button>
		</>
	)
};