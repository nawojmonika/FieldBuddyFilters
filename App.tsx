import React, {useReducer} from 'react';
import {Platform, SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import OrderList from "./components/orderList/OrderList.ts";
import {FilterList} from "./components/filterList/FilterList";
import {OrderProps} from "./components/order/interfaces/OrderProps";

export interface IFiltersStateAction {
  type: FiltersActionType;
  payload: FilterClass[];
}

export enum FiltersActionType {
  AddOrReplaceFilter = 'AddOrReplaceFilter',
  ReplaceFilters = 'ReplaceFilters'
}

export interface Filterable {
  filter: (items: OrderProps) => OrderProps;
  getFilterName(): string;
  getCondition(): string;
}
export class FilterClass implements Filterable {
  filterFunction: any;
  filterName: string;
  condition: string;
  constructor(filterFunction: any, filterName: string, condition: string) {
    this.filterFunction = filterFunction;
    this.filterName = filterName;
    this.condition = condition;
  }
  getFilterName(): string {
    return this.filterName;
  }
  getCondition(): string {
    return this.condition;
  }
  filter(items: OrderProps): OrderProps {
    return this.filterFunction(items);
  }
}

export interface Filters {
  [key: string]: FilterClass,
}

const filtersListStateReducer = (state: Filters, action: IFiltersStateAction): Filters => {
  switch (action.type) {
    case FiltersActionType.AddOrReplaceFilter: {
      const filters = action.payload.reduce<Filters>((prev, curr) => {
        prev[curr.getFilterName()] = curr;
        return prev;
      }, {} )

      return {...state, ...filters };
    }

    case FiltersActionType.ReplaceFilters: {
      const filters = action.payload.reduce<Filters>((prev, curr) => {
        prev[curr.getFilterName()] = curr;
        return prev;
      }, {} )
      return { ...state, ...filters };
    }


    default:
      throw new Error('Unknown action type');

  }
}

export default function App(): JSX.Element {
  const [filters, filtersListDispatch] = useReducer(filtersListStateReducer, {});
  console.log(filters);
  return(
      <SafeAreaView style={styles.container}>
          <OrderList filters={filters}/>
          <FilterList filters={filters} filtersListDispatch={filtersListDispatch}/>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column-reverse',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: Platform.OS === 'web' ? '80%' : '95%',
    alignSelf: "center",
    marginTop: Platform.OS === 'web' ? 20 : 0,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
  },
});
