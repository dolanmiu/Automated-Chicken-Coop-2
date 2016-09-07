import {RequestHandler, Request, Response} from "express";
import {PythonShell} from "python-shell";

export function index(req: Request, res: Response) {
    res.status(200).send("hello world");
};

export function open(req: Request, res: Response) {
    PythonShell.run("open-door.py", (err: Error, result: any) => {
        if (err) {
            res.status(500);
            return;
        }

        

        res.status(200);
    });
};

export function close(req: Request, res: Response) {
    PythonShell.run("close-door.py", (err: Error, result: any) => {
        if (err) {
            res.status(500);
            return;
        }



        res.status(200);
    });
};