import {InputType} from "./InputType";
import {Option} from "./Option";

export interface Parameters {
    Title?: string;
    Property: string;
    Type: InputType;
    Options: Option[];
}
