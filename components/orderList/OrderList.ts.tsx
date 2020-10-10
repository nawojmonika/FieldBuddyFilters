import React from 'react';
import {StyleSheet, View} from "react-native";
import {OrderListState} from "./interfaces/OrderListState";
import {OrderProps} from "../order/interfaces/OrderProps";
import {Order} from "../order/Order";


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
                {this.state.list.map((itemProps: OrderProps, index: number) => {
                    return <Order key={index} {...itemProps} />
                })}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    list: {
        flex: 1,
        width: '100%'
    },
});
