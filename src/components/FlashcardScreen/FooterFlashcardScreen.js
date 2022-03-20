import {questionsReact} from '../constants/global';
import FooterIncomplete from './FooterIncomplete';
import FooterCompletedSuccess from './FooterCompletedSuccess';
import FooterCompletedFail from './FooterCompletedFail';

export default function FooterFlashcardScreen(props) {

    const {answeredCount, answeredColors, callback, zapTarget} = props;
    const redAnswers = [...answeredColors].filter(color => color === "red");
    const greenAnswers = [...answeredColors].filter(color => color === "green");
    const condition = answeredCount === questionsReact.length;

    return condition === false ? (
        <FooterIncomplete answeredCount={answeredCount} answeredColors={answeredColors} questionLength={questionsReact.length}/>
    ) : (
        (redAnswers == 0 || greenAnswers.length >= zapTarget) ?
        <FooterCompletedSuccess answeredCount={answeredCount} answeredColors={answeredColors} questionLength={questionsReact.length}/>
        :
        <FooterCompletedFail answeredCount={answeredCount} answeredColors={answeredColors} questionLength={questionsReact.length} callback={callback}/>
    )
}