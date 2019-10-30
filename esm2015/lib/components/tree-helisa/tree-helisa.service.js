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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS1oZWxpc2Euc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2hlbGlzYS1saWIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy90cmVlLWhlbGlzYS90cmVlLWhlbGlzYS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxPQUFPLEVBQUUsZUFBZSxFQUFjLE1BQU0sTUFBTSxDQUFDOztBQU81RCxNQUFNLE9BQU8saUJBQWlCO0lBa0UxQjs7UUEvRFEscUJBQWdCLEdBQUcsSUFBSSxlQUFlLENBQVMsQ0FBQyxDQUFDLENBQUM7O1FBRTFELGlCQUFZLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFlBQVksRUFBRSxDQUFDOztRQVM1QyxtQkFBYyxHQUFHLElBQUksZUFBZSxDQUFPLFNBQVMsQ0FBQyxDQUFDOztRQUU5RCx5QkFBb0IsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLFlBQVksRUFBRSxDQUFDOztRQVNoRCx1QkFBa0IsR0FBRyxJQUFJLGVBQWUsQ0FBVSxJQUFJLENBQUMsQ0FBQztRQUNoRSxlQUFVLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFlBQVksRUFBRSxDQUFDOztRQU81Qyx5QkFBb0IsR0FBRyxJQUFJLGVBQWUsQ0FBVSxJQUFJLENBQUMsQ0FBQztRQUNsRSxpQkFBWSxHQUFHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQU1oRCxvQkFBZSxHQUFHLElBQUksT0FBTyxFQUFRLENBQUM7UUFDOUMsMEJBQXFCLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUtwRCxrQ0FBNkIsR0FBRyxJQUFJLE9BQU8sRUFBUSxDQUFDO1FBQzVELHdDQUFtQyxHQUFHLElBQUksQ0FBQyw2QkFBNkIsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQU9oRixzQkFBaUIsR0FBRyxJQUFJLE9BQU8sRUFBUSxDQUFDO1FBQ2hELDRCQUF1QixHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUt4RCx3QkFBbUIsR0FBRyxJQUFJLE9BQU8sRUFBUSxDQUFDO1FBQ2xELDhCQUF5QixHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQU90RSxDQUFDOzs7Ozs7SUE3REQsa0JBQWtCLENBQUMsaUJBQXlCO1FBQ3hDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQztJQUNsRCxDQUFDOzs7Ozs7SUFTRCxnQkFBZ0IsQ0FBQyxJQUFTO1FBQ3RCLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ25DLENBQUM7Ozs7O0lBT0MsY0FBYyxDQUFDLE1BQWM7UUFDekIsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN6QyxDQUFDOzs7OztJQU1ELGdCQUFnQixDQUFDLFFBQWdCO1FBQzdCLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDN0MsQ0FBQzs7OztJQUtELFdBQVc7UUFDUCxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2hDLENBQUM7Ozs7SUFJRCx5QkFBeUI7UUFDckIsSUFBSSxDQUFDLDZCQUE2QixDQUFDLElBQUksRUFBRSxDQUFDO0lBQzlDLENBQUM7Ozs7O0lBTUQsYUFBYSxDQUFDLElBQVM7UUFDckIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNwQyxDQUFDOzs7OztJQUlELGVBQWUsQ0FBQyxJQUFTO1FBQ3ZCLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdEMsQ0FBQzs7O1lBbkVOLFVBQVUsU0FBQztnQkFDUixVQUFVLEVBQUUsTUFBTTthQUNyQjs7Ozs7Ozs7OztJQUlHLDZDQUEwRDs7SUFFMUQseUNBQW9EOzs7OztJQVNwRCwyQ0FBOEQ7O0lBRTlELGlEQUEwRDs7Ozs7SUFTeEQsK0NBQWdFOztJQUNoRSx1Q0FBb0Q7Ozs7O0lBT3BELGlEQUFrRTs7SUFDbEUseUNBQXdEOzs7OztJQU14RCw0Q0FBOEM7O0lBQzlDLGtEQUE0RDs7Ozs7SUFLNUQsMERBQTREOztJQUM1RCxnRUFBd0Y7Ozs7O0lBT3hGLDhDQUFnRDs7SUFDaEQsb0RBQWdFOzs7OztJQUtoRSxnREFBa0Q7O0lBQ2xELHNEQUFvRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU3ViamVjdCwgQmVoYXZpb3JTdWJqZWN0LCBTdWJzY3JpYmVyIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IE5vZGUgfSBmcm9tICcuL25vZGUnO1xyXG5cclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICAgIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgVHJlZUhlbGlzYVNlcnZpY2Uge1xyXG5cclxuICAgIC8vIE9ic2VydmFibGUgc3RyaW5nIHNvdXJjZXNcclxuICAgIHByaXZhdGUgZW1pdE5vZGVTZWxlY3RlZCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8bnVtYmVyPigxKTsgICAgXHJcbiAgICAvLyBPYnNlcnZhYmxlIHN0cmluZyBzdHJlYW1zXHJcbiAgICBub2RlU2VsZWN0ZWQgPSB0aGlzLmVtaXROb2RlU2VsZWN0ZWQuYXNPYnNlcnZhYmxlKCk7XHJcbiAgICAvLyBTZXJ2aWNlIG1lc3NhZ2UgY29tbWFuZHNcclxuICAgIGNoYW5nZU5vZGVTZWxlY3RlZChpZFJlc2lkZW50aWFsQXJlYTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5lbWl0Tm9kZVNlbGVjdGVkLm5leHQoaWRSZXNpZGVudGlhbEFyZWEpO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgLy8gT2JzZXJ2YWJsZSBzdHJpbmcgc291cmNlc1xyXG4gICAgcHJpdmF0ZSBlbWl0RGF0YVNvdXJjZSA9IG5ldyBCZWhhdmlvclN1YmplY3Q8Tm9kZT4odW5kZWZpbmVkKTsgICAgXHJcbiAgICAvLyBPYnNlcnZhYmxlIHN0cmluZyBzdHJlYW1zXHJcbiAgICBkYXRhU291cmNlT2JzZXJ2YWJsZSA9IHRoaXMuZW1pdERhdGFTb3VyY2UuYXNPYnNlcnZhYmxlKCk7XHJcbiAgICAvLyBTZXJ2aWNlIG1lc3NhZ2UgY29tbWFuZHNcclxuICAgIGNoYW5nZURhdGFTb3VyY2UoZGF0YTpOb2RlKSB7XHJcbiAgICAgICAgdGhpcy5lbWl0RGF0YVNvdXJjZS5uZXh0KGRhdGEpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAgIFxyXG4gICAgLy8gRXhwYW5kIG5vZGUgb2JzZXJ2YWJsZVxyXG4gICAgICBwcml2YXRlIGVtaXRFeHBhbmRBbGxOb2RlcyA9IG5ldyBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4obnVsbCk7ICAgICAgICAgIFxyXG4gICAgICBub2RlRXhwYW5kID0gdGhpcy5lbWl0RXhwYW5kQWxsTm9kZXMuYXNPYnNlcnZhYmxlKCk7ICAgICAgXHJcbiAgICAgIGV4cGFuZEFsbE5vZGVzKGV4cGFuZDpib29sZWFuKSB7XHJcbiAgICAgICAgICB0aGlzLmVtaXRFeHBhbmRBbGxOb2Rlcy5uZXh0KGV4cGFuZCk7XHJcbiAgICAgIH1cclxuXHJcblxyXG4gICAgICAvLyBDb2xsYXBzZSBub2RlIG9ic2VydmFibGVcclxuICAgICAgcHJpdmF0ZSBlbWl0Q29sbGFwc2VBbGxOb2RlcyA9IG5ldyBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4obnVsbCk7ICAgICAgICAgIFxyXG4gICAgICBub2RlQ29sbGFwc2UgPSB0aGlzLmVtaXRDb2xsYXBzZUFsbE5vZGVzLmFzT2JzZXJ2YWJsZSgpOyAgICAgIFxyXG4gICAgICBjb2xsYXBzZUFsbE5vZGVzKGNvbGxhcHNlOmJvb2xlYW4pIHtcclxuICAgICAgICAgIHRoaXMuZW1pdENvbGxhcHNlQWxsTm9kZXMubmV4dChjb2xsYXBzZSk7XHJcbiAgICAgIH1cclxuXHJcblxyXG4gICAgICBwcml2YXRlIGVtaXRSZWZyZXNoVHJlZSA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XHJcbiAgICAgIHJlZnJlc2hUcmVlT2JzZXJ2YWJsZSA9IHRoaXMuZW1pdFJlZnJlc2hUcmVlLmFzT2JzZXJ2YWJsZSgpO1xyXG4gICAgICByZWZyZXNoVHJlZSgpe1xyXG4gICAgICAgICAgdGhpcy5lbWl0UmVmcmVzaFRyZWUubmV4dCgpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBwcml2YXRlIGVtaXRSZWZyZXNoVHJlZVdpdGhQYWdpbmF0aW9uID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcclxuICAgICAgcmVmcmVzaFRyZWVXaXRoUGFnaW5hdGlvbk9ic2VydmFibGUgPSB0aGlzLmVtaXRSZWZyZXNoVHJlZVdpdGhQYWdpbmF0aW9uLmFzT2JzZXJ2YWJsZSgpO1xyXG4gICAgICByZWZyZXNoVHJlZVdpdGhQYWdpbmF0aW9uKCl7XHJcbiAgICAgICAgICB0aGlzLmVtaXRSZWZyZXNoVHJlZVdpdGhQYWdpbmF0aW9uLm5leHQoKTtcclxuICAgICAgfVxyXG5cclxuXHJcblxyXG4gICAgICBwcml2YXRlIGVtaXRFeHBhbmRPbmVOb2RlID0gbmV3IFN1YmplY3Q8Tm9kZT4oKTtcclxuICAgICAgZXhwYW5kT25lTm9kZU9ic2VydmFibGUgPSB0aGlzLmVtaXRFeHBhbmRPbmVOb2RlLmFzT2JzZXJ2YWJsZSgpO1xyXG4gICAgICBleHBhbmRPbmVOb2RlKG5vZGU6Tm9kZSl7XHJcbiAgICAgICAgdGhpcy5lbWl0RXhwYW5kT25lTm9kZS5uZXh0KG5vZGUpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBwcml2YXRlIGVtaXRDb2xsYXBzZU9uZU5vZGUgPSBuZXcgU3ViamVjdDxOb2RlPigpO1xyXG4gICAgICBjb2xsYXBzZU9uZU5vZGVPYnNlcnZhYmxlID0gdGhpcy5lbWl0Q29sbGFwc2VPbmVOb2RlLmFzT2JzZXJ2YWJsZSgpO1xyXG4gICAgICBjb2xsYXBzZU9uZU5vZGUobm9kZTpOb2RlKXtcclxuICAgICAgICB0aGlzLmVtaXRDb2xsYXBzZU9uZU5vZGUubmV4dChub2RlKTtcclxuICAgICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgXHJcbn0iXX0=