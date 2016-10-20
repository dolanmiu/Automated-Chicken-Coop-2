import {IConfig, ProductionConfig, DevelopmentConfig} from "./config/index";
import {ApplicationWrapper} from "./bootstrap/application-wrapper";

import {router} from "./api/door";

import {Scheduler} from "./scheduler";
import {Door} from "./door";

var config: IConfig;

if (process.env.NODE_ENV === "development") {
    config = new DevelopmentConfig();
} else {
    config = new ProductionConfig();
}

var appWrapper = new ApplicationWrapper(config);
var door = new Door();

appWrapper.Configure(app => {
    app.use("/door", router);
});

var scheduler = new Scheduler(door);

scheduler.Start();
appWrapper.Start();

export { door };