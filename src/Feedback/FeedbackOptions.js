
import s from './Feedback.module.css';

export default function FeedbackOptions(props) {
    const { options, onBtnClick } = props;

    return (
        <div className="">
            <div className={s.feedbackWrap}>
                {options.map(name => (
                <button type="button" key={name} name={name} className={s.feedBackBtn} onClick={onBtnClick}>{`${name[0].toUpperCase()}${name.slice(1)}`}</button>
                ))}
            </div>
        </div>
    );
}