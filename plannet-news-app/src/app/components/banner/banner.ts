import { Type } from "@angular/core";

export interface BannerInterface {
    data: any;
}

export class BannerItem {
    constructor(public component: Type<any>, public data: any) { }
}