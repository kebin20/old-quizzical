import React from "react";
import classes from './Welcome.module.css'

import Card from "./Card"
import Button from "./Button"

export default function Welcome(props) {
    return (
        <div>
            <Card>
                <h2>Quizzical</h2>
                <h3>Fun trivia quiz for everyone!</h3>
                <Button>Start Quiz</Button>
            </Card>
        </div>
    )
}