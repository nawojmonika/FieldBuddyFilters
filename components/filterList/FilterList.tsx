import React from "react";
import {StyleSheet, View} from "react-native";
import {FilterListState} from "./interfaces/FilterListState";
import {FilterProps} from "../filter/interfaces/FilterProps";
import {Filter} from "../filter/Filter";
import {FilterClass, Filters, FiltersActionType, IFiltersStateAction} from "../../App";
import {compileExpression} from "filtrex";

interface FilterListProps {
    filtersListDispatch: React.Dispatch<IFiltersStateAction>;
}

export class FilterList extends React.Component<FilterListProps, FilterListState>{
    constructor(props: Readonly<FilterListProps>) {
        super(props);
        this.state = {filters: []};
    }

    async componentDidMount() {
        try {
            const filters = require('../../assets/mockData/filters.json') as FilterProps[];

            const filteredExpressions = filters.map((filter) => {
                const Condition = filter.Condition ? filter.Condition
                    .replaceAll('=', '==')
                    .replaceAll('AND', 'and')
                    .replaceAll('OR', 'or') : undefined;


            return {
                ...filter,
                Condition
            }}).map((filter) => {
                if (filter.Condition) {
                    return new FilterClass(compileExpression(filter.Condition, { extraFunctions: {AskUser: () => true}}), filter.Title);
                }
                return new FilterClass((data: any) =>  data, filter.Title);
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
                return <Filter key={index} {...filter}/>
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
