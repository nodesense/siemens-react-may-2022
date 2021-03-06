// react is for v.dom creation, app development
import React from 'react';
// what patch the real dom, runs the event loop
import ReactDOM from 'react-dom';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

import App from './app/App';

// webpack collect css using extract plugin
import "./styles.css"

import './app/redux-demo'; // removed later
import store from './app/state/store';
import { Provider } from 'react-redux';

 //Provider expose store as context for container component

ReactDOM.render (<Provider store={store}>
                    <App />
                </Provider>
                    , document.getElementById("root"))

// create v.dom
// const h1 = React.createElement("h1", {id: 'appheader', },
//                                  "Welcome to React")

// mount v.dom into real dom
// ReactDOM.render(h1, document.getElementById("root") )

// inside index.html, react-scripts usign webpack, 
// it create budnles and add src tag automatically to include this code
// at runtime

serviceWorkerRegistration.register()