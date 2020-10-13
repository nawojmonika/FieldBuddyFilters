import React from "react";
import {FiltersStateAction} from "../../../Utils/interfaces/FilterStateAction";
import {Filters} from "../../../Utils/interfaces/Filters";

export interface FilterListProps {
    filtersListDispatch: React.Dispatch<FiltersStateAction>;
    filters: Filters;
}
