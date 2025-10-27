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
	})
});
// export type definition of API
export type AppRouter = typeof appRouter;