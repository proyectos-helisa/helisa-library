import { OnInit } from '@angular/core';
import { ToastType } from './toast-type.enum';
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
}
