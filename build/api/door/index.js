"use strict";
var express_1 = require("express");
var controller = require("./controller");
var router = express_1.Router();
exports.router = router;
router.get("/", controller.index);
//# sourceMappingURL=index.js.map