import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
export default function App() {
  return (
    <div>
      <Router>
        <Route path="/" component={Home} />
      </Router>
    </div>
  );
}
