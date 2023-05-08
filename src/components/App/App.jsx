import React from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';


import FeelingForm from '../Feeling/FeelingForm';
import UnderstandingForm from '../Understanding/UnderstandingForm';
import SupportForm from '../Support/SupportForm';
import CommentsForm from '../Comments/CommentsForm';
import ReviewPage from '../Review/ReviewPage';

function App() {

  useEffect(() => {
    fetchFeedback();
  }, []);

  const dispatch = useDispatch();

  const fetchFeedback = () => {
    axios({
      method: "GET",
      url: "/api/feedback"
    }).then((response) => {
      const feedbackData = response.data;
      console.log("Fetched feedback data:", feedbackData);

      dispatch({
        type: "SET_FEEDBACK",
        payload: feedbackData
      })

    }).catch((error) => {
      console.log("Error fetching feedback data:", error);
    });
  };

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
      <Router>

        <Route exact path ="/">
          <FeelingForm fetchFeedback={fetchFeedback} />
        </Route>

        <Route exact path="/understanding">
          <UnderstandingForm />
        </Route>

        <Route exact path="/support">
          <SupportForm />
        </Route>

        <Route exact path="/comments">
          <CommentsForm />
        </Route>

        <Route exact path="/review">
          <ReviewPage />
        </Route>

      </Router>
    </div>
  );
}

export default App;
