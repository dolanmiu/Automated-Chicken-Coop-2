import * as PythonShell from "python-shell";
import { State, DoorState } from "./state";

export class Door {

    private state = new State();
    private onCooldown: boolean

    constructor() {
        this.state = new State();
        this.onCooldown = false;
    }

    public open() {
        return new Promise((resolve, reject) => {

            if (this.state.DoorState === DoorState.Open) {
                reject("Door already open");
            }

            if (this.onCooldown) {
                reject("Sending commands too fast. Please wait");
            }

            PythonShell.run("open-door.py", { scriptPath: __dirname + '/../py' }, (err: Error, result: any) => {
                if (err) {
                    reject("Script had an error: " + err);
                    return;
                }

                this.commenceCoolDown();

                this.state.OpenDoor();
                resolve();
            });
        });
    };

    public close() {
        return new Promise((resolve, reject) => {
            if (this.state.DoorState === DoorState.Close) {
                reject("Door already closed");
            }

            if (this.onCooldown) {
                reject("Sending commands too fast. Please wait");
            }

            PythonShell.run("./py/close-door.py", (err: Error, result: any) => {
                if (err) {
                    reject("Script had an error: " + err);
                    return;
                }

                this.commenceCoolDown();

                this.state.CloseDoor();
                resolve();
            });
        });
    };

    private commenceCoolDown(): void {
        this.onCooldown = true;
        setTimeout(() => {
            this.onCooldown = false;
        }, 10000);
    }

    get State(): State {
        return this.state;
    }
}