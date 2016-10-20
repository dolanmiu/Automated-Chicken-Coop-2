import {CronJob} from "cron";
import {Door} from "./door";

export class Scheduler {

    private openDoorJob: CronJob;
    private closeDoorJob: CronJob;

    constructor(door: Door) {
        this.openDoorJob = new CronJob({
            cronTime: '0 0 8 * * *',
            onTick: () => {
                console.log("Opening Door");
                door.open();
            },
            onComplete: () => {

            }
        });

        this.closeDoorJob = new CronJob({
            cronTime: '00 30 11 * * 1-5',
            onTick: () => {
                console.log("Closing Door");
                door.close();
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
