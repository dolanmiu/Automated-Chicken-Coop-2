import * as http from "http";
import * as socket from "socket.io";
import {Express} from "express";
import Server from "./bootstrap/server";
import {IConfig, ProductionConfig, DevelopmentConfig} from "./config/environment";
import {ApplicationFactory} from "./bootstrap/application-factory";
import ConfigFactory from "./bootstrap/config";

import * as door from "./api/door";

var application = new ApplicationFactory();
var configFactory = new ConfigFactory();

var config = configFactory.newInstance(process.env.NODE_ENV);
var app = application.newInstance(config, "development");
var httpServer = http.createServer(app);

app.use("/thing", door);

var server = new Server(config, httpServer);
server.startServer();