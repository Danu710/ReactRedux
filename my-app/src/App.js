import React from "react";
import { Provider } from "react-redux";
import logo from './logo.svg';
import './App.css';
import store from "./store"
import './components/TodoApp'

const App = () => {
    return ( <
        Provider store = { store } >
        <
        div >
        <
        img src = { logo }
        alt = "logo"
        className = "App-logo" / >
        <
        TodoApp / >
        <
        /div>   < /
        Provider >
    )
}

export default App;