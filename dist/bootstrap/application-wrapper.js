"use strict";
const http = require("http");
const express = require("express");
const morgan = require("morgan");
const compression = require("compression");
const bodyParser = require("body-parser");
const path = require("path");
const config_1 = require("../config");
class ApplicationWrapper {
    constructor(config) {
        this.config = config;
        this.app = express();
        this.app.set("views", config.root + "/server/views");
        this.app.set("view engine", "html");
        this.app.use(compression());
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use(bodyParser.json());
        this.app.set("appPath", path.join(config.root, "client"));
        this.app.use(morgan("dev"));
        this.app.use(express.static(this.app.get("appPath")));
        if (config.environment === config_1.EnvironmentType.Development || config.environment === config_1.EnvironmentType.Test) {
            this.app.use(express.static(path.join(config.root, ".tmp")));
            this.app.use((err, req, res, next) => {
            });
        }
        this.server = http.createServer(this.app);
    }
    Start() {
        this.server.listen(this.config.port, this.config.ip, () => {
            console.log("Express server listening on %d, in %s mode", this.config.port, process.env.NODE_ENV);
        });
    }
    Configure(func) {
        func(this.app);
    }
    get App() {
        return this.app;
    }
}
exports.ApplicationWrapper = ApplicationWrapper;
