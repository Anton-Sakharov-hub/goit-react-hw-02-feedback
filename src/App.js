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

  onLeaveFeedback = (evt) => {
    const { name } = evt.target; 

      this.setState(prevState => ({ [name]: prevState[name] + 1 }));
      this.countTotalFeedback();
      this.countPositiveFeedbackPercentage();
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

  checkTotalScore = () => {
    return Boolean(this.state.total);
  }

  render() {
    return (
      <div className="App">
        <Section
          onBtnClick={this.onLeaveFeedback}
          options={this.state}
          hasTotalScore={this.checkTotalScore()}
        />
      </div>
    );
  }
}

export default App;
