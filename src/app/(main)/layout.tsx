import {Categories} from "@/features/categories/categories";
import Navbar from "@/features/navigation/components/navbar";

interface layoutProps {
	children?: React.ReactNode
}

const Layout = ({children}: layoutProps) => {
	return (
		<div className='flex min-h-screen  w-full flex-col'>
			<Navbar/>
			<Categories/>
			<main className='flex-1'>
				{children}
			</main>
		</div>
	)
}
export default Layout
