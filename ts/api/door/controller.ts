import {RequestHandler, Request, Response} from "express";
import * as PythonShell from "python-shell";
import { State, DoorState } from "../../state";

var state = new State();
var onCooldown: boolean = false;

export function index(req: Request, res: Response) {
    res.status(200).send(state.GetDoorBinary().toString());
};

export function open(req: Request, res: Response) {
    if (state.DoorState === DoorState.Open) {
        res.status(500).send("Door already open");
    }

    if (onCooldown) {
        res.status(500).send("Sending commands too fast. Please wait");
    }

    PythonShell.run("open-door.py", { scriptPath: __dirname + '/../py' }, (err: Error, result: any) => {
        if (err) {
            res.status(500).send("Script had an error: " + err);
            return;
        }

        CommenceCoolDown();

        state.OpenDoor();
        res.status(200);
    });
};

export function close(req: Request, res: Response) {
    if (state.DoorState === DoorState.Close) {
        res.status(500).send("Door already closed");
    }

    if (onCooldown) {
        res.status(500).send("Sending commands too fast. Please wait");
    }

    PythonShell.run("close-door.py", { scriptPath: __dirname + '/../py' }, (err: Error, result: any) => {
        if (err) {
            res.status(500).send("Script had an error: " + err);
            return;
        }

        CommenceCoolDown();

        state.CloseDoor();
        res.status(200);
    });
};

function CommenceCoolDown(): void {
    onCooldown = true;
    setTimeout(() => {
        onCooldown = false;
    }, 10000);
}