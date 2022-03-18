import React from 'react';
import QuestionHidden from './QuestionHidden';
import QuestionOpened from './QuestionOpened';

export default function ButtonFlashcard(props) {

    const [selected, setSelected] = React.useState(false);
    const {number, question, answer} = props;

    return selected === false ? (
        <QuestionHidden callback={setSelected} number={number} />
    ) : (
        <QuestionOpened answer={answer} question={question} /> 
    )
}