import React from 'react';
import {StyleSheet, View} from "react-native";
import {OrderListState} from "./interfaces/OrderListState";
import {OrderProps} from "../order/interfaces/OrderProps";
import {Order} from "../order/Order";
import {OrderListProps} from "./interfaces/OrderListProps";



export default class OrderList extends React.Component<OrderListProps, OrderListState> {
    constructor(props: Readonly<OrderListProps>) {
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

        const filteredList = Object.values(this.props.filters).reduce((prev, current) => {
            return prev.filter((item) => current.filter(item))
        }, this.state.list);
        return (
            <View style={styles.list}>
                {filteredList.map((itemProps: OrderProps, index: number) => {
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
