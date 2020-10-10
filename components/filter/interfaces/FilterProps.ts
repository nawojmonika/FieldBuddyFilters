import {Operation} from "./Operation";
import {Comparison} from "./Comparison";
import {AskUserItem} from "./AskUserItem";

export interface FilterProps {
    Title: string;
    Properties?: string[];
    Values?: string[];
    Operation?: Operation;
    Comparison?: Comparison;
    AskUser?: AskUserItem[];
}
