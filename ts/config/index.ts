export interface IConfig {
    port: number;
    ip: string;
    root: string;
}

export class DevelopmentConfig implements IConfig {
    port = 9000;
    ip = "";
    root = "";
}

export class ProductionConfig implements IConfig {
    port = 80;
    ip = "0.0.0.0";
    root = "";
}