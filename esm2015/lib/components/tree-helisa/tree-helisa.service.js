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
    changeNodeSelected(idResidentialArea) {
        this.emitNodeSelected.next(idResidentialArea);
    }
    // Service message commands
    changeDataSource(data) {
        this.emitDataSource.next(data);
    }
    expandAllNodes(expand) {
        this.emitExpandAllNodes.next(expand);
    }
    collapseAllNodes(collapse) {
        this.emitCollapseAllNodes.next(collapse);
    }
    refreshTree() {
        this.emitRefreshTree.next();
    }
    refreshTreeWithPagination() {
        this.emitRefreshTreeWithPagination.next();
    }
    expandOneNode(node) {
        this.emitExpandOneNode.next(node);
    }
    collapseOneNode(node) {
        this.emitCollapseOneNode.next(node);
    }
}
TreeHelisaService.ɵprov = i0.ɵɵdefineInjectable({ factory: function TreeHelisaService_Factory() { return new TreeHelisaService(); }, token: TreeHelisaService, providedIn: "root" });
TreeHelisaService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
TreeHelisaService.ctorParameters = () => [];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS1oZWxpc2Euc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIuLi8uLi8uLi9wcm9qZWN0cy9oZWxpc2EtbGliL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3RyZWUtaGVsaXNhL3RyZWUtaGVsaXNhLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLGVBQWUsRUFBMEIsTUFBTSxNQUFNLENBQUM7O0FBT3hFLE1BQU0sT0FBTyxpQkFBaUI7SUFzRTFCO1FBcEVBLDRCQUE0QjtRQUNwQixxQkFBZ0IsR0FBcUMsSUFBSSxlQUFlLENBQWtCLENBQUMsQ0FBQyxDQUFDO1FBQ3JHLDRCQUE0QjtRQUM1QixpQkFBWSxHQUFnQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxFQUFFLENBQUM7UUFFakYsNEJBQTRCO1FBQ3BCLG1CQUFjLEdBQTBCLElBQUksZUFBZSxDQUFPLFNBQVMsQ0FBQyxDQUFDO1FBRXJGLDRCQUE0QjtRQUM1Qix5QkFBb0IsR0FBcUIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUU1RSx5QkFBeUI7UUFDakIsdUJBQWtCLEdBQTZCLElBQUksZUFBZSxDQUFVLElBQUksQ0FBQyxDQUFDO1FBQzFGLGVBQVUsR0FBd0IsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFlBQVksRUFBRSxDQUFDO1FBRXhFLDJCQUEyQjtRQUNuQix5QkFBb0IsR0FBNkIsSUFBSSxlQUFlLENBQVUsSUFBSSxDQUFDLENBQUM7UUFDNUYsaUJBQVksR0FBd0IsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFlBQVksRUFBRSxDQUFDO1FBRXRFLG9CQUFlLEdBQWtCLElBQUksT0FBTyxFQUFRLENBQUM7UUFDN0QsMEJBQXFCLEdBQXFCLElBQUksQ0FBQyxlQUFlLENBQUMsWUFBWSxFQUFFLENBQUM7UUFFdEUsa0NBQTZCLEdBQWtCLElBQUksT0FBTyxFQUFRLENBQUM7UUFDM0Usd0NBQW1DLEdBQXFCLElBQUksQ0FBQyw2QkFBNkIsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUVsRyxzQkFBaUIsR0FBa0IsSUFBSSxPQUFPLEVBQVEsQ0FBQztRQUMvRCw0QkFBdUIsR0FBcUIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFlBQVksRUFBRSxDQUFDO1FBRTFFLHdCQUFtQixHQUFrQixJQUFJLE9BQU8sRUFBUSxDQUFDO1FBQ2pFLDhCQUF5QixHQUFxQixJQUFJLENBQUMsbUJBQW1CLENBQUMsWUFBWSxFQUFFLENBQUM7SUF5Q3RGLENBQUM7SUF2Q0QsMkJBQTJCO0lBQzNCLGtCQUFrQixDQUFDLGlCQUFrQztRQUNqRCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUVELDJCQUEyQjtJQUMzQixnQkFBZ0IsQ0FBQyxJQUFVO1FBQ3ZCLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFFRCxjQUFjLENBQUMsTUFBZTtRQUMxQixJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFFRCxnQkFBZ0IsQ0FBQyxRQUFpQjtRQUM5QixJQUFJLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFFRCxXQUFXO1FBQ1AsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNoQyxDQUFDO0lBR0QseUJBQXlCO1FBQ3JCLElBQUksQ0FBQyw2QkFBNkIsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUM5QyxDQUFDO0lBR0QsYUFBYSxDQUFDLElBQVU7UUFDeEIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBR0QsZUFBZSxDQUFDLElBQVU7UUFDdEIsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN4QyxDQUFDOzs7O1lBdkVKLFVBQVUsU0FBQztnQkFDUixVQUFVLEVBQUUsTUFBTTthQUNyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YmplY3QsIEJlaGF2aW9yU3ViamVjdCwgU3Vic2NyaWJlciwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgTm9kZSB9IGZyb20gJy4vbm9kZSc7XG5cblxuQEluamVjdGFibGUoe1xuICAgIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBUcmVlSGVsaXNhU2VydmljZSB7XG5cbiAgICAvLyBPYnNlcnZhYmxlIHN0cmluZyBzb3VyY2VzXG4gICAgcHJpdmF0ZSBlbWl0Tm9kZVNlbGVjdGVkOiBCZWhhdmlvclN1YmplY3Q8bnVtYmVyIHwgc3RyaW5nPiA9IG5ldyBCZWhhdmlvclN1YmplY3Q8bnVtYmVyIHwgc3RyaW5nPigxKTtcbiAgICAvLyBPYnNlcnZhYmxlIHN0cmluZyBzdHJlYW1zXG4gICAgbm9kZVNlbGVjdGVkOiBPYnNlcnZhYmxlPHN0cmluZyB8IG51bWJlcj4gPSB0aGlzLmVtaXROb2RlU2VsZWN0ZWQuYXNPYnNlcnZhYmxlKCk7XG5cbiAgICAvLyBPYnNlcnZhYmxlIHN0cmluZyBzb3VyY2VzXG4gICAgcHJpdmF0ZSBlbWl0RGF0YVNvdXJjZTogQmVoYXZpb3JTdWJqZWN0PE5vZGU+ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxOb2RlPih1bmRlZmluZWQpO1xuXG4gICAgLy8gT2JzZXJ2YWJsZSBzdHJpbmcgc3RyZWFtc1xuICAgIGRhdGFTb3VyY2VPYnNlcnZhYmxlOiBPYnNlcnZhYmxlPE5vZGU+ID0gdGhpcy5lbWl0RGF0YVNvdXJjZS5hc09ic2VydmFibGUoKTtcblxuICAgIC8vIEV4cGFuZCBub2RlIG9ic2VydmFibGVcbiAgICBwcml2YXRlIGVtaXRFeHBhbmRBbGxOb2RlczogQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPihudWxsKTtcbiAgICBub2RlRXhwYW5kOiBPYnNlcnZhYmxlPGJvb2xlYW4+ID0gdGhpcy5lbWl0RXhwYW5kQWxsTm9kZXMuYXNPYnNlcnZhYmxlKCk7XG5cbiAgICAgLy8gQ29sbGFwc2Ugbm9kZSBvYnNlcnZhYmxlXG4gICAgIHByaXZhdGUgZW1pdENvbGxhcHNlQWxsTm9kZXM6IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPiA9IG5ldyBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4obnVsbCk7XG4gICAgIG5vZGVDb2xsYXBzZTogT2JzZXJ2YWJsZTxib29sZWFuPiA9IHRoaXMuZW1pdENvbGxhcHNlQWxsTm9kZXMuYXNPYnNlcnZhYmxlKCk7XG5cbiAgICBwcml2YXRlIGVtaXRSZWZyZXNoVHJlZTogU3ViamVjdDx2b2lkPiA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG4gICAgcmVmcmVzaFRyZWVPYnNlcnZhYmxlOiBPYnNlcnZhYmxlPHZvaWQ+ID0gdGhpcy5lbWl0UmVmcmVzaFRyZWUuYXNPYnNlcnZhYmxlKCk7XG5cbiAgICBwcml2YXRlIGVtaXRSZWZyZXNoVHJlZVdpdGhQYWdpbmF0aW9uOiBTdWJqZWN0PHZvaWQ+ID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcbiAgICByZWZyZXNoVHJlZVdpdGhQYWdpbmF0aW9uT2JzZXJ2YWJsZTogT2JzZXJ2YWJsZTx2b2lkPiA9IHRoaXMuZW1pdFJlZnJlc2hUcmVlV2l0aFBhZ2luYXRpb24uYXNPYnNlcnZhYmxlKCk7XG5cbiAgICBwcml2YXRlIGVtaXRFeHBhbmRPbmVOb2RlOiBTdWJqZWN0PE5vZGU+ID0gbmV3IFN1YmplY3Q8Tm9kZT4oKTtcbiAgICBleHBhbmRPbmVOb2RlT2JzZXJ2YWJsZTogT2JzZXJ2YWJsZTxOb2RlPiA9IHRoaXMuZW1pdEV4cGFuZE9uZU5vZGUuYXNPYnNlcnZhYmxlKCk7XG5cbiAgICBwcml2YXRlIGVtaXRDb2xsYXBzZU9uZU5vZGU6IFN1YmplY3Q8Tm9kZT4gPSBuZXcgU3ViamVjdDxOb2RlPigpO1xuICAgIGNvbGxhcHNlT25lTm9kZU9ic2VydmFibGU6IE9ic2VydmFibGU8Tm9kZT4gPSB0aGlzLmVtaXRDb2xsYXBzZU9uZU5vZGUuYXNPYnNlcnZhYmxlKCk7XG5cbiAgICAvLyBTZXJ2aWNlIG1lc3NhZ2UgY29tbWFuZHNcbiAgICBjaGFuZ2VOb2RlU2VsZWN0ZWQoaWRSZXNpZGVudGlhbEFyZWE6IG51bWJlciB8IHN0cmluZyk6IHZvaWQge1xuICAgICAgICB0aGlzLmVtaXROb2RlU2VsZWN0ZWQubmV4dChpZFJlc2lkZW50aWFsQXJlYSk7XG4gICAgfVxuXG4gICAgLy8gU2VydmljZSBtZXNzYWdlIGNvbW1hbmRzXG4gICAgY2hhbmdlRGF0YVNvdXJjZShkYXRhOiBOb2RlKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZW1pdERhdGFTb3VyY2UubmV4dChkYXRhKTtcbiAgICB9XG5cbiAgICBleHBhbmRBbGxOb2RlcyhleHBhbmQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICAgICAgdGhpcy5lbWl0RXhwYW5kQWxsTm9kZXMubmV4dChleHBhbmQpO1xuICAgIH1cblxuICAgIGNvbGxhcHNlQWxsTm9kZXMoY29sbGFwc2U6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICAgICAgdGhpcy5lbWl0Q29sbGFwc2VBbGxOb2Rlcy5uZXh0KGNvbGxhcHNlKTtcbiAgICB9XG5cbiAgICByZWZyZXNoVHJlZSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5lbWl0UmVmcmVzaFRyZWUubmV4dCgpO1xuICAgIH1cblxuXG4gICAgcmVmcmVzaFRyZWVXaXRoUGFnaW5hdGlvbigpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5lbWl0UmVmcmVzaFRyZWVXaXRoUGFnaW5hdGlvbi5uZXh0KCk7XG4gICAgfVxuXG5cbiAgICBleHBhbmRPbmVOb2RlKG5vZGU6IE5vZGUpOiB2b2lkIHtcbiAgICB0aGlzLmVtaXRFeHBhbmRPbmVOb2RlLm5leHQobm9kZSk7XG4gICAgfVxuXG5cbiAgICBjb2xsYXBzZU9uZU5vZGUobm9kZTogTm9kZSk6IHZvaWQge1xuICAgICAgICB0aGlzLmVtaXRDb2xsYXBzZU9uZU5vZGUubmV4dChub2RlKTtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcblxuICAgIH1cblxufVxuIl19