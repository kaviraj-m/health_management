# Navigate to backend directory
cd backend

# Generate Prisma client from schema
npx prisma generate

# Create database and apply migrations
npx prisma migrate dev --name init

# Seed the database with sample data
npm run db:seed
