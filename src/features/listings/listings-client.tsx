'use client'
import {ListingCard} from "@/features/listings/listing-card";
import {trpc} from "@/trpc/client";

const ListingsClient = () => {
	const listings = trpc.getListings.useQuery()
	
	return (
		<div className='flex flex-wrap gap-20'>
			{listings.data?.map((listing) => (
				<ListingCard listing={listing} key={listing.id}/>
			))}
		</div>
	)
}
export default ListingsClient
