import {Router} from "express";
import * as controller from "./controller";

var router = Router();

router.get("/", controller.index);
router.get("/open", controller.open);
router.get("/close", controller.close);

export { router };