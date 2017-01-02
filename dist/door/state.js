"use strict";
var DoorState;
(function (DoorState) {
    DoorState[DoorState["Open"] = 1] = "Open";
    DoorState[DoorState["Close"] = 0] = "Close";
})(DoorState = exports.DoorState || (exports.DoorState = {}));
class State {
    constructor() {
        this.doorState = DoorState.Close;
    }
    OpenDoor() {
        this.doorState = DoorState.Open;
    }
    CloseDoor() {
        this.doorState = DoorState.Close;
    }
    GetDoorBinary() {
        return this.doorState;
    }
    get DoorState() {
        return this.doorState;
    }
}
exports.State = State;
