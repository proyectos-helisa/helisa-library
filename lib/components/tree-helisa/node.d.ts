import { TREE_COLOR_STYLE } from './tree-color-style.enum';
export interface Node {
    id: number | null;
    name: string;
    children?: Node[];
    parent?: Node;
    isSelected: boolean;
    isEditable?: boolean;
    colorStyle?: TREE_COLOR_STYLE | null;
}
