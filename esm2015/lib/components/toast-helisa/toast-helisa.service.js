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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3QtaGVsaXNhLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9oZWxpc2EtbGliL3NyYy9saWIvY29tcG9uZW50cy90b2FzdC1oZWxpc2EvdG9hc3QtaGVsaXNhLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFFMUQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7OztBQUtoRSxNQUFNLE9BQU8sa0JBQWtCO0lBSTdCLFlBQW9CLFFBQXFCO1FBQXJCLGFBQVEsR0FBUixRQUFRLENBQWE7UUFGekMsc0JBQWlCLEdBQVcsQ0FBQyxDQUFDO0lBRWUsQ0FBQztJQUU5QyxTQUFTLENBQUMsSUFBZSxFQUFFLE9BQWUsRUFBRSxXQUFzQjtRQUNoRSxXQUFXLEdBQUcsV0FBVyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUM3QyxJQUFJLENBQUMsUUFBUSxDQUFDLGlCQUFpQixDQUFDLG9CQUFvQixFQUFFO1lBQ3BELElBQUksRUFBRSxFQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFDO1lBQ2xDLFFBQVEsRUFBRSxJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSTtTQUN4QyxDQUFDLENBQUM7SUFDTCxDQUFDOzs7O1lBZkYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7WUFOUSxXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBNYXRTbmFja0JhciB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3NuYWNrLWJhcic7XHJcbmltcG9ydCB7IFRvYXN0VHlwZSB9IGZyb20gJy4vdG9hc3QtdHlwZS5lbnVtJztcclxuaW1wb3J0IHsgVG9hc3RIZWxpc2FDb21wb25lbnQgfSBmcm9tICcuL3RvYXN0LWhlbGlzYS5jb21wb25lbnQnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgVG9hc3RIZWxpc2FTZXJ2aWNlIHtcclxuXHJcbiAgZHVyYXRpb25JblNlY29uZHM6IG51bWJlciA9IDU7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc25hY2tCYXI6IE1hdFNuYWNrQmFyKSB7IH1cclxuXHJcbiAgc2hvd1RvYXN0KHR5cGU6IFRvYXN0VHlwZSwgbWVzc2FnZTogc3RyaW5nLCBzdWJNZXNzYWdlcz86IHN0cmluZ1tdKTogdm9pZCB7XHJcbiAgICBzdWJNZXNzYWdlcyA9IHN1Yk1lc3NhZ2VzID8gc3ViTWVzc2FnZXMgOiBbXTtcclxuICAgIHRoaXMuc25hY2tCYXIub3BlbkZyb21Db21wb25lbnQoVG9hc3RIZWxpc2FDb21wb25lbnQsIHtcclxuICAgICAgZGF0YToge21lc3NhZ2UsIHR5cGUsIHN1Yk1lc3NhZ2VzfSxcclxuICAgICAgZHVyYXRpb246IHRoaXMuZHVyYXRpb25JblNlY29uZHMgKiAxMDAwXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIl19