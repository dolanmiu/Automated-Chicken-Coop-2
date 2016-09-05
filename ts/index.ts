import * as http from "http";
import {Express} from "express";
import Server from "./bootstrap/server";
import {IConfig, ProductionConfig, DevelopmentConfig} from "./config/index";
import {ApplicationFactory} from "./bootstrap/application-factory";

import {router} from "./api/door";

var application = new ApplicationFactory();
var config: IConfig;

if (process.env.NODE_ENV === "development") {
    config = new DevelopmentConfig();
} else {
    config = new ProductionConfig();
}

var app = application.newInstance(config, "development");
var httpServer = http.createServer(app);

app.use("/door", router);

var server = new Server(config, httpServer);
server.startServer();