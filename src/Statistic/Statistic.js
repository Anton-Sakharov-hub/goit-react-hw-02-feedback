import {listWrap, listItem, statList} from './Statistic.module.css';
// import Notification from '../Notifiation';

export default function Statistic (props) {
    const { options } = props;
    const { good, neutral, bad, total, positiveFeedback } = options;

    return(
        <div className={listWrap}>
            <ul className={statList}>
                <li className={listItem}>
                    Good: {good}
                </li>
                <li className={listItem}>
                    Neutral: {neutral}
                </li>
                <li className={listItem}>
                    Bad: {bad}
                </li >
                <li className={listItem}>
                    Total: {total}
                </li >
                <li className={listItem}>
                    PositiveFeedback: {positiveFeedback}
                </li >
            </ul> 
        </div>
    )
}