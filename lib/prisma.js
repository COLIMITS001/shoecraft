import { PrismaClient } from '@prisma/client';
import { PrismaNeon } from '@prisma/adapter-neon';
import { neonConfig } from '@neondatabase/serverless';
import ws from 'ws';

// Configure Neon helper
neonConfig.webSocketConstructor = ws;
neonConfig.poolQueryViaFetch = true

// Type definitions
// declare global {
//   var prisma: PrismaClient | undefined
// }

// Prefer direct DB URL when developing locally to avoid pooler fetch timeouts
if (process.env.NODE_ENV === 'development' && process.env.DIRECT_URL) {
	process.env.DATABASE_URL = process.env.DIRECT_URL;
}

const connectionString = process.env.DATABASE_URL || process.env.DIRECT_URL;
const adapter = new PrismaNeon({ connectionString });

// Use adapter for edge runtimes or when explicitly requested via NEXT_RUNTIME
const useAdapter = process.env.NEXT_RUNTIME === 'edge' || process.env.USE_NEON_ADAPTER === 'true';

const prisma = global.prisma || new PrismaClient(useAdapter ? { adapter } : {});

if (!global.prisma) global.prisma = prisma;

export default prisma;

// In development, attempt a one-time connect to give clearer startup logs
if (process.env.NODE_ENV === 'development') {
	(async () => {
		try {
			await prisma.$connect();
			console.log('[prisma] connected to database');
		} catch (err) {
			const displayed = (connectionString || '').replace(/:[^:@\/]+@/, ':***@');
			console.error('[prisma] failed to connect to', displayed);
			console.error(err && err.message ? err.message : err);
		}
	})();
}