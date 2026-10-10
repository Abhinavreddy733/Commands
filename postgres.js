
// create all commands for postgres in ts and use docker to create postgres db


// Docker commands to create Postgres Table
// - docker run --name my-postgres -e POSTGRES_PASSWORD=mysecretpassword -d -p 5432:5432 postgres
// Connection String - postgres://postgres:mysecretpassword@localhost:5432/postgres / postgresql://postgres:mysecretpassword@localhost:5432/postgres?sslmode=disable

// TS Commands - First create a TS project and then run these commands
// 1. npm install prisma
// 2. npx prisma init
// 3. Add script in package.json - "prisma": "prisma generate && prisma migrate dev". command to run this is `npm run prisma`
// 3.1 Prisma Migrate seperate command - npx prisma migrate dev
// 3.2 Prisma Generate seperate command - npx prisma generate
// 4. Add script in package.json - "prisma:studio": "prisma studio". command to run this is `npm run prisma:studio`
