
import s from './Feedback.module.css';
import PropTypes from 'prop-types';

export default function FeedbackOptions(props) {
    const { options, onBtnClick } = props;

    return (
        <div className={s.feedbackWrap}>
            {options.map(name => (
            <button type="button" key={name} name={name} className={s.feedBackBtn} onClick={onBtnClick}>{`${name[0].toUpperCase()}${name.slice(1)}`}</button>
            ))}
        </div>
    );
};

FeedbackOptions.defaultProps = {
    options: ['null'],
    onBtnClick: () => null,
}

FeedbackOptions.propTypes = {
    onBtnClick: PropTypes.func.isRequired,
    options: PropTypes.array.isRequired,
}