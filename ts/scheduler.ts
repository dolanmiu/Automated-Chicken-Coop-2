import {CronJob} from "cron";
import * as PythonShell from "python-shell";

export class Scheduler {

    private openDoorJob: CronJob;
    private closeDoorJob: CronJob;

    constructor() {
        this.openDoorJob = new CronJob({
            cronTime: '* * * * * *',
            onTick: function () {
                console.log("Stuff");
                PythonShell.run("open-door.py", { scriptPath: '../py' }, (err: Error, result: any) => {
                    if (err) {
                        console.log("Script had an error: " + err);
                        return;
                    }
                });
            },
            onComplete: () => {

            }
        });

        this.closeDoorJob = new CronJob({
            cronTime: '00 30 11 * * 1-5',
            onTick: () => {

            },
            onComplete: () => {

            }
        });
    }

    public Start(): void {
        this.openDoorJob.start();
        this.closeDoorJob.start();
    }

    public Stop(): void {
        this.openDoorJob.stop();
        this.closeDoorJob.stop();
    }
}
