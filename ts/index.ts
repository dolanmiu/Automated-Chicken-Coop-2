import {IConfig, ProductionConfig, DevelopmentConfig} from "./config/index";
import {ApplicationWrapper} from "./bootstrap/application-wrapper";

import {router} from "./api/door";

import {Scheduler} from "./scheduler";

var config: IConfig;

if (process.env.NODE_ENV === "development") {
    config = new DevelopmentConfig();
} else {
    config = new ProductionConfig();
}

var appWrapper = new ApplicationWrapper(config);

appWrapper.Configure(app => {
    app.use("/door", router);
});

var scheduler = new Scheduler();

scheduler.Start();
appWrapper.Start();