import { AfterViewInit, EventEmitter, OnInit } from '@angular/core';
import { ComboBoxListable } from './interface/combo-box-listable';
import { ComboBoxEditable } from './interface/combo-box-editable';
import * as ɵngcc0 from '@angular/core';
export declare enum ComboBoxHelisaState {
    CLOSED = 0,
    SELECT = 1,
    INSERT = 2
}
export declare class ComboBoxHelisaComponent<TYPE> implements OnInit, AfterViewInit {
    editable: ComboBoxEditable<TYPE>;
    listable: ComboBoxListable<TYPE>;
    placeholder: string;
    selectedItem: TYPE;
    selectEmitter: EventEmitter<TYPE>;
    enabled: boolean;
    private page;
    private pageSize;
    private haveNextPage;
    state: ComboBoxHelisaState;
    rows: TYPE[];
    constructor();
    ngOnInit(): void;
    ngAfterViewInit(): void;
    private getNextPage;
    get comboBoxHelisaState(): typeof ComboBoxHelisaState;
    onFocus(): void;
    selectItem(row: TYPE): void;
    changeToInsert(): void;
    insert(event: string): void;
    onScroll(event: Event): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ComboBoxHelisaComponent<any>, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<ComboBoxHelisaComponent<any>, "lib-combo-box-helisa", never, { "placeholder": "placeholder"; "enabled": "enabled"; "selectedItem": "selectedItem"; "editable": "editable"; "listable": "listable"; }, { "selectEmitter": "selectEmitter"; }, never, never>;
}

//# sourceMappingURL=combo-box-helisa.component.d.ts.map