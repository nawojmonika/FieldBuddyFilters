import React from 'react';
import {StyleSheet, Text, View} from "react-native";
import {OrderListState} from "./interfaces/OrderListState";
import {OrderProps} from "../order/interfaces/OrderProps";


export default class OrderList extends React.Component<unknown, OrderListState> {
    constructor(props: Readonly<unknown>) {
        super(props);
        this.state = {list: []};
    }

    async componentDidMount() {
        try {
            const list = require('../../assets/mockData/order-list.json');
            this.setState({list})
        }
        catch (e) {
            console.error(e)
        }
    }

    render() {
        return (
            <View style={styles.list}>
                {this.state.list.map((element: OrderProps, index: number) => {
                    return <Text key={index}>This is an order item!</Text>
                })}

            </View>
        );
    }
}

const styles = StyleSheet.create({
    list: {
        flex: 1
    },
});
