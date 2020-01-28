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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS1oZWxpc2Euc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2hlbGlzYS1saWIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy90cmVlLWhlbGlzYS90cmVlLWhlbGlzYS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxPQUFPLEVBQUUsZUFBZSxFQUFjLE1BQU0sTUFBTSxDQUFDOztBQUk1RDtJQXFFSTs7UUEvRFEscUJBQWdCLEdBQUcsSUFBSSxlQUFlLENBQWtCLENBQUMsQ0FBQyxDQUFDOztRQUVuRSxpQkFBWSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLEVBQUUsQ0FBQzs7UUFTNUMsbUJBQWMsR0FBRyxJQUFJLGVBQWUsQ0FBTyxTQUFTLENBQUMsQ0FBQzs7UUFFOUQseUJBQW9CLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxZQUFZLEVBQUUsQ0FBQzs7UUFTaEQsdUJBQWtCLEdBQUcsSUFBSSxlQUFlLENBQVUsSUFBSSxDQUFDLENBQUM7UUFDaEUsZUFBVSxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxZQUFZLEVBQUUsQ0FBQzs7UUFPNUMseUJBQW9CLEdBQUcsSUFBSSxlQUFlLENBQVUsSUFBSSxDQUFDLENBQUM7UUFDbEUsaUJBQVksR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQUMsWUFBWSxFQUFFLENBQUM7UUFNaEQsb0JBQWUsR0FBRyxJQUFJLE9BQU8sRUFBUSxDQUFDO1FBQzlDLDBCQUFxQixHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsWUFBWSxFQUFFLENBQUM7UUFLcEQsa0NBQTZCLEdBQUcsSUFBSSxPQUFPLEVBQVEsQ0FBQztRQUM1RCx3Q0FBbUMsR0FBRyxJQUFJLENBQUMsNkJBQTZCLENBQUMsWUFBWSxFQUFFLENBQUM7UUFPaEYsc0JBQWlCLEdBQUcsSUFBSSxPQUFPLEVBQVEsQ0FBQztRQUNoRCw0QkFBdUIsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsWUFBWSxFQUFFLENBQUM7UUFLeEQsd0JBQW1CLEdBQUcsSUFBSSxPQUFPLEVBQVEsQ0FBQztRQUNsRCw4QkFBeUIsR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsWUFBWSxFQUFFLENBQUM7SUFPdEUsQ0FBQztJQTlERCwyQkFBMkI7Ozs7OztJQUMzQiw4Q0FBa0I7Ozs7OztJQUFsQixVQUFtQixpQkFBa0M7UUFDakQsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFRRCwyQkFBMkI7Ozs7OztJQUMzQiw0Q0FBZ0I7Ozs7OztJQUFoQixVQUFpQixJQUFTO1FBQ3RCLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ25DLENBQUM7Ozs7O0lBT0MsMENBQWM7Ozs7SUFBZCxVQUFlLE1BQWM7UUFDekIsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN6QyxDQUFDOzs7OztJQU1ELDRDQUFnQjs7OztJQUFoQixVQUFpQixRQUFnQjtRQUM3QixJQUFJLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzdDLENBQUM7Ozs7SUFLRCx1Q0FBVzs7O0lBQVg7UUFDSSxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2hDLENBQUM7Ozs7SUFJRCxxREFBeUI7OztJQUF6QjtRQUNJLElBQUksQ0FBQyw2QkFBNkIsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUM5QyxDQUFDOzs7OztJQU1ELHlDQUFhOzs7O0lBQWIsVUFBYyxJQUFTO1FBQ3JCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDcEMsQ0FBQzs7Ozs7SUFJRCwyQ0FBZTs7OztJQUFmLFVBQWdCLElBQVM7UUFDdkIsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN0QyxDQUFDOztnQkFuRU4sVUFBVSxTQUFDO29CQUNSLFVBQVUsRUFBRSxNQUFNO2lCQUNyQjs7Ozs7NEJBUEQ7Q0E4RUMsQUF6RUQsSUF5RUM7U0F0RVksaUJBQWlCOzs7Ozs7SUFHMUIsNkNBQW1FOztJQUVuRSx5Q0FBb0Q7Ozs7O0lBU3BELDJDQUE4RDs7SUFFOUQsaURBQTBEOzs7OztJQVN4RCwrQ0FBZ0U7O0lBQ2hFLHVDQUFvRDs7Ozs7SUFPcEQsaURBQWtFOztJQUNsRSx5Q0FBd0Q7Ozs7O0lBTXhELDRDQUE4Qzs7SUFDOUMsa0RBQTREOzs7OztJQUs1RCwwREFBNEQ7O0lBQzVELGdFQUF3Rjs7Ozs7SUFPeEYsOENBQWdEOztJQUNoRCxvREFBZ0U7Ozs7O0lBS2hFLGdEQUFrRDs7SUFDbEQsc0RBQW9FIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3ViamVjdCwgQmVoYXZpb3JTdWJqZWN0LCBTdWJzY3JpYmVyIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBOb2RlIH0gZnJvbSAnLi9ub2RlJztcblxuXG5ASW5qZWN0YWJsZSh7XG4gICAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFRyZWVIZWxpc2FTZXJ2aWNlIHtcblxuICAgIC8vIE9ic2VydmFibGUgc3RyaW5nIHNvdXJjZXNcbiAgICBwcml2YXRlIGVtaXROb2RlU2VsZWN0ZWQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PG51bWJlciB8IHN0cmluZz4oMSk7XG4gICAgLy8gT2JzZXJ2YWJsZSBzdHJpbmcgc3RyZWFtc1xuICAgIG5vZGVTZWxlY3RlZCA9IHRoaXMuZW1pdE5vZGVTZWxlY3RlZC5hc09ic2VydmFibGUoKTtcbiAgICAvLyBTZXJ2aWNlIG1lc3NhZ2UgY29tbWFuZHNcbiAgICBjaGFuZ2VOb2RlU2VsZWN0ZWQoaWRSZXNpZGVudGlhbEFyZWE6IG51bWJlciB8IHN0cmluZykge1xuICAgICAgICB0aGlzLmVtaXROb2RlU2VsZWN0ZWQubmV4dChpZFJlc2lkZW50aWFsQXJlYSk7XG4gICAgfVxuXG5cblxuICAgIC8vIE9ic2VydmFibGUgc3RyaW5nIHNvdXJjZXNcbiAgICBwcml2YXRlIGVtaXREYXRhU291cmNlID0gbmV3IEJlaGF2aW9yU3ViamVjdDxOb2RlPih1bmRlZmluZWQpOyAgICBcbiAgICAvLyBPYnNlcnZhYmxlIHN0cmluZyBzdHJlYW1zXG4gICAgZGF0YVNvdXJjZU9ic2VydmFibGUgPSB0aGlzLmVtaXREYXRhU291cmNlLmFzT2JzZXJ2YWJsZSgpO1xuICAgIC8vIFNlcnZpY2UgbWVzc2FnZSBjb21tYW5kc1xuICAgIGNoYW5nZURhdGFTb3VyY2UoZGF0YTpOb2RlKSB7XG4gICAgICAgIHRoaXMuZW1pdERhdGFTb3VyY2UubmV4dChkYXRhKTtcbiAgICB9XG5cblxuICAgICAgXG4gICAgLy8gRXhwYW5kIG5vZGUgb2JzZXJ2YWJsZVxuICAgICAgcHJpdmF0ZSBlbWl0RXhwYW5kQWxsTm9kZXMgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+KG51bGwpOyAgICAgICAgICBcbiAgICAgIG5vZGVFeHBhbmQgPSB0aGlzLmVtaXRFeHBhbmRBbGxOb2Rlcy5hc09ic2VydmFibGUoKTsgICAgICBcbiAgICAgIGV4cGFuZEFsbE5vZGVzKGV4cGFuZDpib29sZWFuKSB7XG4gICAgICAgICAgdGhpcy5lbWl0RXhwYW5kQWxsTm9kZXMubmV4dChleHBhbmQpO1xuICAgICAgfVxuXG5cbiAgICAgIC8vIENvbGxhcHNlIG5vZGUgb2JzZXJ2YWJsZVxuICAgICAgcHJpdmF0ZSBlbWl0Q29sbGFwc2VBbGxOb2RlcyA9IG5ldyBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4obnVsbCk7ICAgICAgICAgIFxuICAgICAgbm9kZUNvbGxhcHNlID0gdGhpcy5lbWl0Q29sbGFwc2VBbGxOb2Rlcy5hc09ic2VydmFibGUoKTsgICAgICBcbiAgICAgIGNvbGxhcHNlQWxsTm9kZXMoY29sbGFwc2U6Ym9vbGVhbikge1xuICAgICAgICAgIHRoaXMuZW1pdENvbGxhcHNlQWxsTm9kZXMubmV4dChjb2xsYXBzZSk7XG4gICAgICB9XG5cblxuICAgICAgcHJpdmF0ZSBlbWl0UmVmcmVzaFRyZWUgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuICAgICAgcmVmcmVzaFRyZWVPYnNlcnZhYmxlID0gdGhpcy5lbWl0UmVmcmVzaFRyZWUuYXNPYnNlcnZhYmxlKCk7XG4gICAgICByZWZyZXNoVHJlZSgpe1xuICAgICAgICAgIHRoaXMuZW1pdFJlZnJlc2hUcmVlLm5leHQoKTtcbiAgICAgIH1cblxuICAgICAgcHJpdmF0ZSBlbWl0UmVmcmVzaFRyZWVXaXRoUGFnaW5hdGlvbiA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG4gICAgICByZWZyZXNoVHJlZVdpdGhQYWdpbmF0aW9uT2JzZXJ2YWJsZSA9IHRoaXMuZW1pdFJlZnJlc2hUcmVlV2l0aFBhZ2luYXRpb24uYXNPYnNlcnZhYmxlKCk7XG4gICAgICByZWZyZXNoVHJlZVdpdGhQYWdpbmF0aW9uKCl7XG4gICAgICAgICAgdGhpcy5lbWl0UmVmcmVzaFRyZWVXaXRoUGFnaW5hdGlvbi5uZXh0KCk7XG4gICAgICB9XG5cblxuXG4gICAgICBwcml2YXRlIGVtaXRFeHBhbmRPbmVOb2RlID0gbmV3IFN1YmplY3Q8Tm9kZT4oKTtcbiAgICAgIGV4cGFuZE9uZU5vZGVPYnNlcnZhYmxlID0gdGhpcy5lbWl0RXhwYW5kT25lTm9kZS5hc09ic2VydmFibGUoKTtcbiAgICAgIGV4cGFuZE9uZU5vZGUobm9kZTpOb2RlKXtcbiAgICAgICAgdGhpcy5lbWl0RXhwYW5kT25lTm9kZS5uZXh0KG5vZGUpO1xuICAgICAgfVxuXG4gICAgICBwcml2YXRlIGVtaXRDb2xsYXBzZU9uZU5vZGUgPSBuZXcgU3ViamVjdDxOb2RlPigpO1xuICAgICAgY29sbGFwc2VPbmVOb2RlT2JzZXJ2YWJsZSA9IHRoaXMuZW1pdENvbGxhcHNlT25lTm9kZS5hc09ic2VydmFibGUoKTtcbiAgICAgIGNvbGxhcHNlT25lTm9kZShub2RlOk5vZGUpe1xuICAgICAgICB0aGlzLmVtaXRDb2xsYXBzZU9uZU5vZGUubmV4dChub2RlKTtcbiAgICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIFxuICAgIH1cbiAgXG59XG4iXX0=