"use strict";
const PythonShell = require("python-shell");
function index(req, res) {
    res.status(200).send("hello world yay");
}
exports.index = index;
;
function open(req, res) {
    PythonShell.run("open-door.py", (err, result) => {
        if (err) {
            res.status(500).send("Script had an error: " + err);
            return;
        }
        res.status(200);
    });
}
exports.open = open;
;
function close(req, res) {
    PythonShell.run("close-door.py", (err, result) => {
        if (err) {
            res.status(500).send("Script had an error: " + err);
            return;
        }
        res.status(200);
    });
}
exports.close = close;
;
//# sourceMappingURL=controller.js.map