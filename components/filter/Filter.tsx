import React, {useState} from "react";
import {FilterProps} from "./interfaces/FilterProps";
import {StyleSheet, Text, TouchableHighlight, View} from "react-native";
import {FilterParameters} from "./FilterParameters/FilterParameters";
import {FilterUtils} from "../../Utils/FilterUtils";
import {FiltersActionType} from "../../Utils/interfaces/FilterActionType";
import {FilterClass} from "../../Utils/FilterClass";

const mainColor = "#217ebb";

export function Filter(props: FilterProps): JSX.Element {
    const [active, setActive] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);

    const handleSingleFilter = () => {
        let condition = props.Filter.getCondition();
        if (condition.length) {
            condition = '';
        } else {
            condition = props.Filter.getInitialCondition();
        }

        props.filtersListDispatch({
            type: FiltersActionType.AddOrReplaceFilter,
            payload: [new FilterClass(FilterUtils.getExpressionFunction(condition), props.Filter.getFilterName(), condition, props.Filter.getInitialCondition())]
        });
    }

    const handlePress = (): void => {
        const filterActive = !active;
        setActive(filterActive);
        if (props.Parameters?.length) {
            setModalVisible(!modalVisible);
        } else {
            handleSingleFilter();
        }
    }
    const handleParamsClose = (): void => {
        setActive(false);
    }
    return (
        <View style={styles.container}>
            <TouchableHighlight onPress={handlePress}
                                style={[styles.button, {backgroundColor: active ? mainColor : '#fff'}]}>
                <Text style={[styles.text, {color: active ? '#fff' : mainColor}]}>{props.Title}</Text>
            </TouchableHighlight>
            {props.Parameters?.length ?
                <FilterParameters visible={modalVisible}
                                  filter={props.Filter}
                                  filterTitle={props.Title}
                                  filtersListDispatch={props.filtersListDispatch}
                                  parameters={props.Parameters}
                                  onClose={handleParamsClose}/> : null
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
        padding: 20
    },
    text: {
        textAlign: "center",
    }
});
