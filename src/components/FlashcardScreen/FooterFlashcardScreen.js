import {questionsReact} from '../constants/global';
import FooterIncomplete from './FooterIncomplete';
import FooterCompletedSuccess from './FooterCompletedSuccess';
import FooterCompletedFail from './FooterCompletedFail';

export default function FooterFlashcardScreen(props) {

    const {answeredCount, answeredColors} = props;
    const redAnswers = [...answeredColors].filter(color => color === "red");
    const condition = answeredCount === questionsReact.length;

    return condition === false ? (
        <FooterIncomplete answeredCount={answeredCount} answeredColors={answeredColors} questionLength={questionsReact.length}/>
    ) : (
        redAnswers == 0 ?
        <FooterCompletedSuccess answeredCount={answeredCount} answeredColors={answeredColors} questionLength={questionsReact.length}/>
        :
        <FooterCompletedFail answeredCount={answeredCount} answeredColors={answeredColors} questionLength={questionsReact.length}/>
    )
}