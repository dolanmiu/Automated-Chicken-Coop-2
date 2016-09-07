declare module "python-shell" {
    export class PythonShell {
        static run(scriptName: string, callback: (err: Error, results?: any) => void): void;

        static run(scriptName: string, RunOptions: RunOptions, callback: (err: Error, results?: any) => void): void;

        on(message: string, callback: (message: string) => void): void;
        end(callback: (message: string) => void): void;
        send(message: string): void;
        send(message: any): void;

        constructor(scriptName: string, options?: InstanceOptions);
        defaultOptions: RunOptions;
    }

    export interface RunOptions {
        mode?: string;
        formatter?: string;
        parser?: string;
        encoding?: string;
        pythonPath?: string;
        pythonOptions?: Array<string>;
        scriptPath?: string;
        args?: Array<string>;
    }

    export interface InstanceOptions {
        script?: string;
        command?: string;
        stdin?: any;
        stdout?: any;
        stderr?: any;
        childProcess?: string;
        terminated?: any;
        exitCode?: any;
        args?: Array<any>;
    }
}