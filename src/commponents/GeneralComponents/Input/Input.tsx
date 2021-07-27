import React, {ChangeEvent} from "react";
import s from "./Input.module.scss";

export type InputPropsType = {
    label: string
    value: string
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
}


export const Input = (props: InputPropsType) => {
    return (<>
            <label> {props.label} </label>
            <input className={s.input} type="text" placeholder={props.label} value={props.value}
                   onChange={props.onChange}/>
        </>
    )
}