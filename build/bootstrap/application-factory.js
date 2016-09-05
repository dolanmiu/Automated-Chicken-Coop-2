"use strict";
var express = require("express");
var morgan = require("morgan");
var compression = require("compression");
var bodyParser = require("body-parser");
var path = require("path");
var ApplicationFactory = (function () {
    function ApplicationFactory() {
    }
    ApplicationFactory.prototype.newInstance = function (config, env) {
        var app = express();
        app.set("views", config.root + "/server/views");
        app.set("view engine", "html");
        app.use(compression());
        app.use(bodyParser.urlencoded({ extended: false }));
        app.use(bodyParser.json());
        app.set("appPath", path.join(config.root, "client"));
        app.use(morgan("dev"));
        app.use(express.static(app.get("appPath")));
        if ("development" === env || "test" === env) {
            app.use(express.static(path.join(config.root, ".tmp")));
            app.use(function (err, req, res, next) {
            });
        }
        return app;
    };
    return ApplicationFactory;
}());
exports.ApplicationFactory = ApplicationFactory;
//# sourceMappingURL=application-factory.js.map