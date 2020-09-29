export interface PluginList {
    ComplianceType: string;
    ComplianceTypeID: number;
    BlockingEnabled: boolean;
    PluginDomain: string;
    cName: string;
    optOutExternalLink: string;
}
export interface Accordian {
    Localization: string;
    CategoyId: number;
    CategoyHeading: string;
    IsMandatory: boolean;
    CategoyText: string;
    PluginList: PluginList[];
    ExtraSettings: string;
}

export interface CookieBannerResponse {
    BannerId: number;
    accordian: Accordian[];
    Created: Date;
    LastUpdated: Date;
}