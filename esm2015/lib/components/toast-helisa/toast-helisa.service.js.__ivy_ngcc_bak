import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ToastHelisaComponent } from './toast-helisa.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/snack-bar";
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
ToastHelisaService.ɵprov = i0.ɵɵdefineInjectable({ factory: function ToastHelisaService_Factory() { return new ToastHelisaService(i0.ɵɵinject(i1.MatSnackBar)); }, token: ToastHelisaService, providedIn: "root" });
ToastHelisaService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
ToastHelisaService.ctorParameters = () => [
    { type: MatSnackBar }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3QtaGVsaXNhLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiLi4vLi4vLi4vcHJvamVjdHMvaGVsaXNhLWxpYi9zcmMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy90b2FzdC1oZWxpc2EvdG9hc3QtaGVsaXNhLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFFMUQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7OztBQUtoRSxNQUFNLE9BQU8sa0JBQWtCO0lBSTdCLFlBQW9CLFFBQXFCO1FBQXJCLGFBQVEsR0FBUixRQUFRLENBQWE7UUFGekMsc0JBQWlCLEdBQVcsQ0FBQyxDQUFDO0lBRWUsQ0FBQztJQUU5QyxTQUFTLENBQUMsSUFBZSxFQUFFLE9BQWUsRUFBRSxXQUFzQjtRQUNoRSxXQUFXLEdBQUcsV0FBVyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUM3QyxJQUFJLENBQUMsUUFBUSxDQUFDLGlCQUFpQixDQUFDLG9CQUFvQixFQUFFO1lBQ3BELElBQUksRUFBRSxFQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFDO1lBQ2xDLFFBQVEsRUFBRSxJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSTtTQUN4QyxDQUFDLENBQUM7SUFDTCxDQUFDOzs7O1lBZkYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7WUFOUSxXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWF0U25hY2tCYXIgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zbmFjay1iYXInO1xuaW1wb3J0IHsgVG9hc3RUeXBlIH0gZnJvbSAnLi90b2FzdC10eXBlLmVudW0nO1xuaW1wb3J0IHsgVG9hc3RIZWxpc2FDb21wb25lbnQgfSBmcm9tICcuL3RvYXN0LWhlbGlzYS5jb21wb25lbnQnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBUb2FzdEhlbGlzYVNlcnZpY2Uge1xuXG4gIGR1cmF0aW9uSW5TZWNvbmRzOiBudW1iZXIgPSA1O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc25hY2tCYXI6IE1hdFNuYWNrQmFyKSB7IH1cblxuICBzaG93VG9hc3QodHlwZTogVG9hc3RUeXBlLCBtZXNzYWdlOiBzdHJpbmcsIHN1Yk1lc3NhZ2VzPzogc3RyaW5nW10pOiB2b2lkIHtcbiAgICBzdWJNZXNzYWdlcyA9IHN1Yk1lc3NhZ2VzID8gc3ViTWVzc2FnZXMgOiBbXTtcbiAgICB0aGlzLnNuYWNrQmFyLm9wZW5Gcm9tQ29tcG9uZW50KFRvYXN0SGVsaXNhQ29tcG9uZW50LCB7XG4gICAgICBkYXRhOiB7bWVzc2FnZSwgdHlwZSwgc3ViTWVzc2FnZXN9LFxuICAgICAgZHVyYXRpb246IHRoaXMuZHVyYXRpb25JblNlY29uZHMgKiAxMDAwXG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==