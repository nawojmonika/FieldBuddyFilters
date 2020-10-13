import {FiltersActionType} from "../../App";
import {FilterClass} from "../FilterClass";

export interface FiltersStateAction {
    type: FiltersActionType;
    payload: FilterClass[];
}
