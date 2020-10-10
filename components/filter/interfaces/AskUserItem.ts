import {InputType} from "./InputType";
import {AskUserOption} from "./AskUserOption";

export interface AskUserItem {
    title?: string;
    property: string;
    type: InputType;
    options: AskUserOption[];
}
