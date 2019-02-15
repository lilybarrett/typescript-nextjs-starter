import routes from "next-routes";

const router = new routes()
    .add("index", "/");

const Link = router.Link;
const Router = router.Router;
export default router;

export {
    Link,
    Router,
};
