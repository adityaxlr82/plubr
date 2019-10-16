import React from 'react';
import ReactDOM from 'react-dom';
import PumblrApp from './components/PumblrApp';
import { BrowserRouter as Router, Route,Switch, Redirect} from 'react-router-dom'
import AddCaptionPage from './components/add-caption/AddCaptionPage';
import ImageResults from './components/image-results/ImageResults';

const routing = (
    <Router>
      <div>
        <Route path="/" component={PumblrApp} />
        <Route path="/addcaption" component={AddCaptionPage} />
        <Route path="/contact" component={ImageResults} />

      </div>
    </Router>
  )
  




ReactDOM.render(routing, document.getElementById('root'));


