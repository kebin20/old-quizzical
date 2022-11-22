/* eslint-disable react/prop-types */
import React from "react";

import classes from './AnswerButton.module.css'

export default function AnswerButton(props) {
    return (
        <button
        className={classes.AnswerButton}
        type={props.type || "button"}
        onClick={props.onClick}
        >{props.children}</button>
    )
}