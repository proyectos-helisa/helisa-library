import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import * as ɵngcc0 from '@angular/core';
export class DependencyTableHelisaService {
    constructor() {
        this.tables = new Subject();
        this.infoTables = new Array();
        this.emitVisibilityButton$ = new Subject();
        this.emitVisibilityButton = this.emitVisibilityButton$.asObservable();
        this.emitVisibilityAllButtons$ = new Subject();
        this.emitVisibilityAllButtons = this.emitVisibilityAllButtons$.asObservable();
        this.emitIsCellSelection$ = new Subject();
        this.emitIsCellSelection = this.emitIsCellSelection$.asObservable();
        this.emitChangeColumns$ = new Subject();
        this.emitChangeColumns = this.emitChangeColumns$.asObservable();
        this.emitTotal = new Subject();
        this.emitNextPage = new Subject();
    }
    /**
     * retorna un Observable<ConfigTable[]>
     */
    getTables() {
        return this.tables;
    }
    /**
     * Actualiza las dependencias, agrendo la tabla que envian en el orden correspondiente o al final.
     * También remueve las dependecias que hay apartir de la tabla segun se indique en el parametro.
     * @param configTable Objeto que contiene la configuración para la tabla.
     * @param withRemoveDependency boolean por defecto es false, si es 'true' indica que remueva las dependencias apartir de el.
     */
    updateDependency(configTable, withRemoveDependency = false) {
        if (withRemoveDependency) {
            this.infoTables = this.infoTables.slice(0, !configTable.order ? 0 : configTable.order);
        }
        if (!configTable.order || configTable.order >= this.infoTables.length) {
            configTable.order = this.infoTables.length;
        }
        this.infoTables[configTable.order] = configTable;
        if (configTable.isRemote) {
            configTable.dataSource = null;
            if (configTable.count === null) {
                throw new Error('hace falta el count');
            }
        }
        else {
            if (configTable.dataSource === null) {
                throw new Error('hace falta el dataSource');
            }
            configTable.count = configTable.dataSource.length;
        }
        this.tables.next(this.infoTables);
    }
    /**
     * Emite un evento de total con la información para la tabla correspondiente
     * @param event wrapper que contiene el indice de la tabla y la información de la pagina
     */
    setTotal(event) {
        this.emitTotal.next(event);
    }
    /**
     * Emite un evento de agregar pagina con la pagina para la tabla correspondiente
     * @param event wrapper que contiene el indice de la tabla y la información de la pagina
     */
    addPage(event) {
        this.emitNextPage.next(event);
    }
    selectIndexRow(config) {
        if (this.infoTables[config.order]) {
            this.infoTables[config.order].indexRowSelect = config.indexRowSelect;
            this.tables.next(this.infoTables);
        }
    }
    /**
     * Muestra o esconde el boton una tabla en especifico
     * @param event para indicar el index de la tabla y en "data" true o false
     */
    changeVisibilityButton(event) {
        this.emitVisibilityButton$.next(event);
    }
    /**
     * Esconde los botones de todas las tablas
     * @param show indicar si se muestran o no todos los botones de las tablas
     */
    changeVisibilityAllButtons(show) {
        this.emitVisibilityAllButtons$.next(show);
    }
    /**
     * Para habilitar el manejo de selección de celda
     * @param event para indicar el index de la tabla y en "data" true o false
     */
    changeisCellSelection(event) {
        this.emitIsCellSelection$.next(event);
    }
    /**
     * Para habilitar el cambio de columnas
     * @param event para indicar el index de la tabla y en "data" columnas
     */
    changeColumnsByTable(event) {
        this.emitChangeColumns$.next(event);
    }
}
DependencyTableHelisaService.ɵfac = function DependencyTableHelisaService_Factory(t) { return new (t || DependencyTableHelisaService)(); };
DependencyTableHelisaService.ɵprov = ɵngcc0.ɵɵdefineInjectable({ token: DependencyTableHelisaService, factory: DependencyTableHelisaService.ɵfac });
DependencyTableHelisaService.ctorParameters = () => [];
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(DependencyTableHelisaService, [{
        type: Injectable
    }], function () { return []; }, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVwZW5kZW5jeS10YWJsZS1oZWxpc2Euc2VydmljZS5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vcHJvamVjdHMvaGVsaXNhLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvZGVwZW5kZW5jeS10YWJsZS1oZWxpc2EvZGVwZW5kZW5jeS10YWJsZS1oZWxpc2Euc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBYyxPQUFPLEVBQW1CLE1BQU0sTUFBTSxDQUFDOztBQXFCNUQsTUFBTSxPQUFPLDRCQUE0QjtBQUFHLElBcUIxQztBQUFnQixRQWxCaEIsV0FBTSxHQUE4QixJQUFJLE9BQU8sRUFBRSxDQUFDO0FBQ3BELFFBQUUsZUFBVSxHQUEwQixJQUFJLEtBQUssRUFBRSxDQUFDO0FBQ2xELFFBQ1UsMEJBQXFCLEdBQXNDLElBQUksT0FBTyxFQUE0QixDQUFDO0FBQzdHLFFBQUUseUJBQW9CLEdBQXlDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxZQUFZLEVBQUUsQ0FBQztBQUN6RyxRQUNVLDhCQUF5QixHQUFxQixJQUFJLE9BQU8sRUFBVyxDQUFDO0FBQy9FLFFBQUUsNkJBQXdCLEdBQXdCLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxZQUFZLEVBQUUsQ0FBQztBQUNoRyxRQUNVLHlCQUFvQixHQUFzQyxJQUFJLE9BQU8sRUFBNEIsQ0FBQztBQUM1RyxRQUFFLHdCQUFtQixHQUF5QyxJQUFJLENBQUMsb0JBQW9CLENBQUMsWUFBWSxFQUFFLENBQUM7QUFDdkcsUUFDVSx1QkFBa0IsR0FBNkMsSUFBSSxPQUFPLEVBQW1DLENBQUM7QUFDeEgsUUFBRSxzQkFBaUIsR0FBZ0QsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFlBQVksRUFBRSxDQUFDO0FBQzFHLFFBQ0UsY0FBUyxHQUErQyxJQUFJLE9BQU8sRUFBcUMsQ0FBQztBQUMzRyxRQUFFLGlCQUFZLEdBQWtDLElBQUks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SSxRQUMxQyxJQUFJLENBQUMseUJBQXlCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQzlDLElBQUUsQ0FBQztBQUNILElBQ0U7QUFDRjtBQUNFO0FBQ0UsT0FBQztBQUNMLElBQUUscUJBQXFCLENBQUMsS0FBK0I7QUFBSSxRQUN2RCxJQUFJLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQzFDLElBQUUsQ0FBQztBQUNILElBQ0c7QUFDSDtBQUNDO0FBQ0MsT0FBSTtBQUNOLElBQUUsb0JBQW9CLENBQUUsS0FBc0M7QUFBSSxRQUM5RCxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ3hDLElBQUUsQ0FBQztBQUNIO3dEQW5IQyxVQUFVO29KQUNUO0FBQUM7OztnREFHTTtBQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3ViamVjdCwgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQge0NvbHVtbkNvbmZpZywgQWRkUm93QnV0dG9uLCBDb25maWdSb3dTdHlsZXMsIFRvdGFsVGFibGVIZWxpc2F9IGZyb20gJy4uL3RhYmxlLWhlbGlzYS90YWJsZS1oZWxpc2EuaW50ZXJmYWNlJztcbmltcG9ydCB7IEV2ZW50RGVwZW5kZW5jeX0gZnJvbSAnLi9kZXBlbmRlbmN5LXRhYmxlLWhlbGlzYS5jb21wb25lbnQnO1xuXG5leHBvcnQgaW50ZXJmYWNlIENvbmZpZ1RhYmxlPFQ+IHtcbiAgY29sdW1uczogQXJyYXk8Q29sdW1uQ29uZmlnPjtcbiAgaXNSZW1vdGU6IGJvb2xlYW47XG4gIGRhdGFTb3VyY2U/OiBBcnJheTxUPjtcbiAgY291bnQ/OiBudW1iZXI7XG4gIG9yZGVyPzogbnVtYmVyO1xuICBzaG93VGl0bGU/OiBib29sZWFuO1xuICBpbmRleFJvd1NlbGVjdD86IG51bWJlcjtcbiAgaXNEcmFnZ2VkPzogYm9vbGVhbjtcbiAgYWRkUm93QnV0dG9uPzogQWRkUm93QnV0dG9uO1xuICBjb25maWdSb3dTdHlsZXNGcm9tQ29sdW1uPzogQXJyYXk8Q29uZmlnUm93U3R5bGVzPFQ+PjtcbiAgY29uZmlnQ29sdW1uQ2xhc3M/OiBBcnJheTxzdHJpbmc+LFxuICBpc0NlbGxTZWxlY3Rpb24/OiBib29sZWFuO1xuICBhZGRCb29rQnV0dG9uPzogYm9vbGVhbjtcbn1cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIERlcGVuZGVuY3lUYWJsZUhlbGlzYVNlcnZpY2U8VD4ge1xuXG5cbiAgdGFibGVzOiBTdWJqZWN0PENvbmZpZ1RhYmxlPFQ+W10+ID0gbmV3IFN1YmplY3QoKTtcbiAgaW5mb1RhYmxlczogQXJyYXk8Q29uZmlnVGFibGU8VD4+ID0gbmV3IEFycmF5KCk7XG5cbiAgcHJpdmF0ZSBlbWl0VmlzaWJpbGl0eUJ1dHRvbiQ6IFN1YmplY3Q8RXZlbnREZXBlbmRlbmN5PGJvb2xlYW4+PiA9IG5ldyBTdWJqZWN0PEV2ZW50RGVwZW5kZW5jeTxib29sZWFuPj4oKTtcbiAgZW1pdFZpc2liaWxpdHlCdXR0b246IE9ic2VydmFibGU8RXZlbnREZXBlbmRlbmN5PGJvb2xlYW4+PiA9IHRoaXMuZW1pdFZpc2liaWxpdHlCdXR0b24kLmFzT2JzZXJ2YWJsZSgpO1xuXG4gIHByaXZhdGUgZW1pdFZpc2liaWxpdHlBbGxCdXR0b25zJDogU3ViamVjdDxib29sZWFuPiA9IG5ldyBTdWJqZWN0PGJvb2xlYW4+KCk7XG4gIGVtaXRWaXNpYmlsaXR5QWxsQnV0dG9uczogT2JzZXJ2YWJsZTxib29sZWFuPiA9IHRoaXMuZW1pdFZpc2liaWxpdHlBbGxCdXR0b25zJC5hc09ic2VydmFibGUoKTtcblxuICBwcml2YXRlIGVtaXRJc0NlbGxTZWxlY3Rpb24kOiBTdWJqZWN0PEV2ZW50RGVwZW5kZW5jeTxib29sZWFuPj4gPSBuZXcgU3ViamVjdDxFdmVudERlcGVuZGVuY3k8Ym9vbGVhbj4+KCk7XG4gIGVtaXRJc0NlbGxTZWxlY3Rpb246IE9ic2VydmFibGU8RXZlbnREZXBlbmRlbmN5PGJvb2xlYW4+PiA9IHRoaXMuZW1pdElzQ2VsbFNlbGVjdGlvbiQuYXNPYnNlcnZhYmxlKCk7XG5cbiAgcHJpdmF0ZSBlbWl0Q2hhbmdlQ29sdW1ucyQ6IFN1YmplY3Q8RXZlbnREZXBlbmRlbmN5PENvbHVtbkNvbmZpZ1tdPj4gPSBuZXcgU3ViamVjdDxFdmVudERlcGVuZGVuY3k8Q29sdW1uQ29uZmlnW10+PigpO1xuICBlbWl0Q2hhbmdlQ29sdW1uczogT2JzZXJ2YWJsZTxFdmVudERlcGVuZGVuY3k8Q29sdW1uQ29uZmlnW10+PiA9IHRoaXMuZW1pdENoYW5nZUNvbHVtbnMkLmFzT2JzZXJ2YWJsZSgpO1xuXG4gIGVtaXRUb3RhbDogU3ViamVjdDxFdmVudERlcGVuZGVuY3k8VG90YWxUYWJsZUhlbGlzYT4+ID0gbmV3IFN1YmplY3Q8RXZlbnREZXBlbmRlbmN5PFRvdGFsVGFibGVIZWxpc2E+PigpO1xuICBlbWl0TmV4dFBhZ2U6IFN1YmplY3Q8RXZlbnREZXBlbmRlbmN5PFRbXT4+ID0gbmV3IFN1YmplY3Q8RXZlbnREZXBlbmRlbmN5PFRbXT4+KCk7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICAvKipcbiAgICogcmV0b3JuYSB1biBPYnNlcnZhYmxlPENvbmZpZ1RhYmxlW10+XG4gICAqL1xuICBnZXRUYWJsZXMoKTogT2JzZXJ2YWJsZTxDb25maWdUYWJsZTxUPltdPiB7XG4gICAgcmV0dXJuIHRoaXMudGFibGVzO1xuICB9XG5cbiAgLyoqXG4gICAqIEFjdHVhbGl6YSBsYXMgZGVwZW5kZW5jaWFzLCBhZ3JlbmRvIGxhIHRhYmxhIHF1ZSBlbnZpYW4gZW4gZWwgb3JkZW4gY29ycmVzcG9uZGllbnRlIG8gYWwgZmluYWwuXG4gICAqIFRhbWJpw6luIHJlbXVldmUgbGFzIGRlcGVuZGVjaWFzIHF1ZSBoYXkgYXBhcnRpciBkZSBsYSB0YWJsYSBzZWd1biBzZSBpbmRpcXVlIGVuIGVsIHBhcmFtZXRyby5cbiAgICogQHBhcmFtIGNvbmZpZ1RhYmxlIE9iamV0byBxdWUgY29udGllbmUgbGEgY29uZmlndXJhY2nDs24gcGFyYSBsYSB0YWJsYS5cbiAgICogQHBhcmFtIHdpdGhSZW1vdmVEZXBlbmRlbmN5IGJvb2xlYW4gcG9yIGRlZmVjdG8gZXMgZmFsc2UsIHNpIGVzICd0cnVlJyBpbmRpY2EgcXVlIHJlbXVldmEgbGFzIGRlcGVuZGVuY2lhcyBhcGFydGlyIGRlIGVsLlxuICAgKi9cbiAgdXBkYXRlRGVwZW5kZW5jeShjb25maWdUYWJsZTogQ29uZmlnVGFibGU8VD4sIHdpdGhSZW1vdmVEZXBlbmRlbmN5OiBib29sZWFuID0gZmFsc2UpOiB2b2lkIHtcbiAgICBpZiAod2l0aFJlbW92ZURlcGVuZGVuY3kpIHtcbiAgICAgIHRoaXMuaW5mb1RhYmxlcyA9IHRoaXMuaW5mb1RhYmxlcy5zbGljZSgwLCAhY29uZmlnVGFibGUub3JkZXIgPyAwIDogY29uZmlnVGFibGUub3JkZXIpO1xuICAgIH1cbiAgICBpZiAoIWNvbmZpZ1RhYmxlLm9yZGVyIHx8IGNvbmZpZ1RhYmxlLm9yZGVyID49IHRoaXMuaW5mb1RhYmxlcy5sZW5ndGgpIHtcbiAgICAgIGNvbmZpZ1RhYmxlLm9yZGVyID0gdGhpcy5pbmZvVGFibGVzLmxlbmd0aDtcbiAgICB9XG4gICAgdGhpcy5pbmZvVGFibGVzW2NvbmZpZ1RhYmxlLm9yZGVyXSA9IGNvbmZpZ1RhYmxlO1xuICAgIGlmIChjb25maWdUYWJsZS5pc1JlbW90ZSkge1xuICAgICAgY29uZmlnVGFibGUuZGF0YVNvdXJjZSA9IG51bGw7XG4gICAgICBpZiAoY29uZmlnVGFibGUuY291bnQgPT09IG51bGwpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdoYWNlIGZhbHRhIGVsIGNvdW50Jyk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChjb25maWdUYWJsZS5kYXRhU291cmNlID09PSBudWxsKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignaGFjZSBmYWx0YSBlbCBkYXRhU291cmNlJyk7XG4gICAgICB9XG4gICAgICBjb25maWdUYWJsZS5jb3VudCA9IGNvbmZpZ1RhYmxlLmRhdGFTb3VyY2UubGVuZ3RoO1xuICAgIH1cbiAgICB0aGlzLnRhYmxlcy5uZXh0KHRoaXMuaW5mb1RhYmxlcyk7XG4gIH1cblxuICAvKipcbiAgICogRW1pdGUgdW4gZXZlbnRvIGRlIHRvdGFsIGNvbiBsYSBpbmZvcm1hY2nDs24gcGFyYSBsYSB0YWJsYSBjb3JyZXNwb25kaWVudGVcbiAgICogQHBhcmFtIGV2ZW50IHdyYXBwZXIgcXVlIGNvbnRpZW5lIGVsIGluZGljZSBkZSBsYSB0YWJsYSB5IGxhIGluZm9ybWFjacOzbiBkZSBsYSBwYWdpbmFcbiAgICovXG4gIHNldFRvdGFsKGV2ZW50OiBFdmVudERlcGVuZGVuY3k8VG90YWxUYWJsZUhlbGlzYT4pOiB2b2lkIHtcbiAgICB0aGlzLmVtaXRUb3RhbC5uZXh0KGV2ZW50KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBFbWl0ZSB1biBldmVudG8gZGUgYWdyZWdhciBwYWdpbmEgY29uIGxhIHBhZ2luYSBwYXJhIGxhIHRhYmxhIGNvcnJlc3BvbmRpZW50ZVxuICAgKiBAcGFyYW0gZXZlbnQgd3JhcHBlciBxdWUgY29udGllbmUgZWwgaW5kaWNlIGRlIGxhIHRhYmxhIHkgbGEgaW5mb3JtYWNpw7NuIGRlIGxhIHBhZ2luYVxuICAgKi9cbiAgYWRkUGFnZShldmVudDogRXZlbnREZXBlbmRlbmN5PFRbXT4pOiB2b2lkIHtcbiAgICB0aGlzLmVtaXROZXh0UGFnZS5uZXh0KGV2ZW50KTtcbiAgfVxuXG4gIHNlbGVjdEluZGV4Um93KGNvbmZpZzogQ29uZmlnVGFibGU8VD4pOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pbmZvVGFibGVzW2NvbmZpZy5vcmRlcl0pIHtcbiAgICAgIHRoaXMuaW5mb1RhYmxlc1tjb25maWcub3JkZXJdLmluZGV4Um93U2VsZWN0ID0gY29uZmlnLmluZGV4Um93U2VsZWN0O1xuICAgICAgdGhpcy50YWJsZXMubmV4dCh0aGlzLmluZm9UYWJsZXMpO1xuICAgIH1cbiAgfVxuXG5cbiAgLyoqXG4gICAqIE11ZXN0cmEgbyBlc2NvbmRlIGVsIGJvdG9uIHVuYSB0YWJsYSBlbiBlc3BlY2lmaWNvXG4gICAqIEBwYXJhbSBldmVudCBwYXJhIGluZGljYXIgZWwgaW5kZXggZGUgbGEgdGFibGEgeSBlbiBcImRhdGFcIiB0cnVlIG8gZmFsc2VcbiAgICovXG4gIGNoYW5nZVZpc2liaWxpdHlCdXR0b24oZXZlbnQ6IEV2ZW50RGVwZW5kZW5jeTxib29sZWFuPik6IHZvaWQge1xuICAgIHRoaXMuZW1pdFZpc2liaWxpdHlCdXR0b24kLm5leHQoZXZlbnQpO1xuICB9XG5cblxuICAvKipcbiAgICogRXNjb25kZSBsb3MgYm90b25lcyBkZSB0b2RhcyBsYXMgdGFibGFzXG4gICAqIEBwYXJhbSBzaG93IGluZGljYXIgc2kgc2UgbXVlc3RyYW4gbyBubyB0b2RvcyBsb3MgYm90b25lcyBkZSBsYXMgdGFibGFzXG4gICAqL1xuICBjaGFuZ2VWaXNpYmlsaXR5QWxsQnV0dG9ucyhzaG93OiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5lbWl0VmlzaWJpbGl0eUFsbEJ1dHRvbnMkLm5leHQoc2hvdyk7XG4gIH1cblxuICAvKipcbiAgICogUGFyYSBoYWJpbGl0YXIgZWwgbWFuZWpvIGRlIHNlbGVjY2nDs24gZGUgY2VsZGFcbiAgICogQHBhcmFtIGV2ZW50IHBhcmEgaW5kaWNhciBlbCBpbmRleCBkZSBsYSB0YWJsYSB5IGVuIFwiZGF0YVwiIHRydWUgbyBmYWxzZVxuICAgKi9cbiAgY2hhbmdlaXNDZWxsU2VsZWN0aW9uKGV2ZW50OiBFdmVudERlcGVuZGVuY3k8Ym9vbGVhbj4pOiB2b2lkIHtcbiAgICB0aGlzLmVtaXRJc0NlbGxTZWxlY3Rpb24kLm5leHQoZXZlbnQpO1xuICB9XG5cbiAgIC8qKlxuICAgICogUGFyYSBoYWJpbGl0YXIgZWwgY2FtYmlvIGRlIGNvbHVtbmFzXG4gICAgKiBAcGFyYW0gZXZlbnQgcGFyYSBpbmRpY2FyIGVsIGluZGV4IGRlIGxhIHRhYmxhIHkgZW4gXCJkYXRhXCIgY29sdW1uYXNcbiAgICAqL1xuICBjaGFuZ2VDb2x1bW5zQnlUYWJsZSggZXZlbnQ6IEV2ZW50RGVwZW5kZW5jeTxDb2x1bW5Db25maWdbXT4pOiB2b2lkIHtcbiAgICB0aGlzLmVtaXRDaGFuZ2VDb2x1bW5zJC5uZXh0KGV2ZW50KTtcbiAgfVxuXG59XG4iXX0=