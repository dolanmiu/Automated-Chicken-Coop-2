"use strict";
const cron_1 = require("cron");
class Scheduler {
    constructor() {
        this.openDoorJob = new cron_1.CronJob({
            cronTime: '* * * * * *',
            onTick: function () {
                console.log("Stuff");
            },
            onComplete: () => {
            }
        });
        this.closeDoorJob = new cron_1.CronJob({
            cronTime: '00 30 11 * * 1-5',
            onTick: () => {
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
//# sourceMappingURL=scheduler.js.map