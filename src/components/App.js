import React from "react";
import Coins from "./Coins";
import {connect} from "react-redux";
import {fetchUser} from "../epics/getEpic";
import './App.css'

const App = (props) => {
    setInterval(() => {
        props.dispatch(fetchUser())
    }, 2000)
    return (
        <div className="container">
            <Coins/>
        </div>
    )
}

export default connect()(App)

