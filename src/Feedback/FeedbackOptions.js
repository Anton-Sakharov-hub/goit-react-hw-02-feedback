
import {feedbackWrap, feedBackBtn} from './Feedback.module.css';

export default function FeedbackOptions(props) {
    const { options, onBtnClick } = props;

    return (
        <div className="">
            <div className={feedbackWrap}>
                <button type="button" name="good" className={feedBackBtn} onClick={onBtnClick}>Good</button>
                <button type="button" name="neutral" className={feedBackBtn} onClick={onBtnClick}>Neutral</button>
                <button type="button" name="bad" className={feedBackBtn} onClick={onBtnClick}>Bad</button>
            </div>
        </div>
    );
}