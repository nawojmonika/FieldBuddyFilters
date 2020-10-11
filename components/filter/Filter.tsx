import React, {useState} from "react";
import {FilterProps} from "./interfaces/FilterProps";
import {StyleSheet, Text, TouchableHighlight, View} from "react-native";
import {FilterParameters} from "./FilterParameters/FilterParameters";

const mainColor = "#217ebb";

export function Filter(props: FilterProps): JSX.Element {
    const [active, setActive] = useState(false);
    const [modalVisible, setModalVisible] = useState(false)
    const handlePress = (): void => {
        const filterActive = !active;
        setActive(filterActive);
        setModalVisible(filterActive);
    }
    const handleParamsClose = (): void => {
        setModalVisible(false);
        setActive(false);
    }
    return (
    <View style={styles.container}>
        <View style={[styles.button, {backgroundColor: active ? mainColor : '#fff'}]}>
            <TouchableHighlight onPress={handlePress}>
                <Text style={[styles.text, {color: active ? '#fff' : mainColor}]}>{props.Title}</Text>
            </TouchableHighlight>
        </View>
        { props.Parameters?.length && modalVisible ?
            <FilterParameters filter={props.Filter} filterTitle={props.Title} filtersListDispatch={props.filtersListDispatch} parameters={props.Parameters} onClose={handleParamsClose}/> : null
        }
    </View>

    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1
    },
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
