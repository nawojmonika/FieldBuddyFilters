import React from 'react';
import {Text, View} from "react-native";

export default class OrderList extends React.Component {
    constructor(props: Readonly<unknown>) {
        super(props);
        this.state = {date: new Date()};
    }

    render() {
        return (
            <View>
                <Text>This is an order list</Text>
            </View>
        );
    }
}
