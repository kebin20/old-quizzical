import React from "react";


import Button from "./Button"

export default function Welcome(props) {
    return (
            <div className="card">
                <h2>Quizzical</h2>
                <h3>Fun trivia quiz for everyone!</h3>
                <footer className="footer">
                <Button type="button">Start Quiz</Button>
                </footer>
                </div>

    )
}