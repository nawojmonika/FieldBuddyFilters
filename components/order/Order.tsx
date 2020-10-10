import React from "react";
import {OrderProps} from "./interfaces/OrderProps";
import {StyleSheet, Text, View} from "react-native";
import {OrderColor} from "./interfaces/OrderColor";

const getTimeFromDateTime = (dateTime: string): string => {
    // to do
    const hours = '14';
    const minutes = '00';
    return `${hours}:${minutes}`;
}

const colors: {[key in OrderColor]: string}  = {
    Red: "#e82200",
    Blue: "#217ebb",
    Green: "#29b907"
}

const getColorValue = (color: OrderColor): string => {
    return colors[color];
}

export function Order(props: OrderProps): JSX.Element {
    const startTime = getTimeFromDateTime(props.StartDate);
    const endTime = getTimeFromDateTime(props.EndDate);
    const orderColor = getColorValue(props.Color)

    return (
    <View style={[styles.container, {borderColor: orderColor}]}>
        <View style={[styles.header, {backgroundColor: orderColor}]}>
            <Text style={styles.headerText}>{startTime} - {endTime}</Text>
            <Text style={styles.headerText}>{props.Name}</Text>
            <Text style={styles.headerText}>{props.Type}</Text>
            <Text style={[styles.headerText, {textAlign: 'right'}]}>Status: {props.Status}</Text>
        </View>
        <View style={styles.body}>
            <Text>{props.Description}</Text>
        </View>
    </View>)
}



const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderStyle: 'solid',
        width: '100%',
        marginTop: '10px'
    },
    header: {
        width: '100%',
        flexDirection: 'row'

    },
    headerText: {
        color: '#fff',
        flex: 1,
        paddingTop: '5px',
        paddingBottom: '5px',
        paddingRight: '10px',
        paddingLeft: '10px'
    },
    body: {
        padding: '20px'
    }
});
