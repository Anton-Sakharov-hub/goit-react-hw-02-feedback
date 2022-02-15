
import s from './Feedback.module.css';

export default function FeedbackOptions(props) {
    const { options, onBtnClick } = props;

    return (
        <div className="">
            <h2>Please leave feedback</h2>
            <div className={s.feedbackWrap}>
                <button type="button" name="good" className={s.feedBackBtn} onClick={onBtnClick}>Good</button>
                <button type="button" name="neutral" className={s.feedBackBtn} onClick={onBtnClick}>Neutral</button>
                <button type="button" name="bad" className={s.feedBackBtn} onClick={onBtnClick}>Bad</button>
            </div>
        </div>
    );
}