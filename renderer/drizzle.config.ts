import { defineConfig } from 'drizzle-kit'
import { env } from './env'

export default defineConfig({
  schema: './renderer/db/schema.ts',
  dialect: 'sqlite',
  out: './drizzle',
  dbCredentials: { url: env.DATABASE_URL },
  verbose: true,
  strict: true
})
