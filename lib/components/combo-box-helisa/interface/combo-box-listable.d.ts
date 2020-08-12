import { Observable } from 'rxjs';
export interface ComboBoxListable<TYPE> {
    getData(page: number, size: number): Observable<TYPE[]>;
    getDisplayText(item: TYPE): string;
    isEnabled(item: TYPE): boolean;
    compare(item: TYPE, otherItem: TYPE): boolean;
}
