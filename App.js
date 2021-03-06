import React, { Component } from 'react';
import { Container, Content } from 'native-base';
import Splash from './activities/Splash';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import Activities from './Activities';
import promise from 'redux-promise';
import thunk from 'redux-thunk';
import reducer from './reducers';

type Props = {};

const store = createStore(reducer,
    {},
    applyMiddleware(promise, thunk)
);


export default class App extends Component<Props> {
  render() {
    return (
        <Provider store={store}>
            <Activities />
        </Provider>
    );
  }
}
