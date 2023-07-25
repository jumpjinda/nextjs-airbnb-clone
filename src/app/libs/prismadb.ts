import { PrismaClient } from "@prisma/client";

declare global {
  var prisma : PrismaClient | undefined
}

const client = globalThis.prisma || new PrismaClient()

// To prevent conflict with hot reload do this
// Best practice of using prisma on Next.js
if (process.env.NODE_ENV !== 'production') globalThis.prisma = client

export default client