import React from 'react';
import QuestionHidden from './QuestionHidden';
import QuestionOpened from './QuestionOpened';
import QuestionRed from './QuestionRed';
import QuestionYellow from './QuestionYellow';
import QuestionGreen from './QuestionGreen';


export default function ButtonFlashcard(props) {

    const [selected, setSelected] = React.useState(false);
    const {number, question, answer} = props;

    if (selected === false) return <QuestionHidden callback={setSelected} number={number} />
    else if (selected === true) return <QuestionOpened answer={answer} question={question} callback={setSelected} />
    else if (selected === "red") return <QuestionRed number={number} />
    else if (selected === "yellow") return <QuestionYellow number={number} />
    else return <QuestionGreen number={number} />
}