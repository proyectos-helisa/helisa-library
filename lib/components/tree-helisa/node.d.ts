export interface Node {
    id: number | string | null;
    name: string;
    children?: Node[];
    parent?: Node;
    isSelected: boolean;
    isEditable?: boolean;
    colorStyle?: string | null;
    classNode?: string | null;
}
