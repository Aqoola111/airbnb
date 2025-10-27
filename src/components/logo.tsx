'use client'
import {useIsMobile} from "@/hooks/use-mobile";
import Image from "next/image";

interface logoProps {
	onlyIcon?: boolean;
}

export const Logo = ({onlyIcon = false}: logoProps) => {
	
	return (
		<div className='flex items-center gap-2'>
			<Image src={'/logo.svg'} alt={'logo'} height={30} width={30}/>
			{!onlyIcon &&
                <span className='font-semibold text-2xl'>
				Airdnd
			</span>
			}
		</div>
	)
};