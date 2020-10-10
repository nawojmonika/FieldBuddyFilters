import React, {useState} from "react";
import {FilterProps} from "./interfaces/FilterProps";
import {StyleSheet, Text, TouchableHighlight, View} from "react-native";

const mainColor = "#217ebb";

export function Filter(props: FilterProps): JSX.Element {
    const [active, setActive] = useState(false);
    const handlePress = () => {
        console.log('Filter click')
        setActive(!active);
    }
    return (
    <View style={[styles.button, {backgroundColor: active ? mainColor : '#fff'}]}>
        <TouchableHighlight onPress={handlePress}>
                <Text style={[styles.text, {color: active ? '#fff' : mainColor}]}>{props.Title}</Text>
        </TouchableHighlight>
    </View>
    );
}


const styles = StyleSheet.create({
    button: {
        flex: 1,
        marginRight: '10px',
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: mainColor,
        padding: '10px'
    },
    text: {
        textAlign: "center"
    }
});
