/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
var TreeHelisaService = /** @class */ (function () {
    function TreeHelisaService() {
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
    // Service message commands
    /**
     * @param {?} idResidentialArea
     * @return {?}
     */
    TreeHelisaService.prototype.changeNodeSelected = 
    // Service message commands
    /**
     * @param {?} idResidentialArea
     * @return {?}
     */
    function (idResidentialArea) {
        this.emitNodeSelected.next(idResidentialArea);
    };
    // Service message commands
    // Service message commands
    /**
     * @param {?} data
     * @return {?}
     */
    TreeHelisaService.prototype.changeDataSource = 
    // Service message commands
    /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        this.emitDataSource.next(data);
    };
    /**
     * @param {?} expand
     * @return {?}
     */
    TreeHelisaService.prototype.expandAllNodes = /**
     * @param {?} expand
     * @return {?}
     */
    function (expand) {
        this.emitExpandAllNodes.next(expand);
    };
    /**
     * @param {?} collapse
     * @return {?}
     */
    TreeHelisaService.prototype.collapseAllNodes = /**
     * @param {?} collapse
     * @return {?}
     */
    function (collapse) {
        this.emitCollapseAllNodes.next(collapse);
    };
    /**
     * @return {?}
     */
    TreeHelisaService.prototype.refreshTree = /**
     * @return {?}
     */
    function () {
        this.emitRefreshTree.next();
    };
    /**
     * @return {?}
     */
    TreeHelisaService.prototype.refreshTreeWithPagination = /**
     * @return {?}
     */
    function () {
        this.emitRefreshTreeWithPagination.next();
    };
    /**
     * @param {?} node
     * @return {?}
     */
    TreeHelisaService.prototype.expandOneNode = /**
     * @param {?} node
     * @return {?}
     */
    function (node) {
        this.emitExpandOneNode.next(node);
    };
    /**
     * @param {?} node
     * @return {?}
     */
    TreeHelisaService.prototype.collapseOneNode = /**
     * @param {?} node
     * @return {?}
     */
    function (node) {
        this.emitCollapseOneNode.next(node);
    };
    TreeHelisaService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    TreeHelisaService.ctorParameters = function () { return []; };
    /** @nocollapse */ TreeHelisaService.ngInjectableDef = i0.defineInjectable({ factory: function TreeHelisaService_Factory() { return new TreeHelisaService(); }, token: TreeHelisaService, providedIn: "root" });
    return TreeHelisaService;
}());
export { TreeHelisaService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS1oZWxpc2Euc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2hlbGlzYS1saWIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy90cmVlLWhlbGlzYS90cmVlLWhlbGlzYS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxPQUFPLEVBQUUsZUFBZSxFQUEwQixNQUFNLE1BQU0sQ0FBQzs7QUFJeEU7SUF5RUk7O1FBbkVRLHFCQUFnQixHQUFxQyxJQUFJLGVBQWUsQ0FBa0IsQ0FBQyxDQUFDLENBQUM7O1FBRXJHLGlCQUFZLEdBQWdDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLEVBQUUsQ0FBQzs7UUFHekUsbUJBQWMsR0FBMEIsSUFBSSxlQUFlLENBQU8sU0FBUyxDQUFDLENBQUM7O1FBR3JGLHlCQUFvQixHQUFxQixJQUFJLENBQUMsY0FBYyxDQUFDLFlBQVksRUFBRSxDQUFDOztRQUdwRSx1QkFBa0IsR0FBNkIsSUFBSSxlQUFlLENBQVUsSUFBSSxDQUFDLENBQUM7UUFDMUYsZUFBVSxHQUF3QixJQUFJLENBQUMsa0JBQWtCLENBQUMsWUFBWSxFQUFFLENBQUM7O1FBR2hFLHlCQUFvQixHQUE2QixJQUFJLGVBQWUsQ0FBVSxJQUFJLENBQUMsQ0FBQztRQUM1RixpQkFBWSxHQUF3QixJQUFJLENBQUMsb0JBQW9CLENBQUMsWUFBWSxFQUFFLENBQUM7UUFFdEUsb0JBQWUsR0FBa0IsSUFBSSxPQUFPLEVBQVEsQ0FBQztRQUM3RCwwQkFBcUIsR0FBcUIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUV0RSxrQ0FBNkIsR0FBa0IsSUFBSSxPQUFPLEVBQVEsQ0FBQztRQUMzRSx3Q0FBbUMsR0FBcUIsSUFBSSxDQUFDLDZCQUE2QixDQUFDLFlBQVksRUFBRSxDQUFDO1FBRWxHLHNCQUFpQixHQUFrQixJQUFJLE9BQU8sRUFBUSxDQUFDO1FBQy9ELDRCQUF1QixHQUFxQixJQUFJLENBQUMsaUJBQWlCLENBQUMsWUFBWSxFQUFFLENBQUM7UUFFMUUsd0JBQW1CLEdBQWtCLElBQUksT0FBTyxFQUFRLENBQUM7UUFDakUsOEJBQXlCLEdBQXFCLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQXlDdEYsQ0FBQztJQXZDRCwyQkFBMkI7Ozs7OztJQUMzQiw4Q0FBa0I7Ozs7OztJQUFsQixVQUFtQixpQkFBa0M7UUFDakQsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFFRCwyQkFBMkI7Ozs7OztJQUMzQiw0Q0FBZ0I7Ozs7OztJQUFoQixVQUFpQixJQUFVO1FBQ3ZCLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ25DLENBQUM7Ozs7O0lBRUQsMENBQWM7Ozs7SUFBZCxVQUFlLE1BQWU7UUFDMUIsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN6QyxDQUFDOzs7OztJQUVELDRDQUFnQjs7OztJQUFoQixVQUFpQixRQUFpQjtRQUM5QixJQUFJLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzdDLENBQUM7Ozs7SUFFRCx1Q0FBVzs7O0lBQVg7UUFDSSxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2hDLENBQUM7Ozs7SUFHRCxxREFBeUI7OztJQUF6QjtRQUNJLElBQUksQ0FBQyw2QkFBNkIsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUM5QyxDQUFDOzs7OztJQUdELHlDQUFhOzs7O0lBQWIsVUFBYyxJQUFVO1FBQ3hCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbEMsQ0FBQzs7Ozs7SUFHRCwyQ0FBZTs7OztJQUFmLFVBQWdCLElBQVU7UUFDdEIsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN4QyxDQUFDOztnQkF2RUosVUFBVSxTQUFDO29CQUNSLFVBQVUsRUFBRSxNQUFNO2lCQUNyQjs7Ozs7NEJBUEQ7Q0FrRkMsQUE3RUQsSUE2RUM7U0ExRVksaUJBQWlCOzs7Ozs7SUFHMUIsNkNBQXFHOztJQUVyRyx5Q0FBaUY7Ozs7O0lBR2pGLDJDQUFxRjs7SUFHckYsaURBQTRFOzs7OztJQUc1RSwrQ0FBMEY7O0lBQzFGLHVDQUF5RTs7Ozs7SUFHeEUsaURBQTRGOztJQUM1Rix5Q0FBNkU7Ozs7O0lBRTlFLDRDQUE2RDs7SUFDN0Qsa0RBQThFOzs7OztJQUU5RSwwREFBMkU7O0lBQzNFLGdFQUEwRzs7Ozs7SUFFMUcsOENBQStEOztJQUMvRCxvREFBa0Y7Ozs7O0lBRWxGLGdEQUFpRTs7SUFDakUsc0RBQXNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3ViamVjdCwgQmVoYXZpb3JTdWJqZWN0LCBTdWJzY3JpYmVyLCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBOb2RlIH0gZnJvbSAnLi9ub2RlJztcblxuXG5ASW5qZWN0YWJsZSh7XG4gICAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFRyZWVIZWxpc2FTZXJ2aWNlIHtcblxuICAgIC8vIE9ic2VydmFibGUgc3RyaW5nIHNvdXJjZXNcbiAgICBwcml2YXRlIGVtaXROb2RlU2VsZWN0ZWQ6IEJlaGF2aW9yU3ViamVjdDxudW1iZXIgfCBzdHJpbmc+ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxudW1iZXIgfCBzdHJpbmc+KDEpO1xuICAgIC8vIE9ic2VydmFibGUgc3RyaW5nIHN0cmVhbXNcbiAgICBub2RlU2VsZWN0ZWQ6IE9ic2VydmFibGU8c3RyaW5nIHwgbnVtYmVyPiA9IHRoaXMuZW1pdE5vZGVTZWxlY3RlZC5hc09ic2VydmFibGUoKTtcblxuICAgIC8vIE9ic2VydmFibGUgc3RyaW5nIHNvdXJjZXNcbiAgICBwcml2YXRlIGVtaXREYXRhU291cmNlOiBCZWhhdmlvclN1YmplY3Q8Tm9kZT4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0PE5vZGU+KHVuZGVmaW5lZCk7XG5cbiAgICAvLyBPYnNlcnZhYmxlIHN0cmluZyBzdHJlYW1zXG4gICAgZGF0YVNvdXJjZU9ic2VydmFibGU6IE9ic2VydmFibGU8Tm9kZT4gPSB0aGlzLmVtaXREYXRhU291cmNlLmFzT2JzZXJ2YWJsZSgpO1xuXG4gICAgLy8gRXhwYW5kIG5vZGUgb2JzZXJ2YWJsZVxuICAgIHByaXZhdGUgZW1pdEV4cGFuZEFsbE5vZGVzOiBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+KG51bGwpO1xuICAgIG5vZGVFeHBhbmQ6IE9ic2VydmFibGU8Ym9vbGVhbj4gPSB0aGlzLmVtaXRFeHBhbmRBbGxOb2Rlcy5hc09ic2VydmFibGUoKTtcblxuICAgICAvLyBDb2xsYXBzZSBub2RlIG9ic2VydmFibGVcbiAgICAgcHJpdmF0ZSBlbWl0Q29sbGFwc2VBbGxOb2RlczogQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPihudWxsKTtcbiAgICAgbm9kZUNvbGxhcHNlOiBPYnNlcnZhYmxlPGJvb2xlYW4+ID0gdGhpcy5lbWl0Q29sbGFwc2VBbGxOb2Rlcy5hc09ic2VydmFibGUoKTtcblxuICAgIHByaXZhdGUgZW1pdFJlZnJlc2hUcmVlOiBTdWJqZWN0PHZvaWQ+ID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcbiAgICByZWZyZXNoVHJlZU9ic2VydmFibGU6IE9ic2VydmFibGU8dm9pZD4gPSB0aGlzLmVtaXRSZWZyZXNoVHJlZS5hc09ic2VydmFibGUoKTtcblxuICAgIHByaXZhdGUgZW1pdFJlZnJlc2hUcmVlV2l0aFBhZ2luYXRpb246IFN1YmplY3Q8dm9pZD4gPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuICAgIHJlZnJlc2hUcmVlV2l0aFBhZ2luYXRpb25PYnNlcnZhYmxlOiBPYnNlcnZhYmxlPHZvaWQ+ID0gdGhpcy5lbWl0UmVmcmVzaFRyZWVXaXRoUGFnaW5hdGlvbi5hc09ic2VydmFibGUoKTtcblxuICAgIHByaXZhdGUgZW1pdEV4cGFuZE9uZU5vZGU6IFN1YmplY3Q8Tm9kZT4gPSBuZXcgU3ViamVjdDxOb2RlPigpO1xuICAgIGV4cGFuZE9uZU5vZGVPYnNlcnZhYmxlOiBPYnNlcnZhYmxlPE5vZGU+ID0gdGhpcy5lbWl0RXhwYW5kT25lTm9kZS5hc09ic2VydmFibGUoKTtcblxuICAgIHByaXZhdGUgZW1pdENvbGxhcHNlT25lTm9kZTogU3ViamVjdDxOb2RlPiA9IG5ldyBTdWJqZWN0PE5vZGU+KCk7XG4gICAgY29sbGFwc2VPbmVOb2RlT2JzZXJ2YWJsZTogT2JzZXJ2YWJsZTxOb2RlPiA9IHRoaXMuZW1pdENvbGxhcHNlT25lTm9kZS5hc09ic2VydmFibGUoKTtcblxuICAgIC8vIFNlcnZpY2UgbWVzc2FnZSBjb21tYW5kc1xuICAgIGNoYW5nZU5vZGVTZWxlY3RlZChpZFJlc2lkZW50aWFsQXJlYTogbnVtYmVyIHwgc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZW1pdE5vZGVTZWxlY3RlZC5uZXh0KGlkUmVzaWRlbnRpYWxBcmVhKTtcbiAgICB9XG5cbiAgICAvLyBTZXJ2aWNlIG1lc3NhZ2UgY29tbWFuZHNcbiAgICBjaGFuZ2VEYXRhU291cmNlKGRhdGE6IE5vZGUpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5lbWl0RGF0YVNvdXJjZS5uZXh0KGRhdGEpO1xuICAgIH1cblxuICAgIGV4cGFuZEFsbE5vZGVzKGV4cGFuZDogYm9vbGVhbik6IHZvaWQge1xuICAgICAgICB0aGlzLmVtaXRFeHBhbmRBbGxOb2Rlcy5uZXh0KGV4cGFuZCk7XG4gICAgfVxuXG4gICAgY29sbGFwc2VBbGxOb2Rlcyhjb2xsYXBzZTogYm9vbGVhbik6IHZvaWQge1xuICAgICAgICB0aGlzLmVtaXRDb2xsYXBzZUFsbE5vZGVzLm5leHQoY29sbGFwc2UpO1xuICAgIH1cblxuICAgIHJlZnJlc2hUcmVlKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmVtaXRSZWZyZXNoVHJlZS5uZXh0KCk7XG4gICAgfVxuXG5cbiAgICByZWZyZXNoVHJlZVdpdGhQYWdpbmF0aW9uKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmVtaXRSZWZyZXNoVHJlZVdpdGhQYWdpbmF0aW9uLm5leHQoKTtcbiAgICB9XG5cblxuICAgIGV4cGFuZE9uZU5vZGUobm9kZTogTm9kZSk6IHZvaWQge1xuICAgIHRoaXMuZW1pdEV4cGFuZE9uZU5vZGUubmV4dChub2RlKTtcbiAgICB9XG5cblxuICAgIGNvbGxhcHNlT25lTm9kZShub2RlOiBOb2RlKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZW1pdENvbGxhcHNlT25lTm9kZS5uZXh0KG5vZGUpO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgfVxuXG59XG4iXX0=