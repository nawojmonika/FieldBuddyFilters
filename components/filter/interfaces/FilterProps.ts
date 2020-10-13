import {Parameters} from "./Parameters";
import React from "react";
import {Filterable} from "../../../Utils/interfaces/Filterable";
import {FiltersStateAction} from "../../../Utils/interfaces/FilterStateAction";

export interface FilterProps {
    Title: string;
    Condition: string;
    Filter: Filterable;
    Parameters?: Parameters[];
    filtersListDispatch: React.Dispatch<FiltersStateAction>;
}
