# Agent Guidelines for 04-nest-clean

## Commands
- Build: `npm run build`
- Lint: `npm run lint`
- Format: `npm run format`
- Dev server: `npm run start:dev` (runs on port 3333)
- No test command found in package.json

## Architecture
- **Framework**: NestJS with TypeScript
- **Database**: PostgreSQL with Prisma ORM
- **Main entry**: `src/main.ts`
- **Module structure**: `src/app.module.ts` with controllers and providers
- **Database service**: `src/prisma/prisma.service.ts`
- **Schema**: `prisma/schema.prisma` (User and Question models)

## Code Style
- Use TypeScript with strict typing
- Import style: `import { Module } from '@nestjs/common'`
- Controllers use decorators: `@Controller()`, `@Post()`, `@Get()`
- Services are `@Injectable()` and injected via constructor
- Prisma models use camelCase, DB tables use snake_case with `@@map()`
- Use async/await for database operations
- File naming: kebab-case with `.controller.ts`, `.service.ts` suffixes
