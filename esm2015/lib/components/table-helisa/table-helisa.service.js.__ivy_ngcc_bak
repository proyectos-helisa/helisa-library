import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
export class TableHelisaService {
    constructor() {
        this.emitChangeSource = new Subject();
        this.emitNextPage = new Subject();
        this.totalReturn = this.emitChangeSource.asObservable();
        this.nextPageReturn = this.emitNextPage.asObservable();
        this.emitVisibleButton$ = new Subject();
        /**
         * Observable para saber si se debe mostrar o esconder el boton de add row
         */
        this.emitVisibleButton = this.emitVisibleButton$.asObservable();
    }
    setTotal(total, table) {
        this.emitChangeSource.next({ obj: total, table });
    }
    addPage(page, table) {
        this.emitNextPage.next({ obj: page, table });
    }
    /**
     * para modificar el valor de si se muestra o no el boton de add row de la tabla
     * @param change indicar si se muestra o no el boton de add row de la tabla
     */
    changeVisibilityButton(change) {
        this.emitVisibleButton$.next(change);
    }
}
TableHelisaService.ɵprov = i0.ɵɵdefineInjectable({ factory: function TableHelisaService_Factory() { return new TableHelisaService(); }, token: TableHelisaService, providedIn: "root" });
TableHelisaService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtaGVsaXNhLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiLi4vLi4vLi4vcHJvamVjdHMvaGVsaXNhLWxpYi9zcmMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy90YWJsZS1oZWxpc2EvdGFibGUtaGVsaXNhLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQThCLE9BQU8sRUFBQyxNQUFNLE1BQU0sQ0FBQzs7QUFZMUQsTUFBTSxPQUFPLGtCQUFrQjtJQUgvQjtRQUtVLHFCQUFnQixHQUFzRCxJQUFJLE9BQU8sRUFBNEMsQ0FBQztRQUM5SCxpQkFBWSxHQUF5QyxJQUFJLE9BQU8sRUFBK0IsQ0FBQztRQUV4RyxnQkFBVyxHQUF5RCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDekcsbUJBQWMsR0FBNEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUVuRix1QkFBa0IsR0FBcUIsSUFBSSxPQUFPLEVBQVcsQ0FBQztRQUN0RTs7V0FFRztRQUNILHNCQUFpQixHQUF3QixJQUFJLENBQUMsa0JBQWtCLENBQUMsWUFBWSxFQUFFLENBQUM7S0FrQmpGO0lBaEJDLFFBQVEsQ0FBQyxLQUF1QixFQUFFLEtBQThDO1FBQzlFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsRUFBQyxHQUFHLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBQyxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUVELE9BQU8sQ0FBQyxJQUFTLEVBQUUsS0FBK0I7UUFDaEQsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsRUFBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBQyxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUVEOzs7T0FHRztJQUNILHNCQUFzQixDQUFDLE1BQWU7UUFDcEMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN2QyxDQUFDOzs7O1lBL0JGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7QmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlLCBTdWJqZWN0fSBmcm9tICdyeGpzJztcbmltcG9ydCB7VG90YWxUYWJsZUhlbGlzYX0gZnJvbSAnLi90YWJsZS1oZWxpc2EuaW50ZXJmYWNlJztcbmltcG9ydCB7VGFibGVIZWxpc2FDb21wb25lbnR9IGZyb20gJy4vdGFibGUtaGVsaXNhLmNvbXBvbmVudCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgVGFibGVIZWxpc2FTZXJ2aWNlSW5mbzxUPiB7XG4gIG9iajogVDtcbiAgdGFibGU/OiB7fSB8IFRhYmxlSGVsaXNhQ29tcG9uZW50PFQ+O1xufVxuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBUYWJsZUhlbGlzYVNlcnZpY2U8VD4ge1xuXG4gIHByaXZhdGUgZW1pdENoYW5nZVNvdXJjZTogU3ViamVjdDxUYWJsZUhlbGlzYVNlcnZpY2VJbmZvPFRvdGFsVGFibGVIZWxpc2E+PiA9IG5ldyBTdWJqZWN0PFRhYmxlSGVsaXNhU2VydmljZUluZm88VG90YWxUYWJsZUhlbGlzYT4+KCk7XG4gIHByaXZhdGUgZW1pdE5leHRQYWdlOiBTdWJqZWN0PFRhYmxlSGVsaXNhU2VydmljZUluZm88VFtdPj4gPSBuZXcgU3ViamVjdDxUYWJsZUhlbGlzYVNlcnZpY2VJbmZvPFRbXT4+KCk7XG5cbiAgdG90YWxSZXR1cm46IE9ic2VydmFibGU8VGFibGVIZWxpc2FTZXJ2aWNlSW5mbzxUb3RhbFRhYmxlSGVsaXNhPj4gPSB0aGlzLmVtaXRDaGFuZ2VTb3VyY2UuYXNPYnNlcnZhYmxlKCk7XG4gIG5leHRQYWdlUmV0dXJuOiBPYnNlcnZhYmxlPFRhYmxlSGVsaXNhU2VydmljZUluZm88VFtdPj4gPSB0aGlzLmVtaXROZXh0UGFnZS5hc09ic2VydmFibGUoKTtcblxuICBwcml2YXRlIGVtaXRWaXNpYmxlQnV0dG9uJDogU3ViamVjdDxib29sZWFuPiA9IG5ldyBTdWJqZWN0PGJvb2xlYW4+KCk7XG4gIC8qKlxuICAgKiBPYnNlcnZhYmxlIHBhcmEgc2FiZXIgc2kgc2UgZGViZSBtb3N0cmFyIG8gZXNjb25kZXIgZWwgYm90b24gZGUgYWRkIHJvd1xuICAgKi9cbiAgZW1pdFZpc2libGVCdXR0b246IE9ic2VydmFibGU8Ym9vbGVhbj4gPSB0aGlzLmVtaXRWaXNpYmxlQnV0dG9uJC5hc09ic2VydmFibGUoKTtcblxuICBzZXRUb3RhbCh0b3RhbDogVG90YWxUYWJsZUhlbGlzYSwgdGFibGU/OiBUYWJsZUhlbGlzYUNvbXBvbmVudDxUb3RhbFRhYmxlSGVsaXNhPik6IHZvaWQge1xuICAgIHRoaXMuZW1pdENoYW5nZVNvdXJjZS5uZXh0KHtvYmo6IHRvdGFsLCB0YWJsZX0pO1xuICB9XG5cbiAgYWRkUGFnZShwYWdlOiBUW10sIHRhYmxlPzogVGFibGVIZWxpc2FDb21wb25lbnQ8VD4pOiB2b2lkIHtcbiAgICB0aGlzLmVtaXROZXh0UGFnZS5uZXh0KHtvYmo6IHBhZ2UsIHRhYmxlfSk7XG4gIH1cblxuICAvKipcbiAgICogcGFyYSBtb2RpZmljYXIgZWwgdmFsb3IgZGUgc2kgc2UgbXVlc3RyYSBvIG5vIGVsIGJvdG9uIGRlIGFkZCByb3cgZGUgbGEgdGFibGFcbiAgICogQHBhcmFtIGNoYW5nZSBpbmRpY2FyIHNpIHNlIG11ZXN0cmEgbyBubyBlbCBib3RvbiBkZSBhZGQgcm93IGRlIGxhIHRhYmxhXG4gICAqL1xuICBjaGFuZ2VWaXNpYmlsaXR5QnV0dG9uKGNoYW5nZTogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMuZW1pdFZpc2libGVCdXR0b24kLm5leHQoY2hhbmdlKTtcbiAgfVxuXG59XG4iXX0=