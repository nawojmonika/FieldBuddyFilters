import {OrderStatus} from "./OrderStatus";
import {OrderType} from "./OrderType";
import {OrderColor} from "./OrderColor";

export interface OrderProps {
    Id: string,
    Name: string,
    Status: OrderStatus,
    Type: OrderType,
    StartDate: string,
    EndDate: string,
    Color: OrderColor,
    Description: string
}
