"use strict";
const index_1 = require("./config/index");
const application_wrapper_1 = require("./bootstrap/application-wrapper");
const door_1 = require("./api/door");
const scheduler_1 = require("./scheduler");
const door_2 = require("./door");
var config;
if (process.env.NODE_ENV === "development") {
    config = new index_1.DevelopmentConfig();
}
else {
    config = new index_1.ProductionConfig();
}
var appWrapper = new application_wrapper_1.ApplicationWrapper(config);
var door = new door_2.Door();
exports.door = door;
appWrapper.Configure(app => {
    app.use("/door", door_1.router);
});
var scheduler = new scheduler_1.Scheduler(door);
scheduler.Start();
appWrapper.Start();
