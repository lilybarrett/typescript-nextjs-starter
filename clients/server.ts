import * as next from "next";
import * as Express from "express";
import "reflect-metadata";
import routes from "./routes";

const app = next({dev: process.env.NODE_ENV !== "production"});
const handler = routes.getRequestHandler(app);

const express = Express();
app.prepare().then( () => {
    express.use(handler).listen(8080);
});
