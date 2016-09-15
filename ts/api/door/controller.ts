import {RequestHandler, Request, Response} from "express";
import * as PythonShell from "python-shell";

export function index(req: Request, res: Response) {
    res.status(200).send("hello world yay");
};

export function open(req: Request, res: Response) {
    PythonShell.run("../py/open-door.py", (err: Error, result: any) => {
        if (err) {
            res.status(500).send("Script had an error: " + err);
            return;
        }

        res.status(200);
    });
};

export function close(req: Request, res: Response) {
    PythonShell.run("../py/close-door.py", (err: Error, result: any) => {
        if (err) {
            res.status(500).send("Script had an error: " + err);
            return;
        }

        res.status(200);
    });
};