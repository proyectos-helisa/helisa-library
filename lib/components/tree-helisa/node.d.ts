export interface Node {
    id: number | null;
    name: string;
    children?: Node[];
    parent?: Node;
    isSelected: boolean;
    isEditable?: boolean;
}
