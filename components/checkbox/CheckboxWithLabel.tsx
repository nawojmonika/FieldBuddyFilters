import {CheckBox, StyleSheet, Text, View} from "react-native";
import React, {useState} from "react";
import {CheckboxWithLabelProps} from "./interfaces/CheckboxWithLabelProps";

export function CheckboxWithLabel(props: CheckboxWithLabelProps): JSX.Element {
    const [isSelected, setSelection] = useState(false);
    const handleChange = () => {
        const selected = !isSelected;
        setSelection(selected);
        props.onChange(selected);
    }
    return (
        <View style={styles.container}>
            <View style={styles.checkboxContainer}>
                <CheckBox style={styles.checkbox}
                          value={isSelected}
                          onValueChange={handleChange}/>
                <Text style={styles.label}>{props.label}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
    },
    checkboxContainer: {
        flexDirection: "row"
    },
    checkbox: {
        alignSelf: "center",
    },
    label: {
        margin: 8,
        color: '#fff'
    }
});
