import {RequestHandler, Request, Response} from "express";
import * as PythonShell from "python-shell";
import * as appRoot from 'app-root-path';
import {door} from "../../";



export function index(req: Request, res: Response) {
    res.status(200).send(door.State.GetDoorBinary().toString());
};

export function open(req: Request, res: Response) {
    door.open().then(() => {
        res.status(200);

    }).catch(err => {
        res.status(500).send(err);
    });
};

export function close(req: Request, res: Response) {
    door.close().then(() => {
        res.status(200);

    }).catch(err => {
        res.status(500).send(err);
    });
};