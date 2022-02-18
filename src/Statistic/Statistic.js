import s from './Statistic.module.css';
// import {listWrap, listItem, statList} from './Statistic.module.css';
// import Notification from '../Notifiation';

export default function Statistic (props) {
    const { options } = props;
    const keys = Object.keys(options);
    function firstLettterToUpperCase(word) {
        return `${word[0].toUpperCase()}${word.slice(1)}`;
    }

    return(
        <div className={s.listWrap}>
            <ul className={s.statList}>
                {keys.map(key => (
                    <li className={s.listItem} key={key}>
                        {firstLettterToUpperCase(key)}: {options[key]}
                    </li>
                ))}
            </ul> 
        </div>
    )
}