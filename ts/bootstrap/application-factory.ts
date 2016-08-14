import * as express from "express";
import * as morgan from "morgan";
import * as compression from "compression";
import * as bodyParser from "body-parser";
import * as errorHandler from "errorhandler";
import * as path from "path";
import {IConfig} from "../config/environment";

export class ApplicationFactory {
    newInstance(config: IConfig, env: string): express.Application {
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
            app.use(errorHandler()); // Error handler - has to be last
        }

        return app;
    }
}