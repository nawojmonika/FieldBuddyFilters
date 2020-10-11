import React, {useState} from "react";
import {Button, Modal, Platform, StyleSheet, Text, View} from "react-native";
import {FilterParametersProps} from "./interfaces/FilterParametersProps";
import {Parameters} from "../interfaces/Parameters";
import {Option} from "../interfaces/Option";
import {InputUtils} from "../../../Utils/InputUitls";
import {FilterClass, FiltersActionType} from "../../../App";
import {compileExpression} from "filtrex";

const mainColor = "#217ebb";

function getExpressionFunction(condition: string): any {
    if (condition.length) {
        return compileExpression(condition, { extraFunctions: {AskUser: () => ''}})
    }

    return (data: any) =>  data;
}

export function FilterParameters(props: FilterParametersProps): JSX.Element {
    const [visible, setVisible] = useState(true);

    const handleClose = () => {
        props.onClose();
    }

    const onParamChange = (filterTitle: string, propertyKey: string, propertyValue: unknown, inputValue: boolean | string) => {
        if (typeof inputValue === 'boolean') {
            let condition = props.filter.getCondition();
            const propertyCondition = ` ${propertyKey} == "${propertyValue}"`
            const optionCondition = condition.length > 0 ? ` or${propertyCondition}` : propertyCondition;
            if (inputValue) {
                condition += optionCondition;
            } else {
                condition = condition.replaceAll(optionCondition, '').replaceAll(propertyCondition, '');
            }
             props.filtersListDispatch({
             type: FiltersActionType.AddOrReplaceFilter,
             payload: [new FilterClass(getExpressionFunction(condition), filterTitle, condition)]});
        }
    }

    const getModalBody = (): JSX.Element => {
        return (
            <View style={styles.modal}>
                {props.parameters.map(({Title, Type, Options, Property}: Parameters, index: number): JSX.Element => {
                    return (
                        <View key={index}>
                            {Title?.length ? <Text style={styles.paramTitle}>{Title}</Text> : null}
                            {Options?.map((option: Option, index: number) => {
                                return (<View key={index}>
                                    {InputUtils.getInputByType(Type, option.Label,
                                        ((inputValue: boolean | string) => {
                                                onParamChange(props.filterTitle, Property, option.Value, inputValue)
                                            }
                                        ))}
                                </View>);
                            })}
                        </View>
                    )
                })}
            </View>
        );
    }

    const isWebOS = Platform.OS == 'web';

    return (
        <View style={styles.container}>
            {isWebOS ? getModalBody() :
                <Modal visible={visible}
                       transparent={true}
                       onRequestClose={handleClose}>
                    {getModalBody()}
                </Modal>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: '105%',
        width: '100%'
    },
    modal: {
        backgroundColor: mainColor,
        width: '100%',
        padding: 20
    },
    paramTitle: {
        color: '#fff',
        borderBottomColor: '#fff',
        borderBottomWidth: 1,
        padding: 5
    }
});
