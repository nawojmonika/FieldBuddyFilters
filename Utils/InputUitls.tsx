import {InputType} from "../components/filter/interfaces/InputType";
import React from "react";
import {CheckboxWithLabel} from "../components/checkbox/CheckboxWithLabel";

export const InputUtils  = {
    getCheckBoxElement: (label: string, onChange: Function): JSX.Element  => {
        return <CheckboxWithLabel label={label} onChange={onChange}/>;
    },

    getInputByType: (type: InputType, label: string, onChange: Function): JSX.Element => {
    switch (type) {
        case InputType.Checkbox: {
            return InputUtils.getCheckBoxElement(label, onChange);
            }
        default: {
            return InputUtils.getCheckBoxElement(label, onChange)
            }
        }
    }
}
