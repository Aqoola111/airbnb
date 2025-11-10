'use client'

import {Logo} from "@/components/logo";
import {Carousel} from "@/components/ui/carousel";
import {SignInCard} from "@/features/auth/sign-in-card";
import {SignUpCard} from "@/features/auth/sign-up-card";
import {useState} from "react";

export type authFlowType = 'sign-in' | 'sign-up'

const Page = () => {
	const [authFlow, setAuthFlow] = useState<authFlowType>('sign-in')
	return (
		<div
			className='min-h-screen bg-gradient-to-bl from-rose-500 to-rose-300 via-rose-400 min-w-screen flex items-center justify-center flex-col gap-2'>
			<Logo/>
			{authFlow === 'sign-in' ? <div>
				<SignInCard changeFlow={() => setAuthFlow('sign-up')}/>
			</div> : <div>
				<SignUpCard changeFlow={() => setAuthFlow('sign-in')}/>
			</div>
			}
		</div>
	)
}
export default Page
