import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { hot } from "react-hot-loader/root";
import "../assets/scss/main.scss";
import getCurrentUser from "../services/getCurrentUser";
import RegistrationForm from "./registration/RegistrationForm";
import SignInForm from "./authentication/SignInForm";
import TopBar from "./layout/TopBar";
import UserProfile from "./UserProfile.js";
import AuthenticatedRoute from "./authentication/AuthenticatedRoute.js";
import EventPage from "./EventPage.js";
import Index from "./Index.js"
import CategoryPage from "./CategoryPage.js";
import CategoriesList from "./CategoriesList.js";

const App = (props) => {
  const [currentUser, setCurrentUser] = useState(undefined);
  const fetchCurrentUser = async () => {
    try {
      const user = await getCurrentUser();
      setCurrentUser(user);
    } catch (err) {
      setCurrentUser(null);
    }
  };

  useEffect(() => {
    fetchCurrentUser();
  }, []);

  return (
    <Router>
      <TopBar user={currentUser} />
      <Switch>
        <Route exact path="/" component={Index}/>
        <Route exact path="/categories" component={CategoriesList}/>
        <Route exact path="/categories/:categoryName">
          <CategoryPage user={currentUser}/>
        </Route>
        <Route exact path="/events/:id">
          <EventPage user={currentUser} />
        </Route>
        <AuthenticatedRoute exact path="/user-profile" component={UserProfile} user={currentUser}/>
        <Route exact path="/users/new" component={RegistrationForm} />
        <Route exact path="/user-sessions/new" component={SignInForm} />
      </Switch>
    </Router>
  );
};

export default hot(App);
