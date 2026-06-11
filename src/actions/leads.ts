"use server";

import { getDB } from "@/lib/db";
import { revalidatePath } from "next/cache";

export async function submitLead(formData: FormData) {
  try {
    const full_name = formData.get("full_name") as string;
    const email = formData.get("email") as string;
    const phone_number = formData.get("phone_number") as string;
    const business_name = formData.get("business_name") as string;
    const requested_service = formData.get("requested_service") as string;
    const budget = formData.get("budget") as string;
    const message = formData.get("message") as string;

    if (!full_name || !email || !phone_number) {
      return { error: "Name, Email, and Phone are required." };
    }

    const db = getDB();
    
    await db.prepare(`
      INSERT INTO leads (
        full_name, email, phone_number, business_name, requested_service, budget, message
      ) VALUES (?, ?, ?, ?, ?, ?, ?)
    `).bind(full_name, email, phone_number, business_name, requested_service, budget, message).run();

    // TODO: Send email notification to admin
    // Example: await sendEmail({ to: "admin@hephzibahmedia.com.ng", subject: "New Lead", body: ... });

    console.log(`New lead submitted: ${full_name} (${email}) for ${requested_service}`);

    revalidatePath("/admin/leads");
    return { success: true };
  } catch (error) {
    console.error("Failed to submit lead:", error);
    return { error: "An unexpected error occurred. Please try again." };
  }
}
