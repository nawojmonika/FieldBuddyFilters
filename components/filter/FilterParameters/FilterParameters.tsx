import React, {useState} from "react";
import {Button, Modal, Platform, StyleSheet, Text, View} from "react-native";
import {FilterParametersProps} from "./interfaces/FilterParametersProps";
import {Parameters} from "../interfaces/Parameters";

const mainColor = "#217ebb";

export function FilterParameters(props: FilterParametersProps): JSX.Element {
    const [visible, setVisible] = useState(true);
    const handleClose = () => {
        console.log("Modal has been closed.");
        props.onClose();
    }

    const handleApply = () => {
        setVisible(false);
        handleClose();
    }

    const getModalBody = (): JSX.Element => {
       return  (
           <View style={styles.modal}>
               {props.parameters.map(({title, options}: Parameters) => {
                   {title?.length ? <Text>{title}</Text> : null}
               })}

                <Button title='Apply'
                        onPress={handleApply}
                        color={mainColor}
                        />
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
        width: '100%'
    }
});
