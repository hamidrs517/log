import { IAlertLogItem } from './alert-log-item';

export interface IAlertLogList {
    alertLogItems: IAlertLogItem[];
    total: number;
    pageSize: number;
    pageNumber: number;
    lastPage: number
}