"use strict";
var http = require("http");
var server_1 = require("./bootstrap/server");
var index_1 = require("./config/index");
var application_factory_1 = require("./bootstrap/application-factory");
var door_1 = require("./api/door");
var application = new application_factory_1.ApplicationFactory();
var config;
if (process.env.NODE_ENV === "development") {
    config = new index_1.DevelopmentConfig();
}
else {
    config = new index_1.ProductionConfig();
}
var app = application.newInstance(config, "development");
var httpServer = http.createServer(app);
app.use("/door", door_1.router);
var server = new server_1["default"](config, httpServer);
server.startServer();
//# sourceMappingURL=index.js.map