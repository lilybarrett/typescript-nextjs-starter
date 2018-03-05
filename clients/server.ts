import * as express from "express";
import * as next from "next";
import router from "./routes";

const app = next({ dev: process.env.NODE_ENV !== "production" });
const server = express();
const handle = router.getRequestHandler(app);

app.prepare().then(() => {
    server.get("*", (req, res) => handle(req, res));
    server.listen(8080);
});
