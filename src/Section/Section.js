
import Statistic from '../Statistic';
import FeedbackOption from '../Feedback';
import Notification from '../Notifiation';

export default function Section(props) {
    const { onBtnClick, statisticOptions, hasTotalScore } = props;

    return (
        <section>
            <h2>Please leave feedback</h2>
            <FeedbackOption options={['good', 'neutral', 'bad']} onBtnClick={onBtnClick} />
            <h2>Statistics</h2>
            {hasTotalScore ? <Statistic options={statisticOptions} /> : <Notification message="There is no feedback" />}
        </section>
    )
};