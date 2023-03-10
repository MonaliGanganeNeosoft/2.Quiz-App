import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import QuizInstructions from './components/quiz/QuizInstructions';
export default function App() {
  return (
    <div>
      <Router>
        {/* <Route path="/" exact component={Home} /> */}
        <Route path="/play/instructions" exact component={QuizInstructions} />
      </Router>
    </div>
  );
}
