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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS1oZWxpc2Euc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2hlbGlzYS1saWIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy90cmVlLWhlbGlzYS90cmVlLWhlbGlzYS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxPQUFPLEVBQUUsZUFBZSxFQUEwQixNQUFNLE1BQU0sQ0FBQzs7QUFPeEUsTUFBTSxPQUFPLGlCQUFpQjtJQXNFMUI7O1FBbkVRLHFCQUFnQixHQUFxQyxJQUFJLGVBQWUsQ0FBa0IsQ0FBQyxDQUFDLENBQUM7O1FBRXJHLGlCQUFZLEdBQWdDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLEVBQUUsQ0FBQzs7UUFHekUsbUJBQWMsR0FBMEIsSUFBSSxlQUFlLENBQU8sU0FBUyxDQUFDLENBQUM7O1FBR3JGLHlCQUFvQixHQUFxQixJQUFJLENBQUMsY0FBYyxDQUFDLFlBQVksRUFBRSxDQUFDOztRQUdwRSx1QkFBa0IsR0FBNkIsSUFBSSxlQUFlLENBQVUsSUFBSSxDQUFDLENBQUM7UUFDMUYsZUFBVSxHQUF3QixJQUFJLENBQUMsa0JBQWtCLENBQUMsWUFBWSxFQUFFLENBQUM7O1FBR2hFLHlCQUFvQixHQUE2QixJQUFJLGVBQWUsQ0FBVSxJQUFJLENBQUMsQ0FBQztRQUM1RixpQkFBWSxHQUF3QixJQUFJLENBQUMsb0JBQW9CLENBQUMsWUFBWSxFQUFFLENBQUM7UUFFdEUsb0JBQWUsR0FBa0IsSUFBSSxPQUFPLEVBQVEsQ0FBQztRQUM3RCwwQkFBcUIsR0FBcUIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUV0RSxrQ0FBNkIsR0FBa0IsSUFBSSxPQUFPLEVBQVEsQ0FBQztRQUMzRSx3Q0FBbUMsR0FBcUIsSUFBSSxDQUFDLDZCQUE2QixDQUFDLFlBQVksRUFBRSxDQUFDO1FBRWxHLHNCQUFpQixHQUFrQixJQUFJLE9BQU8sRUFBUSxDQUFDO1FBQy9ELDRCQUF1QixHQUFxQixJQUFJLENBQUMsaUJBQWlCLENBQUMsWUFBWSxFQUFFLENBQUM7UUFFMUUsd0JBQW1CLEdBQWtCLElBQUksT0FBTyxFQUFRLENBQUM7UUFDakUsOEJBQXlCLEdBQXFCLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQXlDdEYsQ0FBQzs7Ozs7O0lBdENELGtCQUFrQixDQUFDLGlCQUFrQztRQUNqRCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFDbEQsQ0FBQzs7Ozs7O0lBR0QsZ0JBQWdCLENBQUMsSUFBVTtRQUN2QixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNuQyxDQUFDOzs7OztJQUVELGNBQWMsQ0FBQyxNQUFlO1FBQzFCLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDekMsQ0FBQzs7Ozs7SUFFRCxnQkFBZ0IsQ0FBQyxRQUFpQjtRQUM5QixJQUFJLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzdDLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1AsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNoQyxDQUFDOzs7O0lBR0QseUJBQXlCO1FBQ3JCLElBQUksQ0FBQyw2QkFBNkIsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUM5QyxDQUFDOzs7OztJQUdELGFBQWEsQ0FBQyxJQUFVO1FBQ3hCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbEMsQ0FBQzs7Ozs7SUFHRCxlQUFlLENBQUMsSUFBVTtRQUN0QixJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3hDLENBQUM7OztZQXZFSixVQUFVLFNBQUM7Z0JBQ1IsVUFBVSxFQUFFLE1BQU07YUFDckI7Ozs7Ozs7Ozs7SUFJRyw2Q0FBcUc7O0lBRXJHLHlDQUFpRjs7Ozs7SUFHakYsMkNBQXFGOztJQUdyRixpREFBNEU7Ozs7O0lBRzVFLCtDQUEwRjs7SUFDMUYsdUNBQXlFOzs7OztJQUd4RSxpREFBNEY7O0lBQzVGLHlDQUE2RTs7Ozs7SUFFOUUsNENBQTZEOztJQUM3RCxrREFBOEU7Ozs7O0lBRTlFLDBEQUEyRTs7SUFDM0UsZ0VBQTBHOzs7OztJQUUxRyw4Q0FBK0Q7O0lBQy9ELG9EQUFrRjs7Ozs7SUFFbEYsZ0RBQWlFOztJQUNqRSxzREFBc0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFN1YmplY3QsIEJlaGF2aW9yU3ViamVjdCwgU3Vic2NyaWJlciwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBOb2RlIH0gZnJvbSAnLi9ub2RlJztcclxuXHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFRyZWVIZWxpc2FTZXJ2aWNlIHtcclxuXHJcbiAgICAvLyBPYnNlcnZhYmxlIHN0cmluZyBzb3VyY2VzXHJcbiAgICBwcml2YXRlIGVtaXROb2RlU2VsZWN0ZWQ6IEJlaGF2aW9yU3ViamVjdDxudW1iZXIgfCBzdHJpbmc+ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxudW1iZXIgfCBzdHJpbmc+KDEpO1xyXG4gICAgLy8gT2JzZXJ2YWJsZSBzdHJpbmcgc3RyZWFtc1xyXG4gICAgbm9kZVNlbGVjdGVkOiBPYnNlcnZhYmxlPHN0cmluZyB8IG51bWJlcj4gPSB0aGlzLmVtaXROb2RlU2VsZWN0ZWQuYXNPYnNlcnZhYmxlKCk7XHJcblxyXG4gICAgLy8gT2JzZXJ2YWJsZSBzdHJpbmcgc291cmNlc1xyXG4gICAgcHJpdmF0ZSBlbWl0RGF0YVNvdXJjZTogQmVoYXZpb3JTdWJqZWN0PE5vZGU+ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxOb2RlPih1bmRlZmluZWQpO1xyXG5cclxuICAgIC8vIE9ic2VydmFibGUgc3RyaW5nIHN0cmVhbXNcclxuICAgIGRhdGFTb3VyY2VPYnNlcnZhYmxlOiBPYnNlcnZhYmxlPE5vZGU+ID0gdGhpcy5lbWl0RGF0YVNvdXJjZS5hc09ic2VydmFibGUoKTtcclxuXHJcbiAgICAvLyBFeHBhbmQgbm9kZSBvYnNlcnZhYmxlXHJcbiAgICBwcml2YXRlIGVtaXRFeHBhbmRBbGxOb2RlczogQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPihudWxsKTtcclxuICAgIG5vZGVFeHBhbmQ6IE9ic2VydmFibGU8Ym9vbGVhbj4gPSB0aGlzLmVtaXRFeHBhbmRBbGxOb2Rlcy5hc09ic2VydmFibGUoKTtcclxuXHJcbiAgICAgLy8gQ29sbGFwc2Ugbm9kZSBvYnNlcnZhYmxlXHJcbiAgICAgcHJpdmF0ZSBlbWl0Q29sbGFwc2VBbGxOb2RlczogQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPihudWxsKTtcclxuICAgICBub2RlQ29sbGFwc2U6IE9ic2VydmFibGU8Ym9vbGVhbj4gPSB0aGlzLmVtaXRDb2xsYXBzZUFsbE5vZGVzLmFzT2JzZXJ2YWJsZSgpO1xyXG5cclxuICAgIHByaXZhdGUgZW1pdFJlZnJlc2hUcmVlOiBTdWJqZWN0PHZvaWQ+ID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcclxuICAgIHJlZnJlc2hUcmVlT2JzZXJ2YWJsZTogT2JzZXJ2YWJsZTx2b2lkPiA9IHRoaXMuZW1pdFJlZnJlc2hUcmVlLmFzT2JzZXJ2YWJsZSgpO1xyXG5cclxuICAgIHByaXZhdGUgZW1pdFJlZnJlc2hUcmVlV2l0aFBhZ2luYXRpb246IFN1YmplY3Q8dm9pZD4gPSBuZXcgU3ViamVjdDx2b2lkPigpO1xyXG4gICAgcmVmcmVzaFRyZWVXaXRoUGFnaW5hdGlvbk9ic2VydmFibGU6IE9ic2VydmFibGU8dm9pZD4gPSB0aGlzLmVtaXRSZWZyZXNoVHJlZVdpdGhQYWdpbmF0aW9uLmFzT2JzZXJ2YWJsZSgpO1xyXG5cclxuICAgIHByaXZhdGUgZW1pdEV4cGFuZE9uZU5vZGU6IFN1YmplY3Q8Tm9kZT4gPSBuZXcgU3ViamVjdDxOb2RlPigpO1xyXG4gICAgZXhwYW5kT25lTm9kZU9ic2VydmFibGU6IE9ic2VydmFibGU8Tm9kZT4gPSB0aGlzLmVtaXRFeHBhbmRPbmVOb2RlLmFzT2JzZXJ2YWJsZSgpO1xyXG5cclxuICAgIHByaXZhdGUgZW1pdENvbGxhcHNlT25lTm9kZTogU3ViamVjdDxOb2RlPiA9IG5ldyBTdWJqZWN0PE5vZGU+KCk7XHJcbiAgICBjb2xsYXBzZU9uZU5vZGVPYnNlcnZhYmxlOiBPYnNlcnZhYmxlPE5vZGU+ID0gdGhpcy5lbWl0Q29sbGFwc2VPbmVOb2RlLmFzT2JzZXJ2YWJsZSgpO1xyXG5cclxuICAgIC8vIFNlcnZpY2UgbWVzc2FnZSBjb21tYW5kc1xyXG4gICAgY2hhbmdlTm9kZVNlbGVjdGVkKGlkUmVzaWRlbnRpYWxBcmVhOiBudW1iZXIgfCBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmVtaXROb2RlU2VsZWN0ZWQubmV4dChpZFJlc2lkZW50aWFsQXJlYSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gU2VydmljZSBtZXNzYWdlIGNvbW1hbmRzXHJcbiAgICBjaGFuZ2VEYXRhU291cmNlKGRhdGE6IE5vZGUpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmVtaXREYXRhU291cmNlLm5leHQoZGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgZXhwYW5kQWxsTm9kZXMoZXhwYW5kOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5lbWl0RXhwYW5kQWxsTm9kZXMubmV4dChleHBhbmQpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbGxhcHNlQWxsTm9kZXMoY29sbGFwc2U6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmVtaXRDb2xsYXBzZUFsbE5vZGVzLm5leHQoY29sbGFwc2UpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlZnJlc2hUcmVlKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZW1pdFJlZnJlc2hUcmVlLm5leHQoKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcmVmcmVzaFRyZWVXaXRoUGFnaW5hdGlvbigpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmVtaXRSZWZyZXNoVHJlZVdpdGhQYWdpbmF0aW9uLm5leHQoKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgZXhwYW5kT25lTm9kZShub2RlOiBOb2RlKTogdm9pZCB7XHJcbiAgICB0aGlzLmVtaXRFeHBhbmRPbmVOb2RlLm5leHQobm9kZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGNvbGxhcHNlT25lTm9kZShub2RlOiBOb2RlKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5lbWl0Q29sbGFwc2VPbmVOb2RlLm5leHQobm9kZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcblxyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=