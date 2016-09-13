import * as http from "http";
import * as express from "express";
import * as morgan from "morgan";
import * as compression from "compression";
import * as bodyParser from "body-parser";
import * as path from "path";
import {IConfig, EnvironmentType} from "../config";

export class ApplicationWrapper {
    private app: express.Application;
    private server: http.Server;
    private config: IConfig;

    constructor(config: IConfig) {
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

        if (config.environment === EnvironmentType.Development || config.environment === EnvironmentType.Test) {
            this.app.use(express.static(path.join(config.root, ".tmp")));
            this.app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {

            });
        }

        this.server = http.createServer(<any>this.app);
    }

    public Start(): void {
        this.server.listen(this.config.port, this.config.ip, () => {
            console.log("Express server listening on %d, in %s mode", this.config.port, process.env.NODE_ENV);
        });
    }

    public Configure(func: (app: express.Application) => void) {
        func(this.app);
    }

    get App(): express.Application {
        return this.app;
    }
}