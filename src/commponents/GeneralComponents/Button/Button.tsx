import React from "react";
import s from "./Button.module.scss";

export type ButtonPropsType = {
    value: string
    onClick: () => void
    disable: boolean
}


export const Button = (props: ButtonPropsType) => {
    return (<>
            <button className={s.button} onClick={props.onClick}
                    disabled={props.disable}>{props.value}
            </button>
        </>
    )
}