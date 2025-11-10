import ListingsClient from "@/features/listings/listings-client";
import Listings from "@/features/listings/listings-client";
import {getQueryClient, HydrateClient, trpc} from "@/trpc/server";
import {HydrationBoundary} from "@tanstack/react-query";

const Page = async () => {
	const queryClient = getQueryClient();
	const listings = trpc.getListings.prefetch()
	return (
		<HydrateClient>
			<div className='max-w-[1440px] mx-auto w-full mt-4 md:mt-8 lg:mt-16'>
				<ListingsClient/>
			</div>
		</HydrateClient>
	)
}
export default Page
