import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { smurfsReducer as reducer } from './reducers/smursReducer';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import MainForm from './components/MainForm';
import MainList from './components/MainList';
import './styles.css';

const store = createStore( reducer, applyMiddleware(thunk) );

export default function App() {
    return (
        <Provider store = { store } >
            <div>
                <h1>Smurfs</h1>
                <MainForm />
                <MainList />
            </div>
        </Provider>
    )
}