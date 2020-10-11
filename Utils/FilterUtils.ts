import {compileExpression} from "filtrex";

export const FilterUtils = {
    getExpressionFunction(condition: string): any {
        condition = condition.replaceAll("\'", '"');
        if (condition.length) {
            return compileExpression(condition, { extraFunctions: {AskUser: () => condition}})
        }

        return (data: any) =>  data;
    }
}
