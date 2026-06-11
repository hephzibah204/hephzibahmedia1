"use server";

import { getDB, Lead } from "@/lib/db";

export async function getLeads() {
  try {
    const db = getDB();
    const results = await db.prepare("SELECT * FROM leads ORDER BY submission_date DESC").all();
    return { leads: results.results as unknown as Lead[] };
  } catch (error) {
    console.error("Failed to fetch leads:", error);
    return { error: "Failed to fetch leads." };
  }
}

export async function markAsReplied(id: number) {
  try {
    const db = getDB();
    await db.prepare("UPDATE leads SET is_replied = 1, reply_date = CURRENT_TIMESTAMP WHERE id = ?")
      .bind(id)
      .run();
    return { success: true };
  } catch (error) {
    console.error("Failed to update lead:", error);
    return { error: "Failed to update lead." };
  }
}
