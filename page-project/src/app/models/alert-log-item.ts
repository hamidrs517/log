export interface IAlertLogItem {
    alertLogId: number;
    logText: string;
    logDate: string;
    prm1Value?: any;
    prm2Value?: any;
    prm3Value?: any;
    alertId: number;
    title: string;
    sound: boolean;
    popup: boolean;
    type: number;
}