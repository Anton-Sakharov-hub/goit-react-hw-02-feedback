import s from './Statistic.module.css';
// import Notification from '../Notifiation';

export default function Statistic (props) {
    const { options } = props;
    const { good, neutral, bad, total, positiveFeedback } = options;

    return(
        <div className={s.listWrap}>
            <ul className={s.statList}>
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
            </ul> 
        </div>
    )
}