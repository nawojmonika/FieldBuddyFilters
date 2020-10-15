import {compileExpression} from "filtrex";
import {Filters} from "./interfaces/Filters";
import {FiltersActionType} from "./interfaces/FilterActionType";
import {FiltersStateAction} from "./interfaces/FilterStateAction";
import {FilterClass} from "./FilterClass";

export const FilterUtils = {
    getExpressionFunction(condition: string, values?: unknown[]): any {
        condition = condition.replace(/'/g, '"');
        if (condition.length) {
            return compileExpression(condition, { extraFunctions: {AskUser: (property: unknown) => values?.includes(property)}})
        }

        return (data: any) =>  data;
    },
    filtersListStateReducer: (state: Filters, action: FiltersStateAction): Filters => {
        switch (action.type) {
            case FiltersActionType.AddOrReplaceFilter: {
                const filters = action.payload.reduce<Filters>((prev: Filters, curr: FilterClass) => {
                    prev[curr.getFilterName()] = curr;
                    return prev;
                }, {} )

                return {...state, ...filters };
            }

            case FiltersActionType.ReplaceFilters: {
                const filters = action.payload.reduce<Filters>((prev: Filters, curr: FilterClass) => {
                    prev[curr.getFilterName()] = curr;
                    return prev;
                }, {} )
                return { ...state, ...filters };
            }


            default:
                throw new Error('Unknown action type');

        }
    }
}
