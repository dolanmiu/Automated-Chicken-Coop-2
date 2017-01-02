"use strict";
var EnvironmentType;
(function (EnvironmentType) {
    EnvironmentType[EnvironmentType["Development"] = 0] = "Development";
    EnvironmentType[EnvironmentType["Production"] = 1] = "Production";
    EnvironmentType[EnvironmentType["Test"] = 2] = "Test";
})(EnvironmentType = exports.EnvironmentType || (exports.EnvironmentType = {}));
class DevelopmentConfig {
    constructor() {
        this.port = 9000;
        this.ip = "";
        this.root = "";
        this.environment = EnvironmentType.Development;
    }
}
exports.DevelopmentConfig = DevelopmentConfig;
class ProductionConfig {
    constructor() {
        this.port = 80;
        this.ip = "0.0.0.0";
        this.root = "";
        this.environment = EnvironmentType.Production;
    }
}
exports.ProductionConfig = ProductionConfig;
