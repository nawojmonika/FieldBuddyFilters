import {OrderProps} from "../components/order/interfaces/OrderProps";
import {Filterable} from "../App";

export class FilterClass implements Filterable {
    filterFunction: any;
    filterName: string;
    condition: string = '';
    initialCondition: string;
    constructor(filterFunction: any, filterName: string, condition: string, initialCondition: string) {
        this.filterFunction = filterFunction;
        this.filterName = filterName;
        this.condition = condition;
        this.initialCondition = initialCondition;
    }
    getFilterName(): string {
        return this.filterName;
    }
    getCondition(): string {
        return this.condition;
    }
    getInitialCondition(): string {
        return this.initialCondition;
    }
    filter(items: OrderProps): OrderProps {
        return this.filterFunction(items);
    }
}
