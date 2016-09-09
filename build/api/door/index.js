"use strict";
const express_1 = require("express");
const controller = require("./controller");
var router = express_1.Router();
exports.router = router;
router.get("/", controller.index);
router.get("/open", controller.open);
router.get("/close", controller.close);
//# sourceMappingURL=index.js.map