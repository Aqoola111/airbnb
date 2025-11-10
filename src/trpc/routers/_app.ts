import prisma from "@/lib/db";
import {z} from 'zod';
import {baseProcedure, createTRPCRouter, protectedProcedure} from '../init';

export const appRouter = createTRPCRouter({
	getSessionInfo: protectedProcedure.query((opts) => {
		return prisma.session.findMany({
			where: {
				userId: opts.ctx.auth.user.id
			}
		})
	}),
	createListing: protectedProcedure
		.input(z.object({
			title: z.string().min(4).max(100),
			description: z.string().min(10).max(1000),
			imageSrc: z.string(),
			category: z.string(),
			roomCount: z.number().int().min(1),
			bathroomCount: z.number().int().min(1),
			guestCount: z.number().int().min(1),
			locationValue: z.string(),
			price: z.number().int().min(1),
		}))
		.mutation(async ({input, ctx}) => {
			const userId = ctx.auth.user.id;
			const created = await prisma.listing.create({
				data: {
					title: input.title,
					description: input.description,
					imageSrc: input.imageSrc,
					category: input.category,
					roomCount: input.roomCount,
					bathroomCount: input.bathroomCount,
					guestCount: input.guestCount,
					locationValue: input.locationValue,
					price: input.price,
					userId,
				}
			});
			return created;
		}),
	getListings: baseProcedure.query(async () => {
		return prisma.listing.findMany();
	})
});
// export type definition of API
export type AppRouter = typeof appRouter;