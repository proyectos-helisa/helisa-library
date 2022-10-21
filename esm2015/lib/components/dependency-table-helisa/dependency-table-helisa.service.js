import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
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
        this.emitEnabledButton$ = new Subject();
        this.emitEnabledButton = this.emitEnabledButton$.asObservable();
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
     * * Deshabilita el botón y le pone un titulo sobre el over
     * @param event para indicar el index de la tabla y en "data" true o false
     */
    changeEnabledButton(event) {
        this.emitEnabledButton$.next(event);
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
DependencyTableHelisaService.decorators = [
    { type: Injectable }
];
DependencyTableHelisaService.ctorParameters = () => [];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVwZW5kZW5jeS10YWJsZS1oZWxpc2Euc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIuLi8uLi8uLi9wcm9qZWN0cy9oZWxpc2EtbGliL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2RlcGVuZGVuY3ktdGFibGUtaGVsaXNhL2RlcGVuZGVuY3ktdGFibGUtaGVsaXNhLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQWMsT0FBTyxFQUFtQixNQUFNLE1BQU0sQ0FBQztBQXNCNUQsTUFBTSxPQUFPLDRCQUE0QjtJQXdCdkM7UUFyQkEsV0FBTSxHQUE4QixJQUFJLE9BQU8sRUFBRSxDQUFDO1FBQ2xELGVBQVUsR0FBMEIsSUFBSSxLQUFLLEVBQUUsQ0FBQztRQUV4QywwQkFBcUIsR0FBc0MsSUFBSSxPQUFPLEVBQTRCLENBQUM7UUFDM0cseUJBQW9CLEdBQXlDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUUvRiw4QkFBeUIsR0FBcUIsSUFBSSxPQUFPLEVBQVcsQ0FBQztRQUM3RSw2QkFBd0IsR0FBd0IsSUFBSSxDQUFDLHlCQUF5QixDQUFDLFlBQVksRUFBRSxDQUFDO1FBRXRGLHlCQUFvQixHQUFzQyxJQUFJLE9BQU8sRUFBNEIsQ0FBQztRQUMxRyx3QkFBbUIsR0FBeUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFlBQVksRUFBRSxDQUFDO1FBRTdGLHVCQUFrQixHQUE2QyxJQUFJLE9BQU8sRUFBbUMsQ0FBQztRQUN0SCxzQkFBaUIsR0FBZ0QsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFlBQVksRUFBRSxDQUFDO1FBRWhHLHVCQUFrQixHQUFrRSxJQUFJLE9BQU8sRUFBd0QsQ0FBQztRQUNoSyxzQkFBaUIsR0FBcUUsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFlBQVksRUFBRSxDQUFDO1FBRTdILGNBQVMsR0FBK0Ms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QW9CLENBQUUsS0FBc0M7UUFDMUQsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN0QyxDQUFDOzs7WUE3SEYsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QsIEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtDb2x1bW5Db25maWcsIEFkZFJvd0J1dHRvbiwgQ29uZmlnUm93U3R5bGVzLCBUb3RhbFRhYmxlSGVsaXNhLCBFbXB0eU1lc3NhZ2VDb2x1bW59IGZyb20gJy4uL3RhYmxlLWhlbGlzYS90YWJsZS1oZWxpc2EuaW50ZXJmYWNlJztcbmltcG9ydCB7IEV2ZW50RGVwZW5kZW5jeX0gZnJvbSAnLi9kZXBlbmRlbmN5LXRhYmxlLWhlbGlzYS5jb21wb25lbnQnO1xuXG5leHBvcnQgaW50ZXJmYWNlIENvbmZpZ1RhYmxlPFQ+IHtcbiAgY29sdW1uczogQXJyYXk8Q29sdW1uQ29uZmlnPjtcbiAgaXNSZW1vdGU6IGJvb2xlYW47XG4gIGRhdGFTb3VyY2U/OiBBcnJheTxUPjtcbiAgY291bnQ/OiBudW1iZXI7XG4gIG9yZGVyPzogbnVtYmVyO1xuICBzaG93VGl0bGU/OiBib29sZWFuO1xuICBpbmRleFJvd1NlbGVjdD86IG51bWJlcjtcbiAgaXNEcmFnZ2VkPzogYm9vbGVhbjtcbiAgYWRkUm93QnV0dG9uPzogQWRkUm93QnV0dG9uO1xuICBjb25maWdSb3dTdHlsZXNGcm9tQ29sdW1uPzogQXJyYXk8Q29uZmlnUm93U3R5bGVzPFQ+PjtcbiAgY29uZmlnQ29sdW1uQ2xhc3M/OiBBcnJheTxzdHJpbmc+LFxuICBpc0NlbGxTZWxlY3Rpb24/OiBib29sZWFuO1xuICBhZGRCb29rQnV0dG9uPzogYm9vbGVhbjtcbiAgZW1wdHlNZXNzYWdlRm9yQ29sdW1uPzogRW1wdHlNZXNzYWdlQ29sdW1uO1xufVxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRGVwZW5kZW5jeVRhYmxlSGVsaXNhU2VydmljZTxUPiB7XG5cblxuICB0YWJsZXM6IFN1YmplY3Q8Q29uZmlnVGFibGU8VD5bXT4gPSBuZXcgU3ViamVjdCgpO1xuICBpbmZvVGFibGVzOiBBcnJheTxDb25maWdUYWJsZTxUPj4gPSBuZXcgQXJyYXkoKTtcblxuICBwcml2YXRlIGVtaXRWaXNpYmlsaXR5QnV0dG9uJDogU3ViamVjdDxFdmVudERlcGVuZGVuY3k8Ym9vbGVhbj4+ID0gbmV3IFN1YmplY3Q8RXZlbnREZXBlbmRlbmN5PGJvb2xlYW4+PigpO1xuICBlbWl0VmlzaWJpbGl0eUJ1dHRvbjogT2JzZXJ2YWJsZTxFdmVudERlcGVuZGVuY3k8Ym9vbGVhbj4+ID0gdGhpcy5lbWl0VmlzaWJpbGl0eUJ1dHRvbiQuYXNPYnNlcnZhYmxlKCk7XG5cbiAgcHJpdmF0ZSBlbWl0VmlzaWJpbGl0eUFsbEJ1dHRvbnMkOiBTdWJqZWN0PGJvb2xlYW4+ID0gbmV3IFN1YmplY3Q8Ym9vbGVhbj4oKTtcbiAgZW1pdFZpc2liaWxpdHlBbGxCdXR0b25zOiBPYnNlcnZhYmxlPGJvb2xlYW4+ID0gdGhpcy5lbWl0VmlzaWJpbGl0eUFsbEJ1dHRvbnMkLmFzT2JzZXJ2YWJsZSgpO1xuXG4gIHByaXZhdGUgZW1pdElzQ2VsbFNlbGVjdGlvbiQ6IFN1YmplY3Q8RXZlbnREZXBlbmRlbmN5PGJvb2xlYW4+PiA9IG5ldyBTdWJqZWN0PEV2ZW50RGVwZW5kZW5jeTxib29sZWFuPj4oKTtcbiAgZW1pdElzQ2VsbFNlbGVjdGlvbjogT2JzZXJ2YWJsZTxFdmVudERlcGVuZGVuY3k8Ym9vbGVhbj4+ID0gdGhpcy5lbWl0SXNDZWxsU2VsZWN0aW9uJC5hc09ic2VydmFibGUoKTtcblxuICBwcml2YXRlIGVtaXRDaGFuZ2VDb2x1bW5zJDogU3ViamVjdDxFdmVudERlcGVuZGVuY3k8Q29sdW1uQ29uZmlnW10+PiA9IG5ldyBTdWJqZWN0PEV2ZW50RGVwZW5kZW5jeTxDb2x1bW5Db25maWdbXT4+KCk7XG4gIGVtaXRDaGFuZ2VDb2x1bW5zOiBPYnNlcnZhYmxlPEV2ZW50RGVwZW5kZW5jeTxDb2x1bW5Db25maWdbXT4+ID0gdGhpcy5lbWl0Q2hhbmdlQ29sdW1ucyQuYXNPYnNlcnZhYmxlKCk7XG5cbiAgcHJpdmF0ZSBlbWl0RW5hYmxlZEJ1dHRvbiQ6IFN1YmplY3Q8RXZlbnREZXBlbmRlbmN5PHtpc0Rpc2FibGVkOiBib29sZWFuLCB0ZXh0OiBzdHJpbmd9Pj4gPSBuZXcgU3ViamVjdDxFdmVudERlcGVuZGVuY3k8e2lzRGlzYWJsZWQ6IGJvb2xlYW4sIHRleHQ6IHN0cmluZ30+PigpO1xuICBlbWl0RW5hYmxlZEJ1dHRvbjogT2JzZXJ2YWJsZTxFdmVudERlcGVuZGVuY3k8e2lzRGlzYWJsZWQ6IGJvb2xlYW4sIHRleHQ6IHN0cmluZ30+PiA9IHRoaXMuZW1pdEVuYWJsZWRCdXR0b24kLmFzT2JzZXJ2YWJsZSgpO1xuXG4gIGVtaXRUb3RhbDogU3ViamVjdDxFdmVudERlcGVuZGVuY3k8VG90YWxUYWJsZUhlbGlzYT4+ID0gbmV3IFN1YmplY3Q8RXZlbnREZXBlbmRlbmN5PFRvdGFsVGFibGVIZWxpc2E+PigpO1xuICBlbWl0TmV4dFBhZ2U6IFN1YmplY3Q8RXZlbnREZXBlbmRlbmN5PFRbXT4+ID0gbmV3IFN1YmplY3Q8RXZlbnREZXBlbmRlbmN5PFRbXT4+KCk7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICAvKipcbiAgICogcmV0b3JuYSB1biBPYnNlcnZhYmxlPENvbmZpZ1RhYmxlW10+XG4gICAqL1xuICBnZXRUYWJsZXMoKTogT2JzZXJ2YWJsZTxDb25maWdUYWJsZTxUPltdPiB7XG4gICAgcmV0dXJuIHRoaXMudGFibGVzO1xuICB9XG5cbiAgLyoqXG4gICAqIEFjdHVhbGl6YSBsYXMgZGVwZW5kZW5jaWFzLCBhZ3JlbmRvIGxhIHRhYmxhIHF1ZSBlbnZpYW4gZW4gZWwgb3JkZW4gY29ycmVzcG9uZGllbnRlIG8gYWwgZmluYWwuXG4gICAqIFRhbWJpw6luIHJlbXVldmUgbGFzIGRlcGVuZGVjaWFzIHF1ZSBoYXkgYXBhcnRpciBkZSBsYSB0YWJsYSBzZWd1biBzZSBpbmRpcXVlIGVuIGVsIHBhcmFtZXRyby5cbiAgICogQHBhcmFtIGNvbmZpZ1RhYmxlIE9iamV0byBxdWUgY29udGllbmUgbGEgY29uZmlndXJhY2nDs24gcGFyYSBsYSB0YWJsYS5cbiAgICogQHBhcmFtIHdpdGhSZW1vdmVEZXBlbmRlbmN5IGJvb2xlYW4gcG9yIGRlZmVjdG8gZXMgZmFsc2UsIHNpIGVzICd0cnVlJyBpbmRpY2EgcXVlIHJlbXVldmEgbGFzIGRlcGVuZGVuY2lhcyBhcGFydGlyIGRlIGVsLlxuICAgKi9cbiAgdXBkYXRlRGVwZW5kZW5jeShjb25maWdUYWJsZTogQ29uZmlnVGFibGU8VD4sIHdpdGhSZW1vdmVEZXBlbmRlbmN5OiBib29sZWFuID0gZmFsc2UpOiB2b2lkIHtcbiAgICBpZiAod2l0aFJlbW92ZURlcGVuZGVuY3kpIHtcbiAgICAgIHRoaXMuaW5mb1RhYmxlcyA9IHRoaXMuaW5mb1RhYmxlcy5zbGljZSgwLCAhY29uZmlnVGFibGUub3JkZXIgPyAwIDogY29uZmlnVGFibGUub3JkZXIpO1xuICAgIH1cbiAgICBpZiAoIWNvbmZpZ1RhYmxlLm9yZGVyIHx8IGNvbmZpZ1RhYmxlLm9yZGVyID49IHRoaXMuaW5mb1RhYmxlcy5sZW5ndGgpIHtcbiAgICAgIGNvbmZpZ1RhYmxlLm9yZGVyID0gdGhpcy5pbmZvVGFibGVzLmxlbmd0aDtcbiAgICB9XG4gICAgdGhpcy5pbmZvVGFibGVzW2NvbmZpZ1RhYmxlLm9yZGVyXSA9IGNvbmZpZ1RhYmxlO1xuICAgIGlmIChjb25maWdUYWJsZS5pc1JlbW90ZSkge1xuICAgICAgY29uZmlnVGFibGUuZGF0YVNvdXJjZSA9IG51bGw7XG4gICAgICBpZiAoY29uZmlnVGFibGUuY291bnQgPT09IG51bGwpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdoYWNlIGZhbHRhIGVsIGNvdW50Jyk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChjb25maWdUYWJsZS5kYXRhU291cmNlID09PSBudWxsKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignaGFjZSBmYWx0YSBlbCBkYXRhU291cmNlJyk7XG4gICAgICB9XG4gICAgICBjb25maWdUYWJsZS5jb3VudCA9IGNvbmZpZ1RhYmxlLmRhdGFTb3VyY2UubGVuZ3RoO1xuICAgIH1cbiAgICB0aGlzLnRhYmxlcy5uZXh0KHRoaXMuaW5mb1RhYmxlcyk7XG4gIH1cblxuICAvKipcbiAgICogRW1pdGUgdW4gZXZlbnRvIGRlIHRvdGFsIGNvbiBsYSBpbmZvcm1hY2nDs24gcGFyYSBsYSB0YWJsYSBjb3JyZXNwb25kaWVudGVcbiAgICogQHBhcmFtIGV2ZW50IHdyYXBwZXIgcXVlIGNvbnRpZW5lIGVsIGluZGljZSBkZSBsYSB0YWJsYSB5IGxhIGluZm9ybWFjacOzbiBkZSBsYSBwYWdpbmFcbiAgICovXG4gIHNldFRvdGFsKGV2ZW50OiBFdmVudERlcGVuZGVuY3k8VG90YWxUYWJsZUhlbGlzYT4pOiB2b2lkIHtcbiAgICB0aGlzLmVtaXRUb3RhbC5uZXh0KGV2ZW50KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBFbWl0ZSB1biBldmVudG8gZGUgYWdyZWdhciBwYWdpbmEgY29uIGxhIHBhZ2luYSBwYXJhIGxhIHRhYmxhIGNvcnJlc3BvbmRpZW50ZVxuICAgKiBAcGFyYW0gZXZlbnQgd3JhcHBlciBxdWUgY29udGllbmUgZWwgaW5kaWNlIGRlIGxhIHRhYmxhIHkgbGEgaW5mb3JtYWNpw7NuIGRlIGxhIHBhZ2luYVxuICAgKi9cbiAgYWRkUGFnZShldmVudDogRXZlbnREZXBlbmRlbmN5PFRbXT4pOiB2b2lkIHtcbiAgICB0aGlzLmVtaXROZXh0UGFnZS5uZXh0KGV2ZW50KTtcbiAgfVxuXG4gIHNlbGVjdEluZGV4Um93KGNvbmZpZzogQ29uZmlnVGFibGU8VD4pOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pbmZvVGFibGVzW2NvbmZpZy5vcmRlcl0pIHtcbiAgICAgIHRoaXMuaW5mb1RhYmxlc1tjb25maWcub3JkZXJdLmluZGV4Um93U2VsZWN0ID0gY29uZmlnLmluZGV4Um93U2VsZWN0O1xuICAgICAgdGhpcy50YWJsZXMubmV4dCh0aGlzLmluZm9UYWJsZXMpO1xuICAgIH1cbiAgfVxuXG5cbiAgLyoqXG4gICAqICogRGVzaGFiaWxpdGEgZWwgYm90w7NuIHkgbGUgcG9uZSB1biB0aXR1bG8gc29icmUgZWwgb3ZlclxuICAgKiBAcGFyYW0gZXZlbnQgcGFyYSBpbmRpY2FyIGVsIGluZGV4IGRlIGxhIHRhYmxhIHkgZW4gXCJkYXRhXCIgdHJ1ZSBvIGZhbHNlXG4gICAqL1xuICBjaGFuZ2VFbmFibGVkQnV0dG9uKGV2ZW50OiBFdmVudERlcGVuZGVuY3k8e2lzRGlzYWJsZWQ6IGJvb2xlYW4sIHRleHQ6IHN0cmluZ30+KTogdm9pZCB7XG4gICAgdGhpcy5lbWl0RW5hYmxlZEJ1dHRvbiQubmV4dChldmVudCk7XG4gIH1cblxuICAvKipcbiAgICogTXVlc3RyYSBvIGVzY29uZGUgZWwgYm90b24gdW5hIHRhYmxhIGVuIGVzcGVjaWZpY29cbiAgICogQHBhcmFtIGV2ZW50IHBhcmEgaW5kaWNhciBlbCBpbmRleCBkZSBsYSB0YWJsYSB5IGVuIFwiZGF0YVwiIHRydWUgbyBmYWxzZVxuICAgKi9cbiAgIGNoYW5nZVZpc2liaWxpdHlCdXR0b24oZXZlbnQ6IEV2ZW50RGVwZW5kZW5jeTxib29sZWFuPik6IHZvaWQge1xuICAgIHRoaXMuZW1pdFZpc2liaWxpdHlCdXR0b24kLm5leHQoZXZlbnQpO1xuICB9XG5cblxuICAvKipcbiAgICogRXNjb25kZSBsb3MgYm90b25lcyBkZSB0b2RhcyBsYXMgdGFibGFzXG4gICAqIEBwYXJhbSBzaG93IGluZGljYXIgc2kgc2UgbXVlc3RyYW4gbyBubyB0b2RvcyBsb3MgYm90b25lcyBkZSBsYXMgdGFibGFzXG4gICAqL1xuICBjaGFuZ2VWaXNpYmlsaXR5QWxsQnV0dG9ucyhzaG93OiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5lbWl0VmlzaWJpbGl0eUFsbEJ1dHRvbnMkLm5leHQoc2hvdyk7XG4gIH1cblxuICAvKipcbiAgICogUGFyYSBoYWJpbGl0YXIgZWwgbWFuZWpvIGRlIHNlbGVjY2nDs24gZGUgY2VsZGFcbiAgICogQHBhcmFtIGV2ZW50IHBhcmEgaW5kaWNhciBlbCBpbmRleCBkZSBsYSB0YWJsYSB5IGVuIFwiZGF0YVwiIHRydWUgbyBmYWxzZVxuICAgKi9cbiAgY2hhbmdlaXNDZWxsU2VsZWN0aW9uKGV2ZW50OiBFdmVudERlcGVuZGVuY3k8Ym9vbGVhbj4pOiB2b2lkIHtcbiAgICB0aGlzLmVtaXRJc0NlbGxTZWxlY3Rpb24kLm5leHQoZXZlbnQpO1xuICB9XG5cbiAgIC8qKlxuICAgICogUGFyYSBoYWJpbGl0YXIgZWwgY2FtYmlvIGRlIGNvbHVtbmFzXG4gICAgKiBAcGFyYW0gZXZlbnQgcGFyYSBpbmRpY2FyIGVsIGluZGV4IGRlIGxhIHRhYmxhIHkgZW4gXCJkYXRhXCIgY29sdW1uYXNcbiAgICAqL1xuICBjaGFuZ2VDb2x1bW5zQnlUYWJsZSggZXZlbnQ6IEV2ZW50RGVwZW5kZW5jeTxDb2x1bW5Db25maWdbXT4pOiB2b2lkIHtcbiAgICB0aGlzLmVtaXRDaGFuZ2VDb2x1bW5zJC5uZXh0KGV2ZW50KTtcbiAgfVxuXG59XG4iXX0=