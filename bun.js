// Complete Bun Command to create Bun based Server

//Create Empty Bun Project
// bun init

// Add Postgres and prisma 

// Postgres Docker Commands - 
// - docker run --name my-postgres -e POSTGRES_PASSWORD=mysecretpassword -d -p 5432:5432 postgres
// - Connection String - postgres://postgres:mysecretpassword@localhost:5432/postgres / postgresql://postgres:mysecretpassword@localhost:5432/postgres?sslmode=disable

//Prisma Bun Commands -
// 1. bun add prisma@prev @types/pg --dev
// 2. bun add @prisma/client@7 @prisma/adapter-pg pg dotenv
// 3. bunx prisma init
// 4. Add the connection string to .env file
// 5. bunx prisma migrate dev --name migration_name
// 6. bunx prisma generate
// 7. Create db.ts file to create prisma client 
// 8. Add the below code in db.ts file - 

    // import "dotenv/config";
    // import { PrismaPg } from "@prisma/adapter-pg";
    // import { PrismaClient } from "./generated/prisma/client";

    // const connectionString = `${process.env.DATABASE_URL}`;

    // const adapter = new PrismaPg({ connectionString });
    // const prisma = new PrismaClient({ adapter });

    // export { prisma };

// 9. Import the prisma client from db to main or required ts file - import { prisma } from "./db";



// Add express, jwt, dotenv, zod
// 1. bun add express @types/express
// 2. bun add jose (JWT)
// 3. bun add dotenv
// 4. bun add zod 
// 5 Bycrpt is included in bun