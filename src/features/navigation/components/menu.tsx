'use client'
import {Avatar} from "@/components/ui/avatar";
import {Button} from "@/components/ui/button"
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuPortal,
	DropdownMenuSeparator,
	DropdownMenuShortcut,
	DropdownMenuSub,
	DropdownMenuSubContent,
	DropdownMenuSubTrigger,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {useIsMobile} from "@/hooks/use-mobile";
import {auth} from "@/lib/auth";
import {authClient} from "@/lib/auth-client";
import {LogOutIcon, MenuIcon, MoreHorizontalIcon, UserIcon} from "lucide-react";
import Link from "next/link";
import {useRouter} from "next/navigation";
import {toast} from "sonner";

import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetDescription,
	SheetFooter,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet"

const menuItems = [
	{
		url: '/trips',
		label: "My trips",
	},
	{
		url: '/favorites',
		label: "My Favorites",
	},
	{
		url: '/reservations',
		label: "My reservations",
	},
	{
		url: '/properties',
		label: "My properties",
	},
	{
		url: '/properties/add',
		label: "Airdnd your home",
	},
]

export const Menu = () => {
	const router = useRouter()
	const isMobile = useIsMobile()
	
	const {
		data: session,
		isPending, //loading state
	} = authClient.useSession()
	
	const handleSignOut = () => {
		authClient.signOut({}, {
			onSuccess: () => {
				router.push("/")
			},
			onError: () => {
				toast.error("Error signing out")
			}
		})
	}
	
	if (session === null) {
		return (
			<Button variant='outline' asChild>
				<Link href={'/auth'}>
					Login
				</Link>
			</Button>
		)
	}
	
	const user = session.user
	
	if (isMobile) {
		return (
			<Sheet>
				<SheetTrigger asChild>
					<Button variant='outline'>
						<MenuIcon/>
					</Button>
				</SheetTrigger>
				<SheetContent>
					<SheetHeader>
						<SheetTitle className='flex items-center gap-2'>
							<Button size='icon' variant='outline'>
								{
									user.image ? <Avatar/> : <UserIcon/>
								}
							</Button>
							<span>
								{user.name}
							</span>
						</SheetTitle>
					</SheetHeader>
					<div className='flex flex-col gap-2'>
						{
							menuItems.map((menuItem) => {
								return (
									<Button key={menuItem.url} variant='ghost' className='justify-start' asChild>
										<Link href={menuItem.url}>
											{
												menuItem.label
											}
										</Link>
									</Button>
								)
							})
						}
					</div>
					<SheetFooter>
						<Button onClick={handleSignOut} variant='ghost' className='w-full justify-start'>
							Logout
							<LogOutIcon/>
						</Button>
					</SheetFooter>
				</SheetContent>
			
			</Sheet>
		)
	}
	
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant='outline'>
					<div className='pr-2 border-r'>
						<MenuIcon/>
					</div>
					{
						user.image ? <Avatar/> : <UserIcon/>
					}
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent>
				<DropdownMenuGroup>
					{
						menuItems.map((item) => {
							return (
								<DropdownMenuItem asChild key={item.label}>
									<Link href={item.url}>
										{item.label}
									</Link>
								</DropdownMenuItem>
							)
						})
					}
				</DropdownMenuGroup>
				<DropdownMenuSeparator/>
				<DropdownMenuItem className='justify-between' asChild>
					<Button onClick={handleSignOut} variant='ghost' className='w-full'>
						Logout
						<LogOutIcon/>
					</Button>
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	)
};