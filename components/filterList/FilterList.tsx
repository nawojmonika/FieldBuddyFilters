import React from "react";
import {StyleSheet, View} from "react-native";
import {FilterListState} from "./interfaces/FilterListState";
import {FilterProps} from "../filter/interfaces/FilterProps";
import {Filter} from "../filter/Filter";

export class FilterList extends React.Component<unknown, FilterListState>{
    constructor(props: Readonly<unknown>) {
        super(props);
        this.state = {filters: []};
    }

    async componentDidMount() {
        try {
            const filters = require('../../assets/mockData/filters.json');
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
        flexDirection: "row"
    },
});
