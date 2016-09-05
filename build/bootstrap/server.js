"use strict";
var Server = (function () {
    function Server(config, server) {
        this.server = server;
        this.config = config;
    }
    Server.prototype.startServer = function () {
        var _this = this;
        this.server.listen(this.config.port, this.config.ip, function () {
            console.log("Express server listening on %d, in %s mode", _this.config.port, process.env.NODE_ENV);
        });
    };
    return Server;
}());
exports.__esModule = true;
exports["default"] = Server;
//# sourceMappingURL=server.js.map