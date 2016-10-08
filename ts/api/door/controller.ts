import {RequestHandler, Request, Response} from "express";
import * as PythonShell from "python-shell";
import { State, DoorState } from "../../state";

var state = new State();

export function index(req: Request, res: Response) {
    res.status(200).send(state.GetDoorBinary().toString());
};

export function open(req: Request, res: Response) {
    if (state.DoorState === DoorState.Open) {
        res.status(500).send("Door already open");
    }

    PythonShell.run("open-door.py", { scriptPath: __dirname + '/../py' }, (err: Error, result: any) => {
        if (err) {
            res.status(500).send("Script had an error: " + err);
            return;
        }

        state.OpenDoor();
        res.status(200);
    });
};

export function close(req: Request, res: Response) {
    if (state.DoorState === DoorState.Close) {
        res.status(500).send("Door already closed");
    }

    PythonShell.run("close-door.py", { scriptPath: __dirname + '/../py' }, (err: Error, result: any) => {
        if (err) {
            res.status(500).send("Script had an error: " + err);
            return;
        }

        state.CloseDoor();
        res.status(200);
    });
};