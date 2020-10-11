import React, {useState} from "react";
import {Button, Modal, Platform, StyleSheet, Text, View} from "react-native";
import {FilterParametersProps} from "./interfaces/FilterParametersProps";
import {Parameters} from "../interfaces/Parameters";
import {Option} from "../interfaces/Option";
import {InputUtils} from "../../../Utils/InputUitls";

const mainColor = "#217ebb";



export function FilterParameters(props: FilterParametersProps): JSX.Element {
    const [visible, setVisible] = useState(true);
    const [filterOptions, setFilterOptions] = useState([]);

    const handleClose = () => {
        console.log("Modal has been closed.");
        props.onClose();
    }

    const onParamChange = () => {
        console.log('param changes')
    }

    const getModalBody = (): JSX.Element => {
       return  (
           <View style={styles.modal}>
               {props.parameters.map(({Title, Type, Options, Property}: Parameters, index: number): JSX.Element => {
                return (
                    <View key={index}>
                        {Title?.length ? <Text style={styles.paramTitle}>{Title}</Text> : null}
                        {Options?.map((option: Option, index: number) => {
                            return (<View key={index}>
                                {InputUtils.getInputByType(Type, option.Label, onParamChange)}
                            </View> );
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
