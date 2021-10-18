import React, { Component } from "react";
import "./App.css";

import { auth, createUserProfileDocument } from "./firebase/firebase-utils";
import { Switch, Route } from "react-router-dom";

import Homepage from "./pages/homepage/Homepage";
import ShopPage from "./pages/shop/Shop";
import Header from "./components/Header/Header";
import signinAndSignout from "./pages/signinAndSignout/signinAndSignout";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data(),
            },
          });
          console.log(this.state);
        });
      }
      this.setState({ currentUser: userAuth });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        {/*header będąc poza Switch będzie znajdował się na każdej stronie */}
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={Homepage} />
          {/*route przenosi wyrenderuje shoppage gdy url będzie zawierało /shop, 
         a po /shop nie ważne co się znajduje, może to być cokolwiek a i tak 
         component shoppage zostanie wyrenderowany  */}
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={signinAndSignout} />
        </Switch>
      </div>
    );
  }
}
