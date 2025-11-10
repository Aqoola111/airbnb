'use client'
import {Logo} from "@/components/logo";
import {Button} from "@/components/ui/button";
import {FilterButton} from "@/features/navigation/components/filter-button";
import {Menu} from "@/features/navigation/components/menu";
import {useIsMobile} from "@/hooks/use-mobile";
import Link from "next/link";

const Navbar = () => {
	const isMobile = useIsMobile()
	return (
		<div className='h-16 border-b'>
			<div className='max-w-[1440px] mx-auto flex items-center h-full'>
				<div
					className='w-full flex items-center  lg:justify-between gap-6 h-full px-4 xl:pl-20 lg:px-14 md:px-8'>
					<Logo onlyIcon={isMobile}/>
					<FilterButton/>
					<div className='flex items-center gap-2'>
						<Button className='hidden md:inline-flex' variant='ghost' asChild>
							<Link href={'/properties/add'}>
								Airdnd your home
							</Link>
						</Button>
						<Menu/>
					</div>
				</div>
			</div>
		</div>
	)
}
export default Navbar
