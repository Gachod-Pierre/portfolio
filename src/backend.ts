import PocketBase from 'pocketbase'
import type { TypedPocketBase } from './pocketbase-typegen'

export const pb = new PocketBase(import.meta.env.VITE_URL_POCKETBASE) as TypedPocketBase
