import React from "react";
import {StyleSheet, View} from "react-native";
import {FilterListState} from "./interfaces/FilterListState";
import {FilterProps} from "../filter/interfaces/FilterProps";
import {Filter} from "../filter/Filter";
import {FilterListProps} from "./interfaces/FilterListProps";
import {FilterClass} from "../../Utils/FilterClass";
import {FiltersActionType} from "../../Utils/interfaces/FilterActionType";

export class FilterList extends React.Component<FilterListProps, FilterListState>{
    constructor(props: Readonly<FilterListProps>) {
        super(props);
        this.state = {filters: []};
    }

    async componentDidMount() {
        try {
            const filters = require('../../assets/mockData/filters.json') as FilterProps[];

            const filteredExpressions = filters.map((filter: FilterProps) => {
                const Condition = filter.Condition !== undefined ? filter.Condition
                    .replace('=', '==')
                    .replace('AND', 'and')
                    .replace('OR', 'or') : undefined;
            return {
                ...filter,
                Condition
            }}).map((filter) => {
                if (filter.Condition) {
                    return new FilterClass((data: any) => data, filter.Title,  '', filter.Condition);
                }
                return new FilterClass((data: any) =>  data, filter.Title, '', '');
            })

            this.props.filtersListDispatch({ type: FiltersActionType.ReplaceFilters, payload: filteredExpressions});

            this.setState({filters})
        }
        catch (e) {
            console.error(e)
        }
    }

   render() {
       return (
           <View style={styles.list}>
               {this.state.filters.map((filter: FilterProps, index: number) => {
                return <Filter key={index}
                               Filter={this.props.filters[filter.Title]}
                               filtersListDispatch={this.props.filtersListDispatch}
                               Condition={filter.Condition}
                               Title={filter.Title}
                               Parameters={filter.Parameters}
                               />
               })}
           </View>
       )
   }

}

const styles = StyleSheet.create({
    list: {
        width: '100%',
        flexDirection: 'row'
    },
});
