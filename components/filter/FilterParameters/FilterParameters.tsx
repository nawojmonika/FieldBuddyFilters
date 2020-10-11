import React, {useState} from "react";
import {Modal, Platform, StyleSheet, Text, View} from "react-native";
import {FilterParametersProps} from "./interfaces/FilterParametersProps";
import {Parameters} from "../interfaces/Parameters";
import {Option} from "../interfaces/Option";
import {InputUtils} from "../../../Utils/InputUitls";
import {FilterClass, FiltersActionType} from "../../../App";
import {FilterUtils} from "../../../Utils/FilterUtils";

const mainColor = "#217ebb";


export function FilterParameters(props: FilterParametersProps): JSX.Element {
    const [selectedOptions, setSelectedOptions] = useState<unknown[]>([]);

    const handleClose = () => {
        props.onClose();
    }

    const onParamChange = (filterTitle: string, propertyKey: string, propertyValue: unknown, inputValue: boolean | string) => {
        if (typeof inputValue === 'boolean') {
            let condition = '';
            let values = [];
            if (inputValue) {
                values = [...selectedOptions, propertyValue];
                setSelectedOptions(values);
            } else {
                values = [...selectedOptions.filter((option) => option !== propertyValue)]
                setSelectedOptions(values);
            }

            if (values.length) {
                condition = props.filter.getInitialCondition();
            }

             props.filtersListDispatch({
             type: FiltersActionType.AddOrReplaceFilter,
             payload: [new FilterClass(FilterUtils.getExpressionFunction(condition, values), filterTitle, condition, props.filter.getInitialCondition())]});
        }
    }

    const isHidden = !props.visible;

    const getModalBody = (): JSX.Element => {
        return (
            <View style={[styles.modal, isHidden ? styles.hidden : null]}>
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
                <Modal visible={props.visible}
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
    hidden: {
        display: 'none'
    },
    paramTitle: {
        color: '#fff',
        borderBottomColor: '#fff',
        borderBottomWidth: 1,
        padding: 5
    }
});
