import React, {useState} from "react";
import {FilterProps} from "./interfaces/FilterProps";
import {Modal, Platform, StyleSheet, Text, TouchableHighlight, View} from "react-native";

const mainColor = "#217ebb";

export function Filter(props: FilterProps): JSX.Element {
    const [active, setActive] = useState(false);
    const handlePress = () => {
        console.log('Filter click')
        setActive(!active);
    }
    const modalVisible = !!props?.Parameters?.length && active;
    console.log(modalVisible)
    return (
    <View style={[styles.button, {backgroundColor: active ? mainColor : '#fff'}]}>
        {Platform.OS === "web" ? null :
            <Modal visible={modalVisible}>
                <Text>Test</Text>
            </Modal>
        }
        <TouchableHighlight onPress={handlePress}>
                <Text style={[styles.text, {color: active ? '#fff' : mainColor}]}>{props.Title}</Text>
        </TouchableHighlight>
    </View>
    );
}


const styles = StyleSheet.create({
    button: {
        flex: 1,
        marginRight: 10,
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: mainColor,
        justifyContent: 'center',
        padding: 10
    },
    text: {
        textAlign: "center"
    }
});
