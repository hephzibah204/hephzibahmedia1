import type { D1Database } from '@cloudflare/workers-types';

export interface Lead {
  id?: number;
  full_name: string;
  email: string;
  phone_number: string;
  business_name?: string;
  requested_service?: string;
  budget?: string;
  training_interest?: string;
  message?: string;
  device_type?: string;
  ip_address?: string;
  submission_date?: string;
  is_replied?: number;
  reply_date?: string;
  notes?: string;
}

export function getDB() {
  const db = (process.env as unknown as { DB: D1Database }).DB;
  if (!db) {
    throw new Error("DB binding not found. Make sure you're running on Cloudflare or with wrangler.");
  }
  return db;
}
