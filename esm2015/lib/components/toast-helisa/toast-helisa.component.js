import { Component, Inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';
// @dynamic
export class ToastHelisaComponent {
    constructor(data) {
        this.data = data;
    }
    ngOnInit() { }
}
ToastHelisaComponent.decorators = [
    { type: Component, args: [{
                selector: 'hel-toast',
                template: "<div [ngClass]=\"'toast-'+data.type\">\n  <span class=\"toast-message\">{{ data.message }}</span>\n  <ng-container *ngIf=\"!!data && !!data.subMessages\">\n    <span class=\"toast-sub-message\" *ngFor=\"let submessage of data.subMessages\">{{ submessage }}</span>\n  </ng-container>    \n</div>\n",
                styles: [""]
            },] }
];
ToastHelisaComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [MAT_SNACK_BAR_DATA,] }] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3QtaGVsaXNhLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIuLi8uLi8uLi9wcm9qZWN0cy9oZWxpc2EtbGliL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3RvYXN0LWhlbGlzYS90b2FzdC1oZWxpc2EuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBR2pFLFdBQVc7QUFNWCxNQUFNLE9BQU8sb0JBQW9CO0lBRS9CLFlBQStDLElBQWdFO1FBQWhFLFNBQUksR0FBSixJQUFJLENBQTREO0lBQUksQ0FBQztJQUVwSCxRQUFRLEtBQVUsQ0FBQzs7O1lBVHBCLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsV0FBVztnQkFDckIsb1RBQTRDOzthQUU3Qzs7OzRDQUdjLE1BQU0sU0FBQyxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNQVRfU05BQ0tfQkFSX0RBVEEgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zbmFjay1iYXInO1xuaW1wb3J0IHsgVG9hc3RUeXBlIH0gZnJvbSAnLi90b2FzdC10eXBlLmVudW0nO1xuXG4vLyBAZHluYW1pY1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnaGVsLXRvYXN0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3RvYXN0LWhlbGlzYS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3RvYXN0LWhlbGlzYS5jb21wb25lbnQuc2FzcyddXG59KVxuZXhwb3J0IGNsYXNzIFRvYXN0SGVsaXNhQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3RvcihASW5qZWN0KE1BVF9TTkFDS19CQVJfREFUQSkgcHVibGljIGRhdGE6IHt0eXBlOiBUb2FzdFR5cGUsIG1lc3NhZ2U6IHN0cmluZywgc3ViTWVzc2FnZXM/OiBzdHJpbmdbXX0pIHsgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge31cblxufVxuIl19