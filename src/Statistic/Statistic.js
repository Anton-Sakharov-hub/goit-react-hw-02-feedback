import s from './Statistic.module.css';
import Notification from '../Notifiation';

export default function Statistic (props) {
    const { options } = props;
    const { good, neutral, bad, total, positiveFeedback } = options;

    return(
        <div className={s.listWrap}>
            <h2>Statistics</h2>
            {total ? <ul className={s.statList}>
                <li className={s.listItem}>
                    Good: {good}
                </li>
                <li className={s.listItem}>
                    Neutral: {neutral}
                </li>
                <li className={s.listItem}>
                    Bad: {bad}
                </li >
                <li className={s.listItem}>
                    Total: {total}
                </li >
                <li className={s.listItem}>
                    PositiveFeedback: {positiveFeedback}
                </li >
            </ul> : <Notification message="There is no feedback"/>}
        </div>
    )
}