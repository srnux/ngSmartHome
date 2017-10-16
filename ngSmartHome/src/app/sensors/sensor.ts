/* Defines the sensor entity */
export interface ISensor {
    state: State,
    swupdate: Swupdate,
    config: Config,
    name: string;
    type: string;
    modelid: string;
    manufacturername: string,
    swversion: string,
    uniqueid: string
}

export interface State {
    temperature: number;
    lastupdated: Date;
}

export interface Swupdate {
    state: string;
    lastinstall?: any;
}

export interface Config {
    on: boolean;
    battery: number;
    reachable: boolean;
    alert: string;
    ledindication: boolean;
    usertest: boolean;
    pending: any[];
}