
import Statistic from '../Statistic';
import FeedbackOption from '../Feedback';
import Notification from '../Notifiation';

export default function Section(props) {
    const { onBtnClick, options, hasTotalScore } = props;

    return (
        <section>
            <h2>Please leave feedback</h2>
            <FeedbackOption onBtnClick={onBtnClick} />
            <h2>Statistics</h2>
            {hasTotalScore ? <Statistic options={options} /> : <Notification message="There is no feedback" />}
        </section>
    )
};