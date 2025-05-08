export const prerender = false;

import type { APIRoute } from "astro";

const DISCORD_WEBHOOK_URL = import.meta.env.DISCORD_WEBHOOK_URL;

export const POST: APIRoute = async ({ request }) => {
    try {
        const { name, email, message } = await request.json();

        if (!name || !email || !message) {
            return new Response(JSON.stringify({ error: "Missing fields." }), { status: 400 });
        }

        const payload = {
            content: `**Name:** ${name}\n**Email:** ${email}\n**Message:** ${message}`,
        };

        const res = await fetch(DISCORD_WEBHOOK_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
        });

        if (!res.ok) {
            return new Response(JSON.stringify({ error: "Failed to send message." }), { status: 500 });
        }

        return new Response(JSON.stringify({ success: true }), { status: 200 });
    } catch (err) {
        return new Response(JSON.stringify({ error: "Invalid request." }), { status: 400 });
    }
};