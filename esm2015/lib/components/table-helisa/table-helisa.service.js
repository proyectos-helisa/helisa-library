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
        this.emitEnabledButton$ = new Subject();
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
    /**
     * para modificar el estado del boton de add row de la tabla
     * @param change indicar si se muestra o no el boton de add row de la tabla
     */
    changeEnabledButton(change) {
        this.emitEnabledButton$.next(change);
    }
}
TableHelisaService.ɵprov = i0.ɵɵdefineInjectable({ factory: function TableHelisaService_Factory() { return new TableHelisaService(); }, token: TableHelisaService, providedIn: "root" });
TableHelisaService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtaGVsaXNhLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiLi4vLi4vLi4vcHJvamVjdHMvaGVsaXNhLWxpYi9zcmMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy90YWJsZS1oZWxpc2EvdGFibGUtaGVsaXNhLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQThCLE9BQU8sRUFBQyxNQUFNLE1BQU0sQ0FBQzs7QUFZMUQsTUFBTSxPQUFPLGtCQUFrQjtJQUgvQjtRQUtVLHFCQUFnQixHQUFzRCxJQUFJLE9BQU8sRUFBNEMsQ0FBQztRQUM5SCxpQkFBWSxHQUF5QyxJQUFJLE9BQU8sRUFBK0IsQ0FBQztRQUV4RyxnQkFBVyxHQUF5RCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDekcsbUJBQWMsR0FBNEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUVuRix1QkFBa0IsR0FBcUIsSUFBSSxPQUFPLEVBQVcsQ0FBQztRQUM5RCx1QkFBa0IsR0FBa0QsSUFBSSxPQUFPLEVBQXdDLENBQUM7UUFDaEk7O1dBRUc7UUFDSCxzQkFBaUIsR0FBd0IsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFlBQVksRUFBRSxDQUFDO0tBMEJqRjtJQXhCQyxRQUFRLENBQUMsS0FBdUIsRUFBRSxLQUE4QztRQUM5RSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLEVBQUMsR0FBRyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUMsQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFFRCxPQUFPLENBQUMsSUFBUyxFQUFFLEtBQStCO1FBQ2hELElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEVBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUMsQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFFRDs7O09BR0c7SUFDSCxzQkFBc0IsQ0FBQyxNQUFlO1FBQ3BDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUVEOzs7T0FHRztJQUNGLG1CQUFtQixDQUFDLE1BQTJDO1FBQzlELElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDdkMsQ0FBQzs7OztZQXhDRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0JlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZSwgU3ViamVjdH0gZnJvbSAncnhqcyc7XG5pbXBvcnQge1RvdGFsVGFibGVIZWxpc2F9IGZyb20gJy4vdGFibGUtaGVsaXNhLmludGVyZmFjZSc7XG5pbXBvcnQge1RhYmxlSGVsaXNhQ29tcG9uZW50fSBmcm9tICcuL3RhYmxlLWhlbGlzYS5jb21wb25lbnQnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFRhYmxlSGVsaXNhU2VydmljZUluZm88VD4ge1xuICBvYmo6IFQ7XG4gIHRhYmxlPzoge30gfCBUYWJsZUhlbGlzYUNvbXBvbmVudDxUPjtcbn1cblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgVGFibGVIZWxpc2FTZXJ2aWNlPFQ+IHtcblxuICBwcml2YXRlIGVtaXRDaGFuZ2VTb3VyY2U6IFN1YmplY3Q8VGFibGVIZWxpc2FTZXJ2aWNlSW5mbzxUb3RhbFRhYmxlSGVsaXNhPj4gPSBuZXcgU3ViamVjdDxUYWJsZUhlbGlzYVNlcnZpY2VJbmZvPFRvdGFsVGFibGVIZWxpc2E+PigpO1xuICBwcml2YXRlIGVtaXROZXh0UGFnZTogU3ViamVjdDxUYWJsZUhlbGlzYVNlcnZpY2VJbmZvPFRbXT4+ID0gbmV3IFN1YmplY3Q8VGFibGVIZWxpc2FTZXJ2aWNlSW5mbzxUW10+PigpO1xuXG4gIHRvdGFsUmV0dXJuOiBPYnNlcnZhYmxlPFRhYmxlSGVsaXNhU2VydmljZUluZm88VG90YWxUYWJsZUhlbGlzYT4+ID0gdGhpcy5lbWl0Q2hhbmdlU291cmNlLmFzT2JzZXJ2YWJsZSgpO1xuICBuZXh0UGFnZVJldHVybjogT2JzZXJ2YWJsZTxUYWJsZUhlbGlzYVNlcnZpY2VJbmZvPFRbXT4+ID0gdGhpcy5lbWl0TmV4dFBhZ2UuYXNPYnNlcnZhYmxlKCk7XG5cbiAgcHJpdmF0ZSBlbWl0VmlzaWJsZUJ1dHRvbiQ6IFN1YmplY3Q8Ym9vbGVhbj4gPSBuZXcgU3ViamVjdDxib29sZWFuPigpO1xuICBwcml2YXRlIGVtaXRFbmFibGVkQnV0dG9uJDogU3ViamVjdDx7aXNEaXNhYmxlZDogYm9vbGVhbiwgdGV4dCAgOnN0cmluZ30+ID0gbmV3IFN1YmplY3Q8e2lzRGlzYWJsZWQ6IGJvb2xlYW4sIHRleHQgIDpzdHJpbmd9PigpO1xuICAvKipcbiAgICogT2JzZXJ2YWJsZSBwYXJhIHNhYmVyIHNpIHNlIGRlYmUgbW9zdHJhciBvIGVzY29uZGVyIGVsIGJvdG9uIGRlIGFkZCByb3dcbiAgICovXG4gIGVtaXRWaXNpYmxlQnV0dG9uOiBPYnNlcnZhYmxlPGJvb2xlYW4+ID0gdGhpcy5lbWl0VmlzaWJsZUJ1dHRvbiQuYXNPYnNlcnZhYmxlKCk7XG5cbiAgc2V0VG90YWwodG90YWw6IFRvdGFsVGFibGVIZWxpc2EsIHRhYmxlPzogVGFibGVIZWxpc2FDb21wb25lbnQ8VG90YWxUYWJsZUhlbGlzYT4pOiB2b2lkIHtcbiAgICB0aGlzLmVtaXRDaGFuZ2VTb3VyY2UubmV4dCh7b2JqOiB0b3RhbCwgdGFibGV9KTtcbiAgfVxuXG4gIGFkZFBhZ2UocGFnZTogVFtdLCB0YWJsZT86IFRhYmxlSGVsaXNhQ29tcG9uZW50PFQ+KTogdm9pZCB7XG4gICAgdGhpcy5lbWl0TmV4dFBhZ2UubmV4dCh7b2JqOiBwYWdlLCB0YWJsZX0pO1xuICB9XG5cbiAgLyoqXG4gICAqIHBhcmEgbW9kaWZpY2FyIGVsIHZhbG9yIGRlIHNpIHNlIG11ZXN0cmEgbyBubyBlbCBib3RvbiBkZSBhZGQgcm93IGRlIGxhIHRhYmxhXG4gICAqIEBwYXJhbSBjaGFuZ2UgaW5kaWNhciBzaSBzZSBtdWVzdHJhIG8gbm8gZWwgYm90b24gZGUgYWRkIHJvdyBkZSBsYSB0YWJsYVxuICAgKi9cbiAgY2hhbmdlVmlzaWJpbGl0eUJ1dHRvbihjaGFuZ2U6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLmVtaXRWaXNpYmxlQnV0dG9uJC5uZXh0KGNoYW5nZSk7XG4gIH1cblxuICAvKipcbiAgICogcGFyYSBtb2RpZmljYXIgZWwgZXN0YWRvIGRlbCBib3RvbiBkZSBhZGQgcm93IGRlIGxhIHRhYmxhXG4gICAqIEBwYXJhbSBjaGFuZ2UgaW5kaWNhciBzaSBzZSBtdWVzdHJhIG8gbm8gZWwgYm90b24gZGUgYWRkIHJvdyBkZSBsYSB0YWJsYVxuICAgKi9cbiAgIGNoYW5nZUVuYWJsZWRCdXR0b24oY2hhbmdlOiB7aXNEaXNhYmxlZDogYm9vbGVhbiwgdGV4dDogc3RyaW5nfSk6IHZvaWQge1xuICAgIHRoaXMuZW1pdEVuYWJsZWRCdXR0b24kLm5leHQoY2hhbmdlKTtcbiAgfVxuXG59XG4iXX0=