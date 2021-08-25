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
DependencyTableHelisaService.decorators = [
    { type: Injectable }
];
DependencyTableHelisaService.ctorParameters = () => [];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVwZW5kZW5jeS10YWJsZS1oZWxpc2Euc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIuLi8uLi8uLi9wcm9qZWN0cy9oZWxpc2EtbGliL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2RlcGVuZGVuY3ktdGFibGUtaGVsaXNhL2RlcGVuZGVuY3ktdGFibGUtaGVsaXNhLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQWMsT0FBTyxFQUFtQixNQUFNLE1BQU0sQ0FBQztBQXFCNUQsTUFBTSxPQUFPLDRCQUE0QjtJQXFCdkM7UUFsQkEsV0FBTSxHQUE4QixJQUFJLE9BQU8sRUFBRSxDQUFDO1FBQ2xELGVBQVUsR0FBMEIsSUFBSSxLQUFLLEVBQUUsQ0FBQztRQUV4QywwQkFBcUIsR0FBc0MsSUFBSSxPQUFPLEVBQTRCLENBQUM7UUFDM0cseUJBQW9CLEdBQXlDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUUvRiw4QkFBeUIsR0FBcUIsSUFBSSxPQUFPLEVBQVcsQ0FBQztRQUM3RSw2QkFBd0IsR0FBd0IsSUFBSSxDQUFDLHlCQUF5QixDQUFDLFlBQVksRUFBRSxDQUFDO1FBRXRGLHlCQUFvQixHQUFzQyxJQUFJLE9BQU8sRUFBNEIsQ0FBQztRQUMxRyx3QkFBbUIsR0FBeUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFlBQVksRUFBRSxDQUFDO1FBRTdGLHVCQUFrQixHQUE2QyxJQUFJLE9BQU8sRUFBbUMsQ0FBQztRQUN0SCxzQkFBaUIsR0FBZ0QsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFlBQVksRUFBRSxDQUFDO1FBRXhHLGNBQVMsR0FBK0MsSUFBSSxPQUFPLEVBQXFDLENBQUM7UUFDekcsaUJBQVksR0FBa0MsSUFBSSxPQUFPLEVBQXdCLENBQUM7SUFFbEUsQ0FBQztJQUVqQjs7T0FFRztJQUNILFNBQVM7UUFDUCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDckIsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0gsZ0JBQWdCLENBQUMsV0FBMkIsRUFBRSx1QkFBZ0MsS0FBSztRQUNqRixJQUFJLG9CQUFvQixFQUFFO1lBQ3hCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDeEY7UUFDRCxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssSUFBSSxXQUFXLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFO1lBQ3JFLFdBQVcsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUM7U0FDNUM7UUFDRCxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsR0FBRyxXQUFXLENBQUM7UUFDakQsSUFBSSxXQUFXLENBQUMsUUFBUSxFQUFFO1lBQ3hCLFdBQVcsQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1lBQzlCLElBQUksV0FBVyxDQUFDLEtBQUssS0FBSyxJQUFJLEVBQUU7Z0JBQzlCLE1BQU0sSUFBSSxLQUFLLENBQUMscUJBQXFCLENBQUMsQ0FBQzthQUN4QztTQUNGO2FBQU07WUFDTCxJQUFJLFdBQVcsQ0FBQyxVQUFVLEtBQUssSUFBSSxFQUFFO2dCQUNuQyxNQUFNLElBQUksS0FBSyxDQUFDLDBCQUEwQixDQUFDLENBQUM7YUFDN0M7WUFDRCxXQUFXLENBQUMsS0FBSyxHQUFHLFdBQVcsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDO1NBQ25EO1FBQ0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFFRDs7O09BR0c7SUFDSCxRQUFRLENBQUMsS0FBd0M7UUFDL0MsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQUVEOzs7T0FHRztJQUNILE9BQU8sQ0FBQyxLQUEyQjtRQUNqQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBRUQsY0FBYyxDQUFDLE1BQXNCO1FBQ25DLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDakMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsY0FBYyxHQUFHLE1BQU0sQ0FBQyxjQUFjLENBQUM7WUFDckUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1NBQ25DO0lBQ0gsQ0FBQztJQUdEOzs7T0FHRztJQUNILHNCQUFzQixDQUFDLEtBQStCO1FBQ3BELElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUdEOzs7T0FHRztJQUNILDBCQUEwQixDQUFDLElBQWE7UUFDdEMsSUFBSSxDQUFDLHlCQUF5QixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gscUJBQXFCLENBQUMsS0FBK0I7UUFDbkQsSUFBSSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBRUE7OztPQUdHO0lBQ0osb0JBQW9CLENBQUUsS0FBc0M7UUFDMUQsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN0QyxDQUFDOzs7WUFsSEYsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QsIEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtDb2x1bW5Db25maWcsIEFkZFJvd0J1dHRvbiwgQ29uZmlnUm93U3R5bGVzLCBUb3RhbFRhYmxlSGVsaXNhfSBmcm9tICcuLi90YWJsZS1oZWxpc2EvdGFibGUtaGVsaXNhLmludGVyZmFjZSc7XG5pbXBvcnQgeyBFdmVudERlcGVuZGVuY3l9IGZyb20gJy4vZGVwZW5kZW5jeS10YWJsZS1oZWxpc2EuY29tcG9uZW50JztcblxuZXhwb3J0IGludGVyZmFjZSBDb25maWdUYWJsZTxUPiB7XG4gIGNvbHVtbnM6IEFycmF5PENvbHVtbkNvbmZpZz47XG4gIGlzUmVtb3RlOiBib29sZWFuO1xuICBkYXRhU291cmNlPzogQXJyYXk8VD47XG4gIGNvdW50PzogbnVtYmVyO1xuICBvcmRlcj86IG51bWJlcjtcbiAgc2hvd1RpdGxlPzogYm9vbGVhbjtcbiAgaW5kZXhSb3dTZWxlY3Q/OiBudW1iZXI7XG4gIGlzRHJhZ2dlZD86IGJvb2xlYW47XG4gIGFkZFJvd0J1dHRvbj86IEFkZFJvd0J1dHRvbjtcbiAgY29uZmlnUm93U3R5bGVzRnJvbUNvbHVtbj86IEFycmF5PENvbmZpZ1Jvd1N0eWxlczxUPj47XG4gIGNvbmZpZ0NvbHVtbkNsYXNzPzogQXJyYXk8c3RyaW5nPixcbiAgaXNDZWxsU2VsZWN0aW9uPzogYm9vbGVhbjtcbiAgYWRkQm9va0J1dHRvbj86IGJvb2xlYW47XG59XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBEZXBlbmRlbmN5VGFibGVIZWxpc2FTZXJ2aWNlPFQ+IHtcblxuXG4gIHRhYmxlczogU3ViamVjdDxDb25maWdUYWJsZTxUPltdPiA9IG5ldyBTdWJqZWN0KCk7XG4gIGluZm9UYWJsZXM6IEFycmF5PENvbmZpZ1RhYmxlPFQ+PiA9IG5ldyBBcnJheSgpO1xuXG4gIHByaXZhdGUgZW1pdFZpc2liaWxpdHlCdXR0b24kOiBTdWJqZWN0PEV2ZW50RGVwZW5kZW5jeTxib29sZWFuPj4gPSBuZXcgU3ViamVjdDxFdmVudERlcGVuZGVuY3k8Ym9vbGVhbj4+KCk7XG4gIGVtaXRWaXNpYmlsaXR5QnV0dG9uOiBPYnNlcnZhYmxlPEV2ZW50RGVwZW5kZW5jeTxib29sZWFuPj4gPSB0aGlzLmVtaXRWaXNpYmlsaXR5QnV0dG9uJC5hc09ic2VydmFibGUoKTtcblxuICBwcml2YXRlIGVtaXRWaXNpYmlsaXR5QWxsQnV0dG9ucyQ6IFN1YmplY3Q8Ym9vbGVhbj4gPSBuZXcgU3ViamVjdDxib29sZWFuPigpO1xuICBlbWl0VmlzaWJpbGl0eUFsbEJ1dHRvbnM6IE9ic2VydmFibGU8Ym9vbGVhbj4gPSB0aGlzLmVtaXRWaXNpYmlsaXR5QWxsQnV0dG9ucyQuYXNPYnNlcnZhYmxlKCk7XG5cbiAgcHJpdmF0ZSBlbWl0SXNDZWxsU2VsZWN0aW9uJDogU3ViamVjdDxFdmVudERlcGVuZGVuY3k8Ym9vbGVhbj4+ID0gbmV3IFN1YmplY3Q8RXZlbnREZXBlbmRlbmN5PGJvb2xlYW4+PigpO1xuICBlbWl0SXNDZWxsU2VsZWN0aW9uOiBPYnNlcnZhYmxlPEV2ZW50RGVwZW5kZW5jeTxib29sZWFuPj4gPSB0aGlzLmVtaXRJc0NlbGxTZWxlY3Rpb24kLmFzT2JzZXJ2YWJsZSgpO1xuXG4gIHByaXZhdGUgZW1pdENoYW5nZUNvbHVtbnMkOiBTdWJqZWN0PEV2ZW50RGVwZW5kZW5jeTxDb2x1bW5Db25maWdbXT4+ID0gbmV3IFN1YmplY3Q8RXZlbnREZXBlbmRlbmN5PENvbHVtbkNvbmZpZ1tdPj4oKTtcbiAgZW1pdENoYW5nZUNvbHVtbnM6IE9ic2VydmFibGU8RXZlbnREZXBlbmRlbmN5PENvbHVtbkNvbmZpZ1tdPj4gPSB0aGlzLmVtaXRDaGFuZ2VDb2x1bW5zJC5hc09ic2VydmFibGUoKTtcblxuICBlbWl0VG90YWw6IFN1YmplY3Q8RXZlbnREZXBlbmRlbmN5PFRvdGFsVGFibGVIZWxpc2E+PiA9IG5ldyBTdWJqZWN0PEV2ZW50RGVwZW5kZW5jeTxUb3RhbFRhYmxlSGVsaXNhPj4oKTtcbiAgZW1pdE5leHRQYWdlOiBTdWJqZWN0PEV2ZW50RGVwZW5kZW5jeTxUW10+PiA9IG5ldyBTdWJqZWN0PEV2ZW50RGVwZW5kZW5jeTxUW10+PigpO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgLyoqXG4gICAqIHJldG9ybmEgdW4gT2JzZXJ2YWJsZTxDb25maWdUYWJsZVtdPlxuICAgKi9cbiAgZ2V0VGFibGVzKCk6IE9ic2VydmFibGU8Q29uZmlnVGFibGU8VD5bXT4ge1xuICAgIHJldHVybiB0aGlzLnRhYmxlcztcbiAgfVxuXG4gIC8qKlxuICAgKiBBY3R1YWxpemEgbGFzIGRlcGVuZGVuY2lhcywgYWdyZW5kbyBsYSB0YWJsYSBxdWUgZW52aWFuIGVuIGVsIG9yZGVuIGNvcnJlc3BvbmRpZW50ZSBvIGFsIGZpbmFsLlxuICAgKiBUYW1iacOpbiByZW11ZXZlIGxhcyBkZXBlbmRlY2lhcyBxdWUgaGF5IGFwYXJ0aXIgZGUgbGEgdGFibGEgc2VndW4gc2UgaW5kaXF1ZSBlbiBlbCBwYXJhbWV0cm8uXG4gICAqIEBwYXJhbSBjb25maWdUYWJsZSBPYmpldG8gcXVlIGNvbnRpZW5lIGxhIGNvbmZpZ3VyYWNpw7NuIHBhcmEgbGEgdGFibGEuXG4gICAqIEBwYXJhbSB3aXRoUmVtb3ZlRGVwZW5kZW5jeSBib29sZWFuIHBvciBkZWZlY3RvIGVzIGZhbHNlLCBzaSBlcyAndHJ1ZScgaW5kaWNhIHF1ZSByZW11ZXZhIGxhcyBkZXBlbmRlbmNpYXMgYXBhcnRpciBkZSBlbC5cbiAgICovXG4gIHVwZGF0ZURlcGVuZGVuY3koY29uZmlnVGFibGU6IENvbmZpZ1RhYmxlPFQ+LCB3aXRoUmVtb3ZlRGVwZW5kZW5jeTogYm9vbGVhbiA9IGZhbHNlKTogdm9pZCB7XG4gICAgaWYgKHdpdGhSZW1vdmVEZXBlbmRlbmN5KSB7XG4gICAgICB0aGlzLmluZm9UYWJsZXMgPSB0aGlzLmluZm9UYWJsZXMuc2xpY2UoMCwgIWNvbmZpZ1RhYmxlLm9yZGVyID8gMCA6IGNvbmZpZ1RhYmxlLm9yZGVyKTtcbiAgICB9XG4gICAgaWYgKCFjb25maWdUYWJsZS5vcmRlciB8fCBjb25maWdUYWJsZS5vcmRlciA+PSB0aGlzLmluZm9UYWJsZXMubGVuZ3RoKSB7XG4gICAgICBjb25maWdUYWJsZS5vcmRlciA9IHRoaXMuaW5mb1RhYmxlcy5sZW5ndGg7XG4gICAgfVxuICAgIHRoaXMuaW5mb1RhYmxlc1tjb25maWdUYWJsZS5vcmRlcl0gPSBjb25maWdUYWJsZTtcbiAgICBpZiAoY29uZmlnVGFibGUuaXNSZW1vdGUpIHtcbiAgICAgIGNvbmZpZ1RhYmxlLmRhdGFTb3VyY2UgPSBudWxsO1xuICAgICAgaWYgKGNvbmZpZ1RhYmxlLmNvdW50ID09PSBudWxsKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignaGFjZSBmYWx0YSBlbCBjb3VudCcpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoY29uZmlnVGFibGUuZGF0YVNvdXJjZSA9PT0gbnVsbCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2hhY2UgZmFsdGEgZWwgZGF0YVNvdXJjZScpO1xuICAgICAgfVxuICAgICAgY29uZmlnVGFibGUuY291bnQgPSBjb25maWdUYWJsZS5kYXRhU291cmNlLmxlbmd0aDtcbiAgICB9XG4gICAgdGhpcy50YWJsZXMubmV4dCh0aGlzLmluZm9UYWJsZXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEVtaXRlIHVuIGV2ZW50byBkZSB0b3RhbCBjb24gbGEgaW5mb3JtYWNpw7NuIHBhcmEgbGEgdGFibGEgY29ycmVzcG9uZGllbnRlXG4gICAqIEBwYXJhbSBldmVudCB3cmFwcGVyIHF1ZSBjb250aWVuZSBlbCBpbmRpY2UgZGUgbGEgdGFibGEgeSBsYSBpbmZvcm1hY2nDs24gZGUgbGEgcGFnaW5hXG4gICAqL1xuICBzZXRUb3RhbChldmVudDogRXZlbnREZXBlbmRlbmN5PFRvdGFsVGFibGVIZWxpc2E+KTogdm9pZCB7XG4gICAgdGhpcy5lbWl0VG90YWwubmV4dChldmVudCk7XG4gIH1cblxuICAvKipcbiAgICogRW1pdGUgdW4gZXZlbnRvIGRlIGFncmVnYXIgcGFnaW5hIGNvbiBsYSBwYWdpbmEgcGFyYSBsYSB0YWJsYSBjb3JyZXNwb25kaWVudGVcbiAgICogQHBhcmFtIGV2ZW50IHdyYXBwZXIgcXVlIGNvbnRpZW5lIGVsIGluZGljZSBkZSBsYSB0YWJsYSB5IGxhIGluZm9ybWFjacOzbiBkZSBsYSBwYWdpbmFcbiAgICovXG4gIGFkZFBhZ2UoZXZlbnQ6IEV2ZW50RGVwZW5kZW5jeTxUW10+KTogdm9pZCB7XG4gICAgdGhpcy5lbWl0TmV4dFBhZ2UubmV4dChldmVudCk7XG4gIH1cblxuICBzZWxlY3RJbmRleFJvdyhjb25maWc6IENvbmZpZ1RhYmxlPFQ+KTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaW5mb1RhYmxlc1tjb25maWcub3JkZXJdKSB7XG4gICAgICB0aGlzLmluZm9UYWJsZXNbY29uZmlnLm9yZGVyXS5pbmRleFJvd1NlbGVjdCA9IGNvbmZpZy5pbmRleFJvd1NlbGVjdDtcbiAgICAgIHRoaXMudGFibGVzLm5leHQodGhpcy5pbmZvVGFibGVzKTtcbiAgICB9XG4gIH1cblxuXG4gIC8qKlxuICAgKiBNdWVzdHJhIG8gZXNjb25kZSBlbCBib3RvbiB1bmEgdGFibGEgZW4gZXNwZWNpZmljb1xuICAgKiBAcGFyYW0gZXZlbnQgcGFyYSBpbmRpY2FyIGVsIGluZGV4IGRlIGxhIHRhYmxhIHkgZW4gXCJkYXRhXCIgdHJ1ZSBvIGZhbHNlXG4gICAqL1xuICBjaGFuZ2VWaXNpYmlsaXR5QnV0dG9uKGV2ZW50OiBFdmVudERlcGVuZGVuY3k8Ym9vbGVhbj4pOiB2b2lkIHtcbiAgICB0aGlzLmVtaXRWaXNpYmlsaXR5QnV0dG9uJC5uZXh0KGV2ZW50KTtcbiAgfVxuXG5cbiAgLyoqXG4gICAqIEVzY29uZGUgbG9zIGJvdG9uZXMgZGUgdG9kYXMgbGFzIHRhYmxhc1xuICAgKiBAcGFyYW0gc2hvdyBpbmRpY2FyIHNpIHNlIG11ZXN0cmFuIG8gbm8gdG9kb3MgbG9zIGJvdG9uZXMgZGUgbGFzIHRhYmxhc1xuICAgKi9cbiAgY2hhbmdlVmlzaWJpbGl0eUFsbEJ1dHRvbnMoc2hvdzogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMuZW1pdFZpc2liaWxpdHlBbGxCdXR0b25zJC5uZXh0KHNob3cpO1xuICB9XG5cbiAgLyoqXG4gICAqIFBhcmEgaGFiaWxpdGFyIGVsIG1hbmVqbyBkZSBzZWxlY2Npw7NuIGRlIGNlbGRhXG4gICAqIEBwYXJhbSBldmVudCBwYXJhIGluZGljYXIgZWwgaW5kZXggZGUgbGEgdGFibGEgeSBlbiBcImRhdGFcIiB0cnVlIG8gZmFsc2VcbiAgICovXG4gIGNoYW5nZWlzQ2VsbFNlbGVjdGlvbihldmVudDogRXZlbnREZXBlbmRlbmN5PGJvb2xlYW4+KTogdm9pZCB7XG4gICAgdGhpcy5lbWl0SXNDZWxsU2VsZWN0aW9uJC5uZXh0KGV2ZW50KTtcbiAgfVxuXG4gICAvKipcbiAgICAqIFBhcmEgaGFiaWxpdGFyIGVsIGNhbWJpbyBkZSBjb2x1bW5hc1xuICAgICogQHBhcmFtIGV2ZW50IHBhcmEgaW5kaWNhciBlbCBpbmRleCBkZSBsYSB0YWJsYSB5IGVuIFwiZGF0YVwiIGNvbHVtbmFzXG4gICAgKi9cbiAgY2hhbmdlQ29sdW1uc0J5VGFibGUoIGV2ZW50OiBFdmVudERlcGVuZGVuY3k8Q29sdW1uQ29uZmlnW10+KTogdm9pZCB7XG4gICAgdGhpcy5lbWl0Q2hhbmdlQ29sdW1ucyQubmV4dChldmVudCk7XG4gIH1cblxufVxuIl19