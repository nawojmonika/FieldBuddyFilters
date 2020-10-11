import {Parameters} from "../../interfaces/Parameters";
import React from "react";
import {Filterable, IFiltersStateAction} from "../../../../App";

export interface FilterParametersProps {
    visible: boolean;
    filter: Filterable;
    filterTitle: string;
    parameters: Parameters[];
    onClose: Function;
    filtersListDispatch: React.Dispatch<IFiltersStateAction>;
}
