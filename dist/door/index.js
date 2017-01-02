"use strict";
const PythonShell = require("python-shell");
const state_1 = require("./state");
class Door {
    constructor() {
        this.state = new state_1.State();
        this.state = new state_1.State();
        this.onCooldown = false;
    }
    open() {
        return new Promise((resolve, reject) => {
            if (this.state.DoorState === state_1.DoorState.Open) {
                reject("Door already open");
            }
            if (this.onCooldown) {
                reject("Sending commands too fast. Please wait");
            }
            PythonShell.run("open-door.py", { scriptPath: __dirname + '/../py' }, (err, result) => {
                if (err) {
                    reject("Script had an error: " + err);
                    return;
                }
                this.commenceCoolDown();
                this.state.OpenDoor();
                resolve();
            });
        });
    }
    ;
    close() {
        return new Promise((resolve, reject) => {
            if (this.state.DoorState === state_1.DoorState.Close) {
                reject("Door already closed");
            }
            if (this.onCooldown) {
                reject("Sending commands too fast. Please wait");
            }
            PythonShell.run("close-door.py", { scriptPath: __dirname + '/../py' }, (err, result) => {
                if (err) {
                    reject("Script had an error: " + err);
                    return;
                }
                this.commenceCoolDown();
                this.state.CloseDoor();
                resolve();
            });
        });
    }
    ;
    commenceCoolDown() {
        this.onCooldown = true;
        setTimeout(() => {
            this.onCooldown = false;
        }, 10000);
    }
    get State() {
        return this.state;
    }
}
exports.Door = Door;
