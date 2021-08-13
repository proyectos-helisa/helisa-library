import { OnInit } from '@angular/core';
import { ToastType } from './toast-type.enum';
import * as ɵngcc0 from '@angular/core';
export declare class ToastHelisaComponent implements OnInit {
    data: {
        type: ToastType;
        message: string;
        subMessages?: string[];
    };
    constructor(data: {
        type: ToastType;
        message: string;
        subMessages?: string[];
    });
    ngOnInit(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ToastHelisaComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<ToastHelisaComponent, "hel-toast", never, {}, {}, never, never>;
}

//# sourceMappingURL=toast-helisa.component.d.ts.map