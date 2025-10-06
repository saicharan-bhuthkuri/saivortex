import { createClient } from "@libsql/client";

export interface ContactForm {
    name: string;
    email: string;
    subject: string;
    message: string;
}

const turso = createClient({
    url: process.env.TURSO_DATABASE_URL!,
    authToken: process.env.TURSO_AUTH_TOKEN,
});

export async function NewContactUsPost({
    name,
    email,
    subject,
    message,
}: ContactForm): Promise<{ success: boolean }> {
    await turso.execute({
        sql: "INSERT INTO contact_us (name, email, subject, message) VALUES (?, ?, ?, ?)",
        args: [name, email, subject, message],
    });
    return { success: true };
}

