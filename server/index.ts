import express from "express";
import next from "next";
import routes from "./routes";
import compression from "compression";

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handler = routes.getRequestHandler(app);
const port = dev ? 3000 : 80;
app.prepare().then(() => {
    express()
        .use(compression())
        .use(handler)
        .listen(port);
});
