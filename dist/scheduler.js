"use strict";
const cron_1 = require("cron");
class Scheduler {
    constructor(door) {
        this.openDoorJob = new cron_1.CronJob({
            cronTime: '0 0 8 * * *',
            onTick: () => {
                console.log("Opening Door");
                door.open();
            },
            onComplete: () => {
            }
        });
        this.closeDoorJob = new cron_1.CronJob({
            cronTime: '00 30 11 * * 1-5',
            onTick: () => {
                console.log("Closing Door");
                door.close();
            },
            onComplete: () => {
            }
        });
    }
    Start() {
        this.openDoorJob.start();
        this.closeDoorJob.start();
    }
    Stop() {
        this.openDoorJob.stop();
        this.closeDoorJob.stop();
    }
}
exports.Scheduler = Scheduler;
