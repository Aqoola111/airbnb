'use client'
import {trpc} from "@/trpc/client";
import Image from "next/image";

export default function Home() {
	const sessions = trpc.getSessionInfo.useQuery()
	return (
		<div>
			<h1>
				Welcome airdnd to Next.js!
			</h1>
			{sessions && JSON.stringify(sessions.data, null, 2)}
		</div>
	);
}
