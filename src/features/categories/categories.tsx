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
// Используем иконки из одного набора (FontAwesome) для единообразия
import {
	FaUmbrellaBeach,
	FaWind,
	FaHome,
	FaSnowflake,
	FaMountain,
	FaTractor,
	FaSun,
	FaLeaf,
	FaTree,
	FaSnowboarding,
	FaCampground,
	FaShip,
	FaGem,
	FaUsers,
	FaSeedling,
	FaHeart,
	FaBicycle,
	FaMusic,
	FaBed,
	FaStar
} from 'react-icons/fa';

export const categories = [{
	title: 'Beach',
	icon: FaUmbrellaBeach,
	value: 'beach',
}, {
	title: 'WindMills',
	icon: FaWind,
	value: 'windmills',
}, {
	title: 'Modern',
	icon: FaHome,
	value: 'modern',
}, {
	title: 'Islands',
	icon: FaTree,
	value: 'islands',
}, {
	title: 'Arctic',
	icon: FaSnowflake,
	value: 'arctic',
}, {
	title: 'Mountain',
	icon: FaMountain,
	value: 'mountain',
}, {
	title: 'Countryside',
	icon: FaTractor,
	value: 'countryside',
}, {
	title: 'Desert',
	icon: FaSun,
	value: 'desert',
}, {
	title: 'Tropical',
	icon: FaLeaf,
	value: 'tropical',
}, {
	title: 'Ski',
	icon: FaSnowboarding,
	value: 'ski',
}, {
	title: 'Camping',
	icon: FaCampground,
	value: 'camping',
}, {
	title: 'Boat',
	icon: FaShip,
	value: 'boat',
}, {
	title: 'Luxury',
	icon: FaGem,
	value: 'luxury',
}, {
	title: 'Family',
	icon: FaUsers,
	value: 'family',
}, {
	title: 'Farm',
	icon: FaSeedling,
	value: 'farm',
},
	{
		title: 'Cozy',
		icon: FaBed,
		value: 'cozy',
	}, {
		title: 'Romantic',
		icon: FaHeart,
		value: 'romantic',
	}, {
		title: 'Entertainment',
		icon: FaMusic,
		value: 'entertainment',
	}, {
		title: 'Active',
		icon: FaBicycle,
		value: 'active',
	}
]

export const Categories = () => {
	const isMobile = useIsMobile()
	return (
		<div
			className='border-b border-border/40 h-16 px-4 sm:px-6 md:px-8 w-full lg:px-10 xl:px-12  flex items-center'>
			<Carousel draggable={!isMobile}
					  className='mx-auto max-w-[1440px] w-full'>
				<CarouselContent className=' '>
					{
						categories.map((category, index) => (
							<CarouselItem
								className='not-first:pl-1 basis-1/3 md:basis-1/4 lg:basis-1/6 xl:basis-1/8 '
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