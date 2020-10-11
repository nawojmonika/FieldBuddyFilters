import {Parameters} from "./Parameters";
import React from "react";
import {Filterable, IFiltersStateAction} from "../../../App";

export interface FilterProps {
    Title: string;
    Condition: string;
    Filter: Filterable;
    Parameters?: Parameters[];
    filtersListDispatch: React.Dispatch<IFiltersStateAction>;
}
