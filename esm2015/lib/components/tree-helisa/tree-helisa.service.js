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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS1oZWxpc2Euc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2hlbGlzYS1saWIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy90cmVlLWhlbGlzYS90cmVlLWhlbGlzYS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxPQUFPLEVBQUUsZUFBZSxFQUEwQixNQUFNLE1BQU0sQ0FBQzs7QUFPeEUsTUFBTSxPQUFPLGlCQUFpQjtJQXNFMUI7O1FBbkVRLHFCQUFnQixHQUFxQyxJQUFJLGVBQWUsQ0FBa0IsQ0FBQyxDQUFDLENBQUM7O1FBRXJHLGlCQUFZLEdBQWdDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLEVBQUUsQ0FBQzs7UUFHekUsbUJBQWMsR0FBMEIsSUFBSSxlQUFlLENBQU8sU0FBUyxDQUFDLENBQUM7O1FBR3JGLHlCQUFvQixHQUFxQixJQUFJLENBQUMsY0FBYyxDQUFDLFlBQVksRUFBRSxDQUFDOztRQUdwRSx1QkFBa0IsR0FBNkIsSUFBSSxlQUFlLENBQVUsSUFBSSxDQUFDLENBQUM7UUFDMUYsZUFBVSxHQUF3QixJQUFJLENBQUMsa0JBQWtCLENBQUMsWUFBWSxFQUFFLENBQUM7O1FBR2hFLHlCQUFvQixHQUE2QixJQUFJLGVBQWUsQ0FBVSxJQUFJLENBQUMsQ0FBQztRQUM1RixpQkFBWSxHQUF3QixJQUFJLENBQUMsb0JBQW9CLENBQUMsWUFBWSxFQUFFLENBQUM7UUFFdEUsb0JBQWUsR0FBa0IsSUFBSSxPQUFPLEVBQVEsQ0FBQztRQUM3RCwwQkFBcUIsR0FBcUIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUV0RSxrQ0FBNkIsR0FBa0IsSUFBSSxPQUFPLEVBQVEsQ0FBQztRQUMzRSx3Q0FBbUMsR0FBcUIsSUFBSSxDQUFDLDZCQUE2QixDQUFDLFlBQVksRUFBRSxDQUFDO1FBRWxHLHNCQUFpQixHQUFrQixJQUFJLE9BQU8sRUFBUSxDQUFDO1FBQy9ELDRCQUF1QixHQUFxQixJQUFJLENBQUMsaUJBQWlCLENBQUMsWUFBWSxFQUFFLENBQUM7UUFFMUUsd0JBQW1CLEdBQWtCLElBQUksT0FBTyxFQUFRLENBQUM7UUFDakUsOEJBQXlCLEdBQXFCLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQXlDdEYsQ0FBQzs7Ozs7O0lBdENELGtCQUFrQixDQUFDLGlCQUFrQztRQUNqRCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFDbEQsQ0FBQzs7Ozs7O0lBR0QsZ0JBQWdCLENBQUMsSUFBVTtRQUN2QixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNuQyxDQUFDOzs7OztJQUVELGNBQWMsQ0FBQyxNQUFlO1FBQzFCLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDekMsQ0FBQzs7Ozs7SUFFRCxnQkFBZ0IsQ0FBQyxRQUFpQjtRQUM5QixJQUFJLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzdDLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1AsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNoQyxDQUFDOzs7O0lBR0QseUJBQXlCO1FBQ3JCLElBQUksQ0FBQyw2QkFBNkIsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUM5QyxDQUFDOzs7OztJQUdELGFBQWEsQ0FBQyxJQUFVO1FBQ3hCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbEMsQ0FBQzs7Ozs7SUFHRCxlQUFlLENBQUMsSUFBVTtRQUN0QixJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3hDLENBQUM7OztZQXZFSixVQUFVLFNBQUM7Z0JBQ1IsVUFBVSxFQUFFLE1BQU07YUFDckI7Ozs7Ozs7Ozs7SUFJRyw2Q0FBcUc7O0lBRXJHLHlDQUFpRjs7Ozs7SUFHakYsMkNBQXFGOztJQUdyRixpREFBNEU7Ozs7O0lBRzVFLCtDQUEwRjs7SUFDMUYsdUNBQXlFOzs7OztJQUd4RSxpREFBNEY7O0lBQzVGLHlDQUE2RTs7Ozs7SUFFOUUsNENBQTZEOztJQUM3RCxrREFBOEU7Ozs7O0lBRTlFLDBEQUEyRTs7SUFDM0UsZ0VBQTBHOzs7OztJQUUxRyw4Q0FBK0Q7O0lBQy9ELG9EQUFrRjs7Ozs7SUFFbEYsZ0RBQWlFOztJQUNqRSxzREFBc0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJqZWN0LCBCZWhhdmlvclN1YmplY3QsIFN1YnNjcmliZXIsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IE5vZGUgfSBmcm9tICcuL25vZGUnO1xuXG5cbkBJbmplY3RhYmxlKHtcbiAgICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgVHJlZUhlbGlzYVNlcnZpY2Uge1xuXG4gICAgLy8gT2JzZXJ2YWJsZSBzdHJpbmcgc291cmNlc1xuICAgIHByaXZhdGUgZW1pdE5vZGVTZWxlY3RlZDogQmVoYXZpb3JTdWJqZWN0PG51bWJlciB8IHN0cmluZz4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0PG51bWJlciB8IHN0cmluZz4oMSk7XG4gICAgLy8gT2JzZXJ2YWJsZSBzdHJpbmcgc3RyZWFtc1xuICAgIG5vZGVTZWxlY3RlZDogT2JzZXJ2YWJsZTxzdHJpbmcgfCBudW1iZXI+ID0gdGhpcy5lbWl0Tm9kZVNlbGVjdGVkLmFzT2JzZXJ2YWJsZSgpO1xuXG4gICAgLy8gT2JzZXJ2YWJsZSBzdHJpbmcgc291cmNlc1xuICAgIHByaXZhdGUgZW1pdERhdGFTb3VyY2U6IEJlaGF2aW9yU3ViamVjdDxOb2RlPiA9IG5ldyBCZWhhdmlvclN1YmplY3Q8Tm9kZT4odW5kZWZpbmVkKTtcblxuICAgIC8vIE9ic2VydmFibGUgc3RyaW5nIHN0cmVhbXNcbiAgICBkYXRhU291cmNlT2JzZXJ2YWJsZTogT2JzZXJ2YWJsZTxOb2RlPiA9IHRoaXMuZW1pdERhdGFTb3VyY2UuYXNPYnNlcnZhYmxlKCk7XG5cbiAgICAvLyBFeHBhbmQgbm9kZSBvYnNlcnZhYmxlXG4gICAgcHJpdmF0ZSBlbWl0RXhwYW5kQWxsTm9kZXM6IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPiA9IG5ldyBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4obnVsbCk7XG4gICAgbm9kZUV4cGFuZDogT2JzZXJ2YWJsZTxib29sZWFuPiA9IHRoaXMuZW1pdEV4cGFuZEFsbE5vZGVzLmFzT2JzZXJ2YWJsZSgpO1xuXG4gICAgIC8vIENvbGxhcHNlIG5vZGUgb2JzZXJ2YWJsZVxuICAgICBwcml2YXRlIGVtaXRDb2xsYXBzZUFsbE5vZGVzOiBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+KG51bGwpO1xuICAgICBub2RlQ29sbGFwc2U6IE9ic2VydmFibGU8Ym9vbGVhbj4gPSB0aGlzLmVtaXRDb2xsYXBzZUFsbE5vZGVzLmFzT2JzZXJ2YWJsZSgpO1xuXG4gICAgcHJpdmF0ZSBlbWl0UmVmcmVzaFRyZWU6IFN1YmplY3Q8dm9pZD4gPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuICAgIHJlZnJlc2hUcmVlT2JzZXJ2YWJsZTogT2JzZXJ2YWJsZTx2b2lkPiA9IHRoaXMuZW1pdFJlZnJlc2hUcmVlLmFzT2JzZXJ2YWJsZSgpO1xuXG4gICAgcHJpdmF0ZSBlbWl0UmVmcmVzaFRyZWVXaXRoUGFnaW5hdGlvbjogU3ViamVjdDx2b2lkPiA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG4gICAgcmVmcmVzaFRyZWVXaXRoUGFnaW5hdGlvbk9ic2VydmFibGU6IE9ic2VydmFibGU8dm9pZD4gPSB0aGlzLmVtaXRSZWZyZXNoVHJlZVdpdGhQYWdpbmF0aW9uLmFzT2JzZXJ2YWJsZSgpO1xuXG4gICAgcHJpdmF0ZSBlbWl0RXhwYW5kT25lTm9kZTogU3ViamVjdDxOb2RlPiA9IG5ldyBTdWJqZWN0PE5vZGU+KCk7XG4gICAgZXhwYW5kT25lTm9kZU9ic2VydmFibGU6IE9ic2VydmFibGU8Tm9kZT4gPSB0aGlzLmVtaXRFeHBhbmRPbmVOb2RlLmFzT2JzZXJ2YWJsZSgpO1xuXG4gICAgcHJpdmF0ZSBlbWl0Q29sbGFwc2VPbmVOb2RlOiBTdWJqZWN0PE5vZGU+ID0gbmV3IFN1YmplY3Q8Tm9kZT4oKTtcbiAgICBjb2xsYXBzZU9uZU5vZGVPYnNlcnZhYmxlOiBPYnNlcnZhYmxlPE5vZGU+ID0gdGhpcy5lbWl0Q29sbGFwc2VPbmVOb2RlLmFzT2JzZXJ2YWJsZSgpO1xuXG4gICAgLy8gU2VydmljZSBtZXNzYWdlIGNvbW1hbmRzXG4gICAgY2hhbmdlTm9kZVNlbGVjdGVkKGlkUmVzaWRlbnRpYWxBcmVhOiBudW1iZXIgfCBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5lbWl0Tm9kZVNlbGVjdGVkLm5leHQoaWRSZXNpZGVudGlhbEFyZWEpO1xuICAgIH1cblxuICAgIC8vIFNlcnZpY2UgbWVzc2FnZSBjb21tYW5kc1xuICAgIGNoYW5nZURhdGFTb3VyY2UoZGF0YTogTm9kZSk6IHZvaWQge1xuICAgICAgICB0aGlzLmVtaXREYXRhU291cmNlLm5leHQoZGF0YSk7XG4gICAgfVxuXG4gICAgZXhwYW5kQWxsTm9kZXMoZXhwYW5kOiBib29sZWFuKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZW1pdEV4cGFuZEFsbE5vZGVzLm5leHQoZXhwYW5kKTtcbiAgICB9XG5cbiAgICBjb2xsYXBzZUFsbE5vZGVzKGNvbGxhcHNlOiBib29sZWFuKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZW1pdENvbGxhcHNlQWxsTm9kZXMubmV4dChjb2xsYXBzZSk7XG4gICAgfVxuXG4gICAgcmVmcmVzaFRyZWUoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZW1pdFJlZnJlc2hUcmVlLm5leHQoKTtcbiAgICB9XG5cblxuICAgIHJlZnJlc2hUcmVlV2l0aFBhZ2luYXRpb24oKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZW1pdFJlZnJlc2hUcmVlV2l0aFBhZ2luYXRpb24ubmV4dCgpO1xuICAgIH1cblxuXG4gICAgZXhwYW5kT25lTm9kZShub2RlOiBOb2RlKTogdm9pZCB7XG4gICAgdGhpcy5lbWl0RXhwYW5kT25lTm9kZS5uZXh0KG5vZGUpO1xuICAgIH1cblxuXG4gICAgY29sbGFwc2VPbmVOb2RlKG5vZGU6IE5vZGUpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5lbWl0Q29sbGFwc2VPbmVOb2RlLm5leHQobm9kZSk7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoKSB7XG5cbiAgICB9XG5cbn1cbiJdfQ==