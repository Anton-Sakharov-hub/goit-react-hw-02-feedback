import { Component } from'react';
import './App.css';
// import Feedback from './Feedback';
// import FeedbackOption from './Feedback/FeedbackOptions';
// import Statistic from './Statistic';
import Section from './Section';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positiveFeedback: 0,
  }

  // feedbackHandler = (options) => {
  //   this.setState({ ...options });
  //   console.log(this.state);
  // }

  onLeaveFeedback = (evt) => {
    const { name } = evt.target; 

      this.setState(prevState => ({ [name]: prevState[name] + 1 }));
      this.countTotalFeedback();
      this.countPositiveFeedbackPercentage();
      // this.props.onBtnClick({...this.state})
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
      <div className="App">
        <Section
          onBtnClick={this.onLeaveFeedback}
          options={this.state}
        />
        {/* <FeedbackOption onBtnClick={this.onLeaveFeedback}/>
        <Statistic good={good} neutral={neutral} bad={bad} total={total} positiveFeedback={positiveFeedback}/> */}
      </div>
    );
  }
}

export default App;
