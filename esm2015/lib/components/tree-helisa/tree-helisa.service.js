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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS1oZWxpc2Euc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2hlbGlzYS1saWIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy90cmVlLWhlbGlzYS90cmVlLWhlbGlzYS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxPQUFPLEVBQUUsZUFBZSxFQUFjLE1BQU0sTUFBTSxDQUFDOztBQU81RCxNQUFNLE9BQU8saUJBQWlCO0lBa0UxQjs7UUEvRFEscUJBQWdCLEdBQUcsSUFBSSxlQUFlLENBQWtCLENBQUMsQ0FBQyxDQUFDOztRQUVuRSxpQkFBWSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLEVBQUUsQ0FBQzs7UUFTNUMsbUJBQWMsR0FBRyxJQUFJLGVBQWUsQ0FBTyxTQUFTLENBQUMsQ0FBQzs7UUFFOUQseUJBQW9CLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxZQUFZLEVBQUUsQ0FBQzs7UUFTaEQsdUJBQWtCLEdBQUcsSUFBSSxlQUFlLENBQVUsSUFBSSxDQUFDLENBQUM7UUFDaEUsZUFBVSxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxZQUFZLEVBQUUsQ0FBQzs7UUFPNUMseUJBQW9CLEdBQUcsSUFBSSxlQUFlLENBQVUsSUFBSSxDQUFDLENBQUM7UUFDbEUsaUJBQVksR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQUMsWUFBWSxFQUFFLENBQUM7UUFNaEQsb0JBQWUsR0FBRyxJQUFJLE9BQU8sRUFBUSxDQUFDO1FBQzlDLDBCQUFxQixHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsWUFBWSxFQUFFLENBQUM7UUFLcEQsa0NBQTZCLEdBQUcsSUFBSSxPQUFPLEVBQVEsQ0FBQztRQUM1RCx3Q0FBbUMsR0FBRyxJQUFJLENBQUMsNkJBQTZCLENBQUMsWUFBWSxFQUFFLENBQUM7UUFPaEYsc0JBQWlCLEdBQUcsSUFBSSxPQUFPLEVBQVEsQ0FBQztRQUNoRCw0QkFBdUIsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsWUFBWSxFQUFFLENBQUM7UUFLeEQsd0JBQW1CLEdBQUcsSUFBSSxPQUFPLEVBQVEsQ0FBQztRQUNsRCw4QkFBeUIsR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsWUFBWSxFQUFFLENBQUM7SUFPdEUsQ0FBQzs7Ozs7O0lBN0RELGtCQUFrQixDQUFDLGlCQUFrQztRQUNqRCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFDbEQsQ0FBQzs7Ozs7O0lBU0QsZ0JBQWdCLENBQUMsSUFBUztRQUN0QixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNuQyxDQUFDOzs7OztJQU9DLGNBQWMsQ0FBQyxNQUFjO1FBQ3pCLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDekMsQ0FBQzs7Ozs7SUFNRCxnQkFBZ0IsQ0FBQyxRQUFnQjtRQUM3QixJQUFJLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzdDLENBQUM7Ozs7SUFLRCxXQUFXO1FBQ1AsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNoQyxDQUFDOzs7O0lBSUQseUJBQXlCO1FBQ3JCLElBQUksQ0FBQyw2QkFBNkIsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUM5QyxDQUFDOzs7OztJQU1ELGFBQWEsQ0FBQyxJQUFTO1FBQ3JCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDcEMsQ0FBQzs7Ozs7SUFJRCxlQUFlLENBQUMsSUFBUztRQUN2QixJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3RDLENBQUM7OztZQW5FTixVQUFVLFNBQUM7Z0JBQ1IsVUFBVSxFQUFFLE1BQU07YUFDckI7Ozs7Ozs7Ozs7SUFJRyw2Q0FBbUU7O0lBRW5FLHlDQUFvRDs7Ozs7SUFTcEQsMkNBQThEOztJQUU5RCxpREFBMEQ7Ozs7O0lBU3hELCtDQUFnRTs7SUFDaEUsdUNBQW9EOzs7OztJQU9wRCxpREFBa0U7O0lBQ2xFLHlDQUF3RDs7Ozs7SUFNeEQsNENBQThDOztJQUM5QyxrREFBNEQ7Ozs7O0lBSzVELDBEQUE0RDs7SUFDNUQsZ0VBQXdGOzs7OztJQU94Riw4Q0FBZ0Q7O0lBQ2hELG9EQUFnRTs7Ozs7SUFLaEUsZ0RBQWtEOztJQUNsRCxzREFBb0UiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJqZWN0LCBCZWhhdmlvclN1YmplY3QsIFN1YnNjcmliZXIgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IE5vZGUgfSBmcm9tICcuL25vZGUnO1xuXG5cbkBJbmplY3RhYmxlKHtcbiAgICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgVHJlZUhlbGlzYVNlcnZpY2Uge1xuXG4gICAgLy8gT2JzZXJ2YWJsZSBzdHJpbmcgc291cmNlc1xuICAgIHByaXZhdGUgZW1pdE5vZGVTZWxlY3RlZCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8bnVtYmVyIHwgc3RyaW5nPigxKTtcbiAgICAvLyBPYnNlcnZhYmxlIHN0cmluZyBzdHJlYW1zXG4gICAgbm9kZVNlbGVjdGVkID0gdGhpcy5lbWl0Tm9kZVNlbGVjdGVkLmFzT2JzZXJ2YWJsZSgpO1xuICAgIC8vIFNlcnZpY2UgbWVzc2FnZSBjb21tYW5kc1xuICAgIGNoYW5nZU5vZGVTZWxlY3RlZChpZFJlc2lkZW50aWFsQXJlYTogbnVtYmVyIHwgc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuZW1pdE5vZGVTZWxlY3RlZC5uZXh0KGlkUmVzaWRlbnRpYWxBcmVhKTtcbiAgICB9XG5cblxuXG4gICAgLy8gT2JzZXJ2YWJsZSBzdHJpbmcgc291cmNlc1xuICAgIHByaXZhdGUgZW1pdERhdGFTb3VyY2UgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PE5vZGU+KHVuZGVmaW5lZCk7ICAgIFxuICAgIC8vIE9ic2VydmFibGUgc3RyaW5nIHN0cmVhbXNcbiAgICBkYXRhU291cmNlT2JzZXJ2YWJsZSA9IHRoaXMuZW1pdERhdGFTb3VyY2UuYXNPYnNlcnZhYmxlKCk7XG4gICAgLy8gU2VydmljZSBtZXNzYWdlIGNvbW1hbmRzXG4gICAgY2hhbmdlRGF0YVNvdXJjZShkYXRhOk5vZGUpIHtcbiAgICAgICAgdGhpcy5lbWl0RGF0YVNvdXJjZS5uZXh0KGRhdGEpO1xuICAgIH1cblxuXG4gICAgICBcbiAgICAvLyBFeHBhbmQgbm9kZSBvYnNlcnZhYmxlXG4gICAgICBwcml2YXRlIGVtaXRFeHBhbmRBbGxOb2RlcyA9IG5ldyBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4obnVsbCk7ICAgICAgICAgIFxuICAgICAgbm9kZUV4cGFuZCA9IHRoaXMuZW1pdEV4cGFuZEFsbE5vZGVzLmFzT2JzZXJ2YWJsZSgpOyAgICAgIFxuICAgICAgZXhwYW5kQWxsTm9kZXMoZXhwYW5kOmJvb2xlYW4pIHtcbiAgICAgICAgICB0aGlzLmVtaXRFeHBhbmRBbGxOb2Rlcy5uZXh0KGV4cGFuZCk7XG4gICAgICB9XG5cblxuICAgICAgLy8gQ29sbGFwc2Ugbm9kZSBvYnNlcnZhYmxlXG4gICAgICBwcml2YXRlIGVtaXRDb2xsYXBzZUFsbE5vZGVzID0gbmV3IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPihudWxsKTsgICAgICAgICAgXG4gICAgICBub2RlQ29sbGFwc2UgPSB0aGlzLmVtaXRDb2xsYXBzZUFsbE5vZGVzLmFzT2JzZXJ2YWJsZSgpOyAgICAgIFxuICAgICAgY29sbGFwc2VBbGxOb2Rlcyhjb2xsYXBzZTpib29sZWFuKSB7XG4gICAgICAgICAgdGhpcy5lbWl0Q29sbGFwc2VBbGxOb2Rlcy5uZXh0KGNvbGxhcHNlKTtcbiAgICAgIH1cblxuXG4gICAgICBwcml2YXRlIGVtaXRSZWZyZXNoVHJlZSA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG4gICAgICByZWZyZXNoVHJlZU9ic2VydmFibGUgPSB0aGlzLmVtaXRSZWZyZXNoVHJlZS5hc09ic2VydmFibGUoKTtcbiAgICAgIHJlZnJlc2hUcmVlKCl7XG4gICAgICAgICAgdGhpcy5lbWl0UmVmcmVzaFRyZWUubmV4dCgpO1xuICAgICAgfVxuXG4gICAgICBwcml2YXRlIGVtaXRSZWZyZXNoVHJlZVdpdGhQYWdpbmF0aW9uID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcbiAgICAgIHJlZnJlc2hUcmVlV2l0aFBhZ2luYXRpb25PYnNlcnZhYmxlID0gdGhpcy5lbWl0UmVmcmVzaFRyZWVXaXRoUGFnaW5hdGlvbi5hc09ic2VydmFibGUoKTtcbiAgICAgIHJlZnJlc2hUcmVlV2l0aFBhZ2luYXRpb24oKXtcbiAgICAgICAgICB0aGlzLmVtaXRSZWZyZXNoVHJlZVdpdGhQYWdpbmF0aW9uLm5leHQoKTtcbiAgICAgIH1cblxuXG5cbiAgICAgIHByaXZhdGUgZW1pdEV4cGFuZE9uZU5vZGUgPSBuZXcgU3ViamVjdDxOb2RlPigpO1xuICAgICAgZXhwYW5kT25lTm9kZU9ic2VydmFibGUgPSB0aGlzLmVtaXRFeHBhbmRPbmVOb2RlLmFzT2JzZXJ2YWJsZSgpO1xuICAgICAgZXhwYW5kT25lTm9kZShub2RlOk5vZGUpe1xuICAgICAgICB0aGlzLmVtaXRFeHBhbmRPbmVOb2RlLm5leHQobm9kZSk7XG4gICAgICB9XG5cbiAgICAgIHByaXZhdGUgZW1pdENvbGxhcHNlT25lTm9kZSA9IG5ldyBTdWJqZWN0PE5vZGU+KCk7XG4gICAgICBjb2xsYXBzZU9uZU5vZGVPYnNlcnZhYmxlID0gdGhpcy5lbWl0Q29sbGFwc2VPbmVOb2RlLmFzT2JzZXJ2YWJsZSgpO1xuICAgICAgY29sbGFwc2VPbmVOb2RlKG5vZGU6Tm9kZSl7XG4gICAgICAgIHRoaXMuZW1pdENvbGxhcHNlT25lTm9kZS5uZXh0KG5vZGUpO1xuICAgICAgfVxuXG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgXG4gICAgfVxuICBcbn1cbiJdfQ==