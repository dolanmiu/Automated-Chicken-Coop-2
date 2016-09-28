export enum EnvironmentType {
    Development, Production, Test
}

export interface IConfig {
    port: number;
    ip: string;
    root: string;
    environment: EnvironmentType
}

export class DevelopmentConfig implements IConfig {
    port = 9000;
    ip = "";
    root = "";
    environment = EnvironmentType.Development;
}

export class ProductionConfig implements IConfig {
    port = 80;
    ip = "0.0.0.0";
    root = "";
    environment = EnvironmentType.Production;
}