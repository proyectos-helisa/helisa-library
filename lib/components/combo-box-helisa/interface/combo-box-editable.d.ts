import { Observable } from 'rxjs';
export interface ComboBoxEditable<TYPE> {
    insert(text: string): Observable<TYPE>;
    getButtonInsertText(): string;
}
