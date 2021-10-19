import React, { Component } from "react";
import "./App.css";

import { auth, createUserProfileDocument } from "./firebase/firebase-utils";
import { connect } from "react-redux";
import { Switch, Route, Redirect } from "react-router-dom";
import { createStructuredSelector } from "reselect";

import Homepage from "./pages/homepage/Homepage";
import ShopPage from "./pages/shop/Shop";
import Header from "./components/Header/Header";
import signinAndSignout from "./pages/signinAndSignout/signinAndSignout";
import Checkout from "./pages/checkout/Checkout";
import { setCurrentUser } from "./redux/user/userActions";
import { selectCurrentUser } from "./redux/user/userSelector";

class App extends Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      }
      setCurrentUser({ userAuth });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        {/*header będąc poza Switch będzie znajdował się na każdej stronie */}
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          {/*route przenosi wyrenderuje shoppage gdy url będzie zawierało /shop, 
         a po /shop nie ważne co się znajduje, może to być cokolwiek a i tak 
         component shoppage zostanie wyrenderowany  */}
          <Route path="/shop" component={ShopPage} />
          <Route path="/checkout" component={Checkout} />
          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? (
                <Redirect to="/" />
              ) : (
                <signinAndSignout />
              )
            }
          />
        </Switch>
      </div>
    );
  }
}
const mapStateToProps = ({ user }) => ({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
