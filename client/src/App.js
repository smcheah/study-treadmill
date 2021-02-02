import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import UserContext from "./util/user-context";
import MainPage from "./pages/main";
import StatsPage from "./pages/stats";
import HomePage from "./pages/home";
import LoginPage from "./pages/login";
import SignUpPage from "./pages/signup";
import NoMatch from "./pages/no-match";
import './App.css';

function App () {
    const [user, setUser] = useState("User");

    return <UserContext.Provider value={ { user, setUser } } >
        <Router>
            <Switch>
                <Route exact path="/login" >
                    <LoginPage />
                </Route>
                <Route exact path="/signup" >
                    <SignUpPage />
                </Route>
                <Route exact path="/main" >
                    <MainPage />
                </Route>
                <Route exact path="/main/stats" >
                    <StatsPage />
                </Route>
                <Route exact path="/" >
                    <HomePage />
                </Route>
                <Route>
                    <NoMatch />
                </Route>
            </Switch>
        </Router>
    </UserContext.Provider>;
}

export default App;
