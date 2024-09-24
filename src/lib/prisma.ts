import { PrismaClient } from "@prisma/client";

// Declare a global variable to hold the Prisma instance
declare global {
  var prisma: PrismaClient | undefined;
}

// Create a new Prisma instance or use the existing one
export const prisma =
  global.prisma ||
  new PrismaClient({
    log:
      process.env.NODE_ENV === "development"
        ? ["query", "error", "warn"]
        : ["error"],
  });

// In development, attach the Prisma instance to the global object to prevent multiple instances
if (process.env.NODE_ENV !== "production") {
  global.prisma = prisma;
}

export default prisma;
