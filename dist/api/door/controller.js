"use strict";
const _1 = require("../../");
function index(req, res) {
    res.status(200).send(_1.door.State.GetDoorBinary().toString());
}
exports.index = index;
;
function open(req, res) {
    _1.door.open().then(() => {
        res.status(200);
    }).catch(err => {
        res.status(500).send(err);
    });
}
exports.open = open;
;
function close(req, res) {
    _1.door.close().then(() => {
        res.status(200);
    }).catch(err => {
        res.status(500).send(err);
    });
}
exports.close = close;
;
