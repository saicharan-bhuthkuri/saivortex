import type { NextApiRequest, NextApiResponse } from "next";
import { createClient } from "@libsql/client";

const turso = createClient({
    url: process.env.TURSO_DATABASE_URL!,
    authToken: process.env.TURSO_AUTH_TOKEN,
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== "POST")
        return res.status(405).json({ error: "Method not allowed" });

    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message)
        return res.status(400).json({ error: "Missing fields" });

    await turso.execute({
        sql: "INSERT INTO contact_us (name, email, subject, message) VALUES (?, ?, ?, ?)",
        args: [name, email, subject, message],
    });

    return res.status(200).json({ success: true });
}
