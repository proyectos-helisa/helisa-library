import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ToastHelisaComponent } from './toast-helisa.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/snack-bar";
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/material/snack-bar';
export class ToastHelisaService {
    constructor(snackBar) {
        this.snackBar = snackBar;
        this.durationInSeconds = 5;
    }
    showToast(type, message, subMessages) {
        subMessages = subMessages ? subMessages : [];
        this.snackBar.openFromComponent(ToastHelisaComponent, {
            data: { message, type, subMessages },
            duration: this.durationInSeconds * 1000
        });
    }
}
ToastHelisaService.ɵfac = function ToastHelisaService_Factory(t) { return new (t || ToastHelisaService)(ɵngcc0.ɵɵinject(ɵngcc1.MatSnackBar)); };
ToastHelisaService.ɵprov = i0.ɵɵdefineInjectable({ factory: function ToastHelisaService_Factory() { return new ToastHelisaService(i0.ɵɵinject(i1.MatSnackBar)); }, token: ToastHelisaService, providedIn: "root" });
ToastHelisaService.ctorParameters = () => [
    { type: MatSnackBar }
];
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ToastHelisaService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: ɵngcc1.MatSnackBar }]; }, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3QtaGVsaXNhLnNlcnZpY2UuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3Byb2plY3RzL2hlbGlzYS1saWIvc3JjL2xpYi9jb21wb25lbnRzL3RvYXN0LWhlbGlzYS90b2FzdC1oZWxpc2Euc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUUxRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNoRTtBQUdDOzs7QUFDRCxNQUFNLE9BQU8sa0JBQWtCO0FBQy9CLElBR0UsWUFBb0IsUUFBcUI7QUFBSSxRQUF6QixhQUFRLEdBQVIsUUFBUSxDQUFhO0FBQUMsUUFGMUMsc0JBQWlCLEdBQVcsQ0FBQyxDQUFDO0FBQ2hDLElBQytDLENBQUM7QUFDaEQsSUFDRSxTQUFTLENBQUMsSUFBZSxFQUFFLE9BQWUsRUFBRSxXQUFzQjtBQUFJLFFBQ3BFLFdBQVcsR0FBRyxXQUFXLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0FBQ2pELFFBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQyxvQkFBb0IsRUFBRTtBQUMxRCxZQUFNLElBQUksRUFBRSxFQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFDO0FBQ3hDLFlBQU0sUUFBUSxFQUFFLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJO0FBQzdDLFNBQUssQ0FBQyxDQUFDO0FBQ1AsSUFBRSxDQUFDO0FBQ0g7Z0pBQUM7QUFDRCxvTkFkSztBQUFDO0VBSEwsVUFBVSxTQUFDLHJCQUtHLFlBVE4sV0FBVztBQUFHO1VBS3JCLFVBQVUsRUFBRSxNQUFNLGNBQ25COzs7Ozs0RUFOd0I7QUFBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1hdFNuYWNrQmFyIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc25hY2stYmFyJztcbmltcG9ydCB7IFRvYXN0VHlwZSB9IGZyb20gJy4vdG9hc3QtdHlwZS5lbnVtJztcbmltcG9ydCB7IFRvYXN0SGVsaXNhQ29tcG9uZW50IH0gZnJvbSAnLi90b2FzdC1oZWxpc2EuY29tcG9uZW50JztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgVG9hc3RIZWxpc2FTZXJ2aWNlIHtcblxuICBkdXJhdGlvbkluU2Vjb25kczogbnVtYmVyID0gNTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNuYWNrQmFyOiBNYXRTbmFja0JhcikgeyB9XG5cbiAgc2hvd1RvYXN0KHR5cGU6IFRvYXN0VHlwZSwgbWVzc2FnZTogc3RyaW5nLCBzdWJNZXNzYWdlcz86IHN0cmluZ1tdKTogdm9pZCB7XG4gICAgc3ViTWVzc2FnZXMgPSBzdWJNZXNzYWdlcyA/IHN1Yk1lc3NhZ2VzIDogW107XG4gICAgdGhpcy5zbmFja0Jhci5vcGVuRnJvbUNvbXBvbmVudChUb2FzdEhlbGlzYUNvbXBvbmVudCwge1xuICAgICAgZGF0YToge21lc3NhZ2UsIHR5cGUsIHN1Yk1lc3NhZ2VzfSxcbiAgICAgIGR1cmF0aW9uOiB0aGlzLmR1cmF0aW9uSW5TZWNvbmRzICogMTAwMFxuICAgIH0pO1xuICB9XG59XG4iXX0=