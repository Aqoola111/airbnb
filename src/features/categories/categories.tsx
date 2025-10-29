'use client'
import {Button} from "@/components/ui/button";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel"
import {useIsMobile} from "@/hooks/use-mobile";
import {SunIcon} from "lucide-react";
import {LiaUmbrellaBeachSolid} from "react-icons/lia";
import {PiCactus, PiHouse, PiIsland, PiSeal, PiSnowflake, PiWindmill} from "react-icons/pi";

const categories = [{
	title: 'Beach',
	icon: PiSeal,
	value: 'beach',
}, {
	title: 'WindMills',
	icon: PiWindmill,
	value: 'WindMills',
}, {
	title: 'Modern',
	icon: PiHouse,
	value: 'Modern',
}, {
	title: 'Islands',
	icon: PiIsland,
	value: 'Islands',
}, {
	title: 'Arctic',
	icon: PiSnowflake,
	value: 'Arctic',
}, {
	title: 'Desert',
	icon: PiCactus,
	value: 'Desert',
}, {
	title: 'Beach',
	icon: PiSeal,
	value: 'beach',
}, {
	title: 'WindMills',
	icon: PiWindmill,
	value: 'WindMills',
}, {
	title: 'Modern',
	icon: PiHouse,
	value: 'Modern',
}, {
	title: 'Islands',
	icon: PiIsland,
	value: 'Islands',
}, {
	title: 'Arctic',
	icon: PiSnowflake,
	value: 'Arctic',
}, {
	title: 'Desert',
	icon: PiCactus,
	value: 'Desert',
}, {
	title: 'Beach',
	icon: PiSeal,
	value: 'beach',
}, {
	title: 'WindMills',
	icon: PiWindmill,
	value: 'WindMills',
}, {
	title: 'Modern',
	icon: PiHouse,
	value: 'Modern',
}, {
	title: 'Islands',
	icon: PiIsland,
	value: 'Islands',
}, {
	title: 'Arctic',
	icon: PiSnowflake,
	value: 'Arctic',
}, {
	title: 'Desert',
	icon: PiCactus,
	value: 'Desert',
}, {
	title: 'Beach',
	icon: PiSeal,
	value: 'beach',
}, {
	title: 'WindMills',
	icon: PiWindmill,
	value: 'WindMills',
}, {
	title: 'Modern',
	icon: PiHouse,
	value: 'Modern',
}, {
	title: 'Islands',
	icon: PiIsland,
	value: 'Islands',
}, {
	title: 'Arctic',
	icon: PiSnowflake,
	value: 'Arctic',
}, {
	title: 'Desert',
	icon: PiCactus,
	value: 'Desert',
},
]

export const Categories = () => {
	const isMobile = useIsMobile()
	return (
		<div className='border-b border-border/40 h-16 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12  flex items-center'>
			<Carousel draggable='false'
					  className='max-w-[1600px] px-0  mx-auto w-full flex items-center h-full'>
				<CarouselContent>
					{
						categories.map((category, index) => (
							<CarouselItem className='not-first:pl-1 basis-1/3 sm:basis-1/4 md:basis-1/6 lg:basis-1/12'
										  key={index}>
								<Button variant='ghost' key={index} onClick={() => {
								}}>
									<span>
									{category.title}
									</span>
									<category.icon/>
								</Button>
							</CarouselItem>
						))
					}
				</CarouselContent>
				
				<CarouselPrevious className='hidden xl:inline-flex'/>
				<CarouselNext className='hidden xl:inline-flex'/>
			
			</Carousel>
		</div>
	)
};