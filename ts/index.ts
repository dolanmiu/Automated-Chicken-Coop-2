import {IConfig, ProductionConfig, DevelopmentConfig} from "./config/index";
import {ApplicationWrapper} from "./bootstrap/application-wrapper";

import {router} from "./api/door";

var config: IConfig;

if (process.env.NODE_ENV === "development") {
    config = new DevelopmentConfig();
} else {
    config = new ProductionConfig();
}

var appWrapper = new ApplicationWrapper(config);

//appWrapper.App.use("/door", router);

appWrapper.configure(app => {
    app.use("/door", router);
});

appWrapper.start();