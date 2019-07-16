/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
export class TreeHelisaService {
    constructor() {
        // Observable string sources
        this.emitNodeSelected = new BehaviorSubject(1);
        // Observable string streams
        this.nodeSelected = this.emitNodeSelected.asObservable();
        // Observable string sources
        this.emitDataSource = new BehaviorSubject(undefined);
        // Observable string streams
        this.dataSourceObservable = this.emitDataSource.asObservable();
        // Expand node observable
        this.emitExpandAllNodes = new BehaviorSubject(null);
        this.nodeExpand = this.emitExpandAllNodes.asObservable();
        // Collapse node observable
        this.emitCollapseAllNodes = new BehaviorSubject(null);
        this.nodeCollapse = this.emitCollapseAllNodes.asObservable();
        this.emitRefreshTree = new Subject();
        this.refreshTreeObservable = this.emitRefreshTree.asObservable();
        this.emitRefreshTreeWithPagination = new Subject();
        this.refreshTreeWithPaginationObservable = this.emitRefreshTreeWithPagination.asObservable();
        this.emitExpandOneNode = new Subject();
        this.expandOneNodeObservable = this.emitExpandOneNode.asObservable();
        this.emitCollapseOneNode = new Subject();
        this.collapseOneNodeObservable = this.emitCollapseOneNode.asObservable();
    }
    // Service message commands
    /**
     * @param {?} idResidentialArea
     * @return {?}
     */
    changeNodeSelected(idResidentialArea) {
        this.emitNodeSelected.next(idResidentialArea);
    }
    // Service message commands
    /**
     * @param {?} data
     * @return {?}
     */
    changeDataSource(data) {
        this.emitDataSource.next(data);
    }
    /**
     * @param {?} expand
     * @return {?}
     */
    expandAllNodes(expand) {
        this.emitExpandAllNodes.next(expand);
    }
    /**
     * @param {?} collapse
     * @return {?}
     */
    collapseAllNodes(collapse) {
        this.emitCollapseAllNodes.next(collapse);
    }
    /**
     * @return {?}
     */
    refreshTree() {
        this.emitRefreshTree.next();
    }
    /**
     * @return {?}
     */
    refreshTreeWithPagination() {
        this.emitRefreshTreeWithPagination.next();
    }
    /**
     * @param {?} node
     * @return {?}
     */
    expandOneNode(node) {
        this.emitExpandOneNode.next(node);
    }
    /**
     * @param {?} node
     * @return {?}
     */
    collapseOneNode(node) {
        this.emitCollapseOneNode.next(node);
    }
}
TreeHelisaService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
TreeHelisaService.ctorParameters = () => [];
/** @nocollapse */ TreeHelisaService.ngInjectableDef = i0.defineInjectable({ factory: function TreeHelisaService_Factory() { return new TreeHelisaService(); }, token: TreeHelisaService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    TreeHelisaService.prototype.emitNodeSelected;
    /** @type {?} */
    TreeHelisaService.prototype.nodeSelected;
    /**
     * @type {?}
     * @private
     */
    TreeHelisaService.prototype.emitDataSource;
    /** @type {?} */
    TreeHelisaService.prototype.dataSourceObservable;
    /**
     * @type {?}
     * @private
     */
    TreeHelisaService.prototype.emitExpandAllNodes;
    /** @type {?} */
    TreeHelisaService.prototype.nodeExpand;
    /**
     * @type {?}
     * @private
     */
    TreeHelisaService.prototype.emitCollapseAllNodes;
    /** @type {?} */
    TreeHelisaService.prototype.nodeCollapse;
    /**
     * @type {?}
     * @private
     */
    TreeHelisaService.prototype.emitRefreshTree;
    /** @type {?} */
    TreeHelisaService.prototype.refreshTreeObservable;
    /**
     * @type {?}
     * @private
     */
    TreeHelisaService.prototype.emitRefreshTreeWithPagination;
    /** @type {?} */
    TreeHelisaService.prototype.refreshTreeWithPaginationObservable;
    /**
     * @type {?}
     * @private
     */
    TreeHelisaService.prototype.emitExpandOneNode;
    /** @type {?} */
    TreeHelisaService.prototype.expandOneNodeObservable;
    /**
     * @type {?}
     * @private
     */
    TreeHelisaService.prototype.emitCollapseOneNode;
    /** @type {?} */
    TreeHelisaService.prototype.collapseOneNodeObservable;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS1oZWxpc2Euc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2hlbGlzYS1saWIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy90cmVlLWhlbGlzYS90cmVlLWhlbGlzYS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxPQUFPLEVBQUUsZUFBZSxFQUFjLE1BQU0sTUFBTSxDQUFDOztBQU81RCxNQUFNLE9BQU8saUJBQWlCO0lBa0UxQjs7UUEvRFEscUJBQWdCLEdBQUcsSUFBSSxlQUFlLENBQWtCLENBQUMsQ0FBQyxDQUFDOztRQUVuRSxpQkFBWSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLEVBQUUsQ0FBQzs7UUFTNUMsbUJBQWMsR0FBRyxJQUFJLGVBQWUsQ0FBTyxTQUFTLENBQUMsQ0FBQzs7UUFFOUQseUJBQW9CLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxZQUFZLEVBQUUsQ0FBQzs7UUFTaEQsdUJBQWtCLEdBQUcsSUFBSSxlQUFlLENBQVUsSUFBSSxDQUFDLENBQUM7UUFDaEUsZUFBVSxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxZQUFZLEVBQUUsQ0FBQzs7UUFPNUMseUJBQW9CLEdBQUcsSUFBSSxlQUFlLENBQVUsSUFBSSxDQUFDLENBQUM7UUFDbEUsaUJBQVksR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQUMsWUFBWSxFQUFFLENBQUM7UUFNaEQsb0JBQWUsR0FBRyxJQUFJLE9BQU8sRUFBUSxDQUFDO1FBQzlDLDBCQUFxQixHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsWUFBWSxFQUFFLENBQUM7UUFLcEQsa0NBQTZCLEdBQUcsSUFBSSxPQUFPLEVBQVEsQ0FBQztRQUM1RCx3Q0FBbUMsR0FBRyxJQUFJLENBQUMsNkJBQTZCLENBQUMsWUFBWSxFQUFFLENBQUM7UUFPaEYsc0JBQWlCLEdBQUcsSUFBSSxPQUFPLEVBQVEsQ0FBQztRQUNoRCw0QkFBdUIsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsWUFBWSxFQUFFLENBQUM7UUFLeEQsd0JBQW1CLEdBQUcsSUFBSSxPQUFPLEVBQVEsQ0FBQztRQUNsRCw4QkFBeUIsR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsWUFBWSxFQUFFLENBQUM7SUFPdEUsQ0FBQzs7Ozs7O0lBN0RELGtCQUFrQixDQUFDLGlCQUFrQztRQUNqRCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFDbEQsQ0FBQzs7Ozs7O0lBU0QsZ0JBQWdCLENBQUMsSUFBUztRQUN0QixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNuQyxDQUFDOzs7OztJQU9DLGNBQWMsQ0FBQyxNQUFjO1FBQ3pCLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDekMsQ0FBQzs7Ozs7SUFNRCxnQkFBZ0IsQ0FBQyxRQUFnQjtRQUM3QixJQUFJLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzdDLENBQUM7Ozs7SUFLRCxXQUFXO1FBQ1AsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNoQyxDQUFDOzs7O0lBSUQseUJBQXlCO1FBQ3JCLElBQUksQ0FBQyw2QkFBNkIsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUM5QyxDQUFDOzs7OztJQU1ELGFBQWEsQ0FBQyxJQUFTO1FBQ3JCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDcEMsQ0FBQzs7Ozs7SUFJRCxlQUFlLENBQUMsSUFBUztRQUN2QixJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3RDLENBQUM7OztZQW5FTixVQUFVLFNBQUM7Z0JBQ1IsVUFBVSxFQUFFLE1BQU07YUFDckI7Ozs7Ozs7Ozs7SUFJRyw2Q0FBbUU7O0lBRW5FLHlDQUFvRDs7Ozs7SUFTcEQsMkNBQThEOztJQUU5RCxpREFBMEQ7Ozs7O0lBU3hELCtDQUFnRTs7SUFDaEUsdUNBQW9EOzs7OztJQU9wRCxpREFBa0U7O0lBQ2xFLHlDQUF3RDs7Ozs7SUFNeEQsNENBQThDOztJQUM5QyxrREFBNEQ7Ozs7O0lBSzVELDBEQUE0RDs7SUFDNUQsZ0VBQXdGOzs7OztJQU94Riw4Q0FBZ0Q7O0lBQ2hELG9EQUFnRTs7Ozs7SUFLaEUsZ0RBQWtEOztJQUNsRCxzREFBb0UiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFN1YmplY3QsIEJlaGF2aW9yU3ViamVjdCwgU3Vic2NyaWJlciB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBOb2RlIH0gZnJvbSAnLi9ub2RlJztcclxuXHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFRyZWVIZWxpc2FTZXJ2aWNlIHtcclxuXHJcbiAgICAvLyBPYnNlcnZhYmxlIHN0cmluZyBzb3VyY2VzXHJcbiAgICBwcml2YXRlIGVtaXROb2RlU2VsZWN0ZWQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PG51bWJlciB8IHN0cmluZz4oMSk7XHJcbiAgICAvLyBPYnNlcnZhYmxlIHN0cmluZyBzdHJlYW1zXHJcbiAgICBub2RlU2VsZWN0ZWQgPSB0aGlzLmVtaXROb2RlU2VsZWN0ZWQuYXNPYnNlcnZhYmxlKCk7XHJcbiAgICAvLyBTZXJ2aWNlIG1lc3NhZ2UgY29tbWFuZHNcclxuICAgIGNoYW5nZU5vZGVTZWxlY3RlZChpZFJlc2lkZW50aWFsQXJlYTogbnVtYmVyIHwgc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5lbWl0Tm9kZVNlbGVjdGVkLm5leHQoaWRSZXNpZGVudGlhbEFyZWEpO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgLy8gT2JzZXJ2YWJsZSBzdHJpbmcgc291cmNlc1xyXG4gICAgcHJpdmF0ZSBlbWl0RGF0YVNvdXJjZSA9IG5ldyBCZWhhdmlvclN1YmplY3Q8Tm9kZT4odW5kZWZpbmVkKTsgICAgXHJcbiAgICAvLyBPYnNlcnZhYmxlIHN0cmluZyBzdHJlYW1zXHJcbiAgICBkYXRhU291cmNlT2JzZXJ2YWJsZSA9IHRoaXMuZW1pdERhdGFTb3VyY2UuYXNPYnNlcnZhYmxlKCk7XHJcbiAgICAvLyBTZXJ2aWNlIG1lc3NhZ2UgY29tbWFuZHNcclxuICAgIGNoYW5nZURhdGFTb3VyY2UoZGF0YTpOb2RlKSB7XHJcbiAgICAgICAgdGhpcy5lbWl0RGF0YVNvdXJjZS5uZXh0KGRhdGEpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAgIFxyXG4gICAgLy8gRXhwYW5kIG5vZGUgb2JzZXJ2YWJsZVxyXG4gICAgICBwcml2YXRlIGVtaXRFeHBhbmRBbGxOb2RlcyA9IG5ldyBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4obnVsbCk7ICAgICAgICAgIFxyXG4gICAgICBub2RlRXhwYW5kID0gdGhpcy5lbWl0RXhwYW5kQWxsTm9kZXMuYXNPYnNlcnZhYmxlKCk7ICAgICAgXHJcbiAgICAgIGV4cGFuZEFsbE5vZGVzKGV4cGFuZDpib29sZWFuKSB7XHJcbiAgICAgICAgICB0aGlzLmVtaXRFeHBhbmRBbGxOb2Rlcy5uZXh0KGV4cGFuZCk7XHJcbiAgICAgIH1cclxuXHJcblxyXG4gICAgICAvLyBDb2xsYXBzZSBub2RlIG9ic2VydmFibGVcclxuICAgICAgcHJpdmF0ZSBlbWl0Q29sbGFwc2VBbGxOb2RlcyA9IG5ldyBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4obnVsbCk7ICAgICAgICAgIFxyXG4gICAgICBub2RlQ29sbGFwc2UgPSB0aGlzLmVtaXRDb2xsYXBzZUFsbE5vZGVzLmFzT2JzZXJ2YWJsZSgpOyAgICAgIFxyXG4gICAgICBjb2xsYXBzZUFsbE5vZGVzKGNvbGxhcHNlOmJvb2xlYW4pIHtcclxuICAgICAgICAgIHRoaXMuZW1pdENvbGxhcHNlQWxsTm9kZXMubmV4dChjb2xsYXBzZSk7XHJcbiAgICAgIH1cclxuXHJcblxyXG4gICAgICBwcml2YXRlIGVtaXRSZWZyZXNoVHJlZSA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XHJcbiAgICAgIHJlZnJlc2hUcmVlT2JzZXJ2YWJsZSA9IHRoaXMuZW1pdFJlZnJlc2hUcmVlLmFzT2JzZXJ2YWJsZSgpO1xyXG4gICAgICByZWZyZXNoVHJlZSgpe1xyXG4gICAgICAgICAgdGhpcy5lbWl0UmVmcmVzaFRyZWUubmV4dCgpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBwcml2YXRlIGVtaXRSZWZyZXNoVHJlZVdpdGhQYWdpbmF0aW9uID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcclxuICAgICAgcmVmcmVzaFRyZWVXaXRoUGFnaW5hdGlvbk9ic2VydmFibGUgPSB0aGlzLmVtaXRSZWZyZXNoVHJlZVdpdGhQYWdpbmF0aW9uLmFzT2JzZXJ2YWJsZSgpO1xyXG4gICAgICByZWZyZXNoVHJlZVdpdGhQYWdpbmF0aW9uKCl7XHJcbiAgICAgICAgICB0aGlzLmVtaXRSZWZyZXNoVHJlZVdpdGhQYWdpbmF0aW9uLm5leHQoKTtcclxuICAgICAgfVxyXG5cclxuXHJcblxyXG4gICAgICBwcml2YXRlIGVtaXRFeHBhbmRPbmVOb2RlID0gbmV3IFN1YmplY3Q8Tm9kZT4oKTtcclxuICAgICAgZXhwYW5kT25lTm9kZU9ic2VydmFibGUgPSB0aGlzLmVtaXRFeHBhbmRPbmVOb2RlLmFzT2JzZXJ2YWJsZSgpO1xyXG4gICAgICBleHBhbmRPbmVOb2RlKG5vZGU6Tm9kZSl7XHJcbiAgICAgICAgdGhpcy5lbWl0RXhwYW5kT25lTm9kZS5uZXh0KG5vZGUpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBwcml2YXRlIGVtaXRDb2xsYXBzZU9uZU5vZGUgPSBuZXcgU3ViamVjdDxOb2RlPigpO1xyXG4gICAgICBjb2xsYXBzZU9uZU5vZGVPYnNlcnZhYmxlID0gdGhpcy5lbWl0Q29sbGFwc2VPbmVOb2RlLmFzT2JzZXJ2YWJsZSgpO1xyXG4gICAgICBjb2xsYXBzZU9uZU5vZGUobm9kZTpOb2RlKXtcclxuICAgICAgICB0aGlzLmVtaXRDb2xsYXBzZU9uZU5vZGUubmV4dChub2RlKTtcclxuICAgICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgXHJcbn1cclxuIl19