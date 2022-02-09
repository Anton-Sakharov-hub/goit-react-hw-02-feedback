
import Statistic from '../Statistic';
import FeedbackOption from '../Feedback';
// import Notification from '../Notifiation';

export default function Section(props) {
    const { title, onBtnClick, options } = props;

    return (
        <section>
            <h2>{title}</h2>
            <FeedbackOption onBtnClick={onBtnClick} />
            <Statistic options={options} />
            {/* {options.total ? <Statistic options={options} /> : <Notification message="There is no feedback" />} */}
        </section>
    )
};