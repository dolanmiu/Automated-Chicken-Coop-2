"use strict";
const cron_1 = require("cron");
const PythonShell = require("python-shell");
class Scheduler {
    constructor() {
        this.openDoorJob = new cron_1.CronJob({
            cronTime: '* * * * * *',
            onTick: function () {
                console.log("Stuff");
                PythonShell.run("open-door.py", { scriptPath: '../../py' }, (err, result) => {
                    if (err) {
                        console.log("Script had an error: " + err);
                        return;
                    }
                });
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