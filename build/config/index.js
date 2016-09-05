"use strict";
var DevelopmentConfig = (function () {
    function DevelopmentConfig() {
        this.port = 9000;
        this.ip = "";
        this.root = "";
    }
    return DevelopmentConfig;
}());
exports.DevelopmentConfig = DevelopmentConfig;
var ProductionConfig = (function () {
    function ProductionConfig() {
        this.port = 80;
        this.ip = "0.0.0.0";
        this.root = "";
    }
    return ProductionConfig;
}());
exports.ProductionConfig = ProductionConfig;
//# sourceMappingURL=index.js.map