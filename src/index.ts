import { Elysia, t } from "elysia";
import { ContactForm, NewContactUsPost } from "./db/turso";
import staticPlugin from "@elysiajs/static";

const app = new Elysia()
    .use(staticPlugin({ prefix: "/", assets: "public" }))
    .post(
        "/contact",
        async ({ body }) => await NewContactUsPost(body as ContactForm),
        {
            body: t.Object({
                name: t.String(),
                email: t.String(),
                subject: t.String(),
                message: t.String(),
            }),
        }
    )
    .listen(3000);

console.log(`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`);
