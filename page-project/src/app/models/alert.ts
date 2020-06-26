export interface IAlert {
    alertId: string;
    title: string;
    template: string;
    prm1Title?: any;
    prm2Title?: any;
    prm3Title?: any;
    isSound: boolean;
    isPopup: boolean;
    isActvie: boolean;
    isPublic: boolean;
    alertTypeFk: number;
    alertTypeFkNavigation?: any;
    alertLog: any[];
    connectUgAlert: any[];
}