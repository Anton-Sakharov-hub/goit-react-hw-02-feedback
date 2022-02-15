import { Component } from 'react';
import s from './Feedback.module.css';

class Feedback extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
        total: 0,
        positiveFeedback: 0,
    }


    handleClick = (evt) => {
        const { name } = evt.target; 

        this.setState(prevState => ({ [name]: prevState[name] + 1 }));
        this.countTotalFeedback();
        this.countPositiveFeedbackPercentage();
        this.props.onBtnClick({...this.state})
    }

    countTotalFeedback = () => {
        this.setState(prevState => ({
            total: prevState.good + prevState.neutral + prevState.bad,
        }));
    }
    
    countPositiveFeedbackPercentage = () => { 
        this.setState(prevState => ({
            positiveFeedback: `${Math.round((prevState.good / prevState.total) * 100)}%`,
        }));

    }

    render() {
        // const { good, neutral, bad, total, positiveFeedback } = this.state;

        return (
            <div className="">
                <h2>Please leave feedback</h2>
                <div className={s.feedbackWrap}>
                    <button type="button" name="good" className={s.feedBackBtn} onClick={this.handleClick}>Good</button>
                    <button type="button" name="neutral" className={s.feedBackBtn} onClick={this.handleClick}>Neutral</button>
                    <button type="button" name="bad" className={s.feedBackBtn} onClick={this.handleClick}>Bad</button>
                </div>
            </div>
        )
    }
}

export default Feedback;

