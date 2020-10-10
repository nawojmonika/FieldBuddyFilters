import {InputType} from "./InputType";
import {Option} from "./Option";

export interface Parameters {
    title?: string;
    property: string;
    type: InputType;
    options: Option[];
}
