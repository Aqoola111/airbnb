import {Button} from "@/components/ui/button";
import {MinusIcon, PlusIcon} from "lucide-react";

interface CounterProps {
	value: number
	onIncrement: () => void
	onDecrement: () => void
}

export const Counter = ({value, onDecrement, onIncrement}: CounterProps) => {
	return (
		<div className='flex items-center gap-8'>
			<Button type={'button'} size='icon' className='rounded-full' variant='outline' onClick={onDecrement}>
				<MinusIcon/>
			</Button>
			<h1 className='text-xl'>
				{value}
			</h1>
			<Button type={'button'} size='icon' className='rounded-full' variant='outline' onClick={onIncrement}>
				<PlusIcon/>
			</Button>
		</div>
	)
};