import {OrderProps} from "../../components/order/interfaces/OrderProps";

export interface Filterable {
    filter: (items: OrderProps) => OrderProps;
    getFilterName(): string;
    getCondition(): string;
    getInitialCondition(): string;
}
