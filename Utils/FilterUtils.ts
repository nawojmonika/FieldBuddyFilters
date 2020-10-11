import {compileExpression} from "filtrex";

export const FilterUtils = {
    getExpressionFunction(condition: string, values?: unknown[]): any {
        condition = condition.replaceAll("\'", '"');
        if (condition.length) {
            return compileExpression(condition, { extraFunctions: {AskUser: (property: unknown) => values?.includes(property)}})
        }

        return (data: any) =>  data;
    }
}
