export interface ColumnConfigNode {
    name: string;
    visible?: boolean;
}
export interface Node {
    id: number | string | null;
    name: string;
    children?: Node[];
    parent?: Node;
    isSelected: boolean;
    isEditable?: boolean;
    colorStyle?: string | null;
    classNode?: string | null;
    options?: Node[];
    isCheckedOption?: boolean;
    orderIndex?: number;
    showAddButton?: boolean;
    showEditButton?: boolean;
    showDeleteButton?: boolean;
    data?: Array<ColumnConfigNode>;
}
