"use strict";
const index_1 = require("./config/index");
const application_wrapper_1 = require("./bootstrap/application-wrapper");
const door_1 = require("./api/door");
var config;
if (process.env.NODE_ENV === "development") {
    config = new index_1.DevelopmentConfig();
}
else {
    config = new index_1.ProductionConfig();
}
var appWrapper = new application_wrapper_1.ApplicationWrapper(config);
appWrapper.configure(app => {
    app.use("/door", door_1.router);
});
appWrapper.start();
//# sourceMappingURL=index.js.map