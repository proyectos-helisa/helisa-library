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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS1oZWxpc2Euc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2hlbGlzYS1saWIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy90cmVlLWhlbGlzYS90cmVlLWhlbGlzYS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxPQUFPLEVBQUUsZUFBZSxFQUFjLE1BQU0sTUFBTSxDQUFDOztBQU81RCxNQUFNLE9BQU8saUJBQWlCO0lBNEQxQjs7UUF6RFEscUJBQWdCLEdBQUcsSUFBSSxlQUFlLENBQVMsQ0FBQyxDQUFDLENBQUM7O1FBRTFELGlCQUFZLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFlBQVksRUFBRSxDQUFDOztRQVM1QyxtQkFBYyxHQUFHLElBQUksZUFBZSxDQUFPLFNBQVMsQ0FBQyxDQUFDOztRQUU5RCx5QkFBb0IsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLFlBQVksRUFBRSxDQUFDOztRQVNoRCx1QkFBa0IsR0FBRyxJQUFJLGVBQWUsQ0FBVSxJQUFJLENBQUMsQ0FBQztRQUNoRSxlQUFVLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFlBQVksRUFBRSxDQUFDOztRQU81Qyx5QkFBb0IsR0FBRyxJQUFJLGVBQWUsQ0FBVSxJQUFJLENBQUMsQ0FBQztRQUNsRSxpQkFBWSxHQUFHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQU1oRCxvQkFBZSxHQUFHLElBQUksT0FBTyxFQUFRLENBQUM7UUFDOUMsMEJBQXFCLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQU9wRCxzQkFBaUIsR0FBRyxJQUFJLE9BQU8sRUFBUSxDQUFDO1FBQ2hELDRCQUF1QixHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUt4RCx3QkFBbUIsR0FBRyxJQUFJLE9BQU8sRUFBUSxDQUFDO1FBQ2xELDhCQUF5QixHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQU90RSxDQUFDOzs7Ozs7SUF2REQsa0JBQWtCLENBQUMsaUJBQXlCO1FBQ3hDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQztJQUNsRCxDQUFDOzs7Ozs7SUFTRCxnQkFBZ0IsQ0FBQyxJQUFTO1FBQ3RCLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ25DLENBQUM7Ozs7O0lBT0MsY0FBYyxDQUFDLE1BQWM7UUFDekIsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN6QyxDQUFDOzs7OztJQU1ELGdCQUFnQixDQUFDLFFBQWdCO1FBQzdCLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDN0MsQ0FBQzs7OztJQUtELFdBQVc7UUFDUCxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2hDLENBQUM7Ozs7O0lBTUQsYUFBYSxDQUFDLElBQVM7UUFDckIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNwQyxDQUFDOzs7OztJQUlELGVBQWUsQ0FBQyxJQUFTO1FBQ3ZCLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdEMsQ0FBQzs7O1lBN0ROLFVBQVUsU0FBQztnQkFDUixVQUFVLEVBQUUsTUFBTTthQUNyQjs7Ozs7Ozs7OztJQUlHLDZDQUEwRDs7SUFFMUQseUNBQW9EOzs7OztJQVNwRCwyQ0FBOEQ7O0lBRTlELGlEQUEwRDs7Ozs7SUFTeEQsK0NBQWdFOztJQUNoRSx1Q0FBb0Q7Ozs7O0lBT3BELGlEQUFrRTs7SUFDbEUseUNBQXdEOzs7OztJQU14RCw0Q0FBOEM7O0lBQzlDLGtEQUE0RDs7Ozs7SUFPNUQsOENBQWdEOztJQUNoRCxvREFBZ0U7Ozs7O0lBS2hFLGdEQUFrRDs7SUFDbEQsc0RBQW9FIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTdWJqZWN0LCBCZWhhdmlvclN1YmplY3QsIFN1YnNjcmliZXIgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgTm9kZSB9IGZyb20gJy4vbm9kZSc7XHJcblxyXG5cclxuQEluamVjdGFibGUoe1xyXG4gICAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUcmVlSGVsaXNhU2VydmljZSB7XHJcblxyXG4gICAgLy8gT2JzZXJ2YWJsZSBzdHJpbmcgc291cmNlc1xyXG4gICAgcHJpdmF0ZSBlbWl0Tm9kZVNlbGVjdGVkID0gbmV3IEJlaGF2aW9yU3ViamVjdDxudW1iZXI+KDEpOyAgICBcclxuICAgIC8vIE9ic2VydmFibGUgc3RyaW5nIHN0cmVhbXNcclxuICAgIG5vZGVTZWxlY3RlZCA9IHRoaXMuZW1pdE5vZGVTZWxlY3RlZC5hc09ic2VydmFibGUoKTtcclxuICAgIC8vIFNlcnZpY2UgbWVzc2FnZSBjb21tYW5kc1xyXG4gICAgY2hhbmdlTm9kZVNlbGVjdGVkKGlkUmVzaWRlbnRpYWxBcmVhOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLmVtaXROb2RlU2VsZWN0ZWQubmV4dChpZFJlc2lkZW50aWFsQXJlYSk7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICAvLyBPYnNlcnZhYmxlIHN0cmluZyBzb3VyY2VzXHJcbiAgICBwcml2YXRlIGVtaXREYXRhU291cmNlID0gbmV3IEJlaGF2aW9yU3ViamVjdDxOb2RlPih1bmRlZmluZWQpOyAgICBcclxuICAgIC8vIE9ic2VydmFibGUgc3RyaW5nIHN0cmVhbXNcclxuICAgIGRhdGFTb3VyY2VPYnNlcnZhYmxlID0gdGhpcy5lbWl0RGF0YVNvdXJjZS5hc09ic2VydmFibGUoKTtcclxuICAgIC8vIFNlcnZpY2UgbWVzc2FnZSBjb21tYW5kc1xyXG4gICAgY2hhbmdlRGF0YVNvdXJjZShkYXRhOk5vZGUpIHtcclxuICAgICAgICB0aGlzLmVtaXREYXRhU291cmNlLm5leHQoZGF0YSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgICAgXHJcbiAgICAvLyBFeHBhbmQgbm9kZSBvYnNlcnZhYmxlXHJcbiAgICAgIHByaXZhdGUgZW1pdEV4cGFuZEFsbE5vZGVzID0gbmV3IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPihudWxsKTsgICAgICAgICAgXHJcbiAgICAgIG5vZGVFeHBhbmQgPSB0aGlzLmVtaXRFeHBhbmRBbGxOb2Rlcy5hc09ic2VydmFibGUoKTsgICAgICBcclxuICAgICAgZXhwYW5kQWxsTm9kZXMoZXhwYW5kOmJvb2xlYW4pIHtcclxuICAgICAgICAgIHRoaXMuZW1pdEV4cGFuZEFsbE5vZGVzLm5leHQoZXhwYW5kKTtcclxuICAgICAgfVxyXG5cclxuXHJcbiAgICAgIC8vIENvbGxhcHNlIG5vZGUgb2JzZXJ2YWJsZVxyXG4gICAgICBwcml2YXRlIGVtaXRDb2xsYXBzZUFsbE5vZGVzID0gbmV3IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPihudWxsKTsgICAgICAgICAgXHJcbiAgICAgIG5vZGVDb2xsYXBzZSA9IHRoaXMuZW1pdENvbGxhcHNlQWxsTm9kZXMuYXNPYnNlcnZhYmxlKCk7ICAgICAgXHJcbiAgICAgIGNvbGxhcHNlQWxsTm9kZXMoY29sbGFwc2U6Ym9vbGVhbikge1xyXG4gICAgICAgICAgdGhpcy5lbWl0Q29sbGFwc2VBbGxOb2Rlcy5uZXh0KGNvbGxhcHNlKTtcclxuICAgICAgfVxyXG5cclxuXHJcbiAgICAgIHByaXZhdGUgZW1pdFJlZnJlc2hUcmVlID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcclxuICAgICAgcmVmcmVzaFRyZWVPYnNlcnZhYmxlID0gdGhpcy5lbWl0UmVmcmVzaFRyZWUuYXNPYnNlcnZhYmxlKCk7XHJcbiAgICAgIHJlZnJlc2hUcmVlKCl7XHJcbiAgICAgICAgICB0aGlzLmVtaXRSZWZyZXNoVHJlZS5uZXh0KCk7XHJcbiAgICAgIH1cclxuXHJcblxyXG5cclxuICAgICAgcHJpdmF0ZSBlbWl0RXhwYW5kT25lTm9kZSA9IG5ldyBTdWJqZWN0PE5vZGU+KCk7XHJcbiAgICAgIGV4cGFuZE9uZU5vZGVPYnNlcnZhYmxlID0gdGhpcy5lbWl0RXhwYW5kT25lTm9kZS5hc09ic2VydmFibGUoKTtcclxuICAgICAgZXhwYW5kT25lTm9kZShub2RlOk5vZGUpe1xyXG4gICAgICAgIHRoaXMuZW1pdEV4cGFuZE9uZU5vZGUubmV4dChub2RlKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcHJpdmF0ZSBlbWl0Q29sbGFwc2VPbmVOb2RlID0gbmV3IFN1YmplY3Q8Tm9kZT4oKTtcclxuICAgICAgY29sbGFwc2VPbmVOb2RlT2JzZXJ2YWJsZSA9IHRoaXMuZW1pdENvbGxhcHNlT25lTm9kZS5hc09ic2VydmFibGUoKTtcclxuICAgICAgY29sbGFwc2VPbmVOb2RlKG5vZGU6Tm9kZSl7XHJcbiAgICAgICAgdGhpcy5lbWl0Q29sbGFwc2VPbmVOb2RlLm5leHQobm9kZSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gIFxyXG59Il19