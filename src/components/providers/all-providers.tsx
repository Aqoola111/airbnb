import {TRPCProvider} from "@/trpc/client";

interface AllProvidersProps {
	children?: React.ReactNode;
}

export const AllProviders = ({children}: AllProvidersProps) => {
	return (
		<TRPCProvider>
			{children}
		</TRPCProvider>
	)
};