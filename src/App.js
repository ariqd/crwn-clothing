import { Route, Switch } from "react-router";
import "./App.css";
import { auth } from "./firebase/firebase.utils";

import Homepage from "./pages/homepage/homepage.component";
import Shoppage from "./pages/shop/shop.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";

import Header from "./components/header/header.component";
import { useEffect, useState } from "react";

let unsubscribeFromAuth = null;

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);

      console.log(user);
    });

    return () => {
      unsubscribeFromAuth();
    };
  }, []);

  return (
    <div>
      <Header currentUser={currentUser} />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={Shoppage} />
        <Route path="/signin" component={SignInAndSignUpPage} />
      </Switch>
    </div>
  );
}

export default App;
