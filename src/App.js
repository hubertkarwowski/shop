import React from "react";
import "./App.css";
import Homepage from "./pages/homepage/Homepage";
import ShopPage from "./pages/shop/Shop";
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";

function App() {
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
      </Switch>
    </div>
  );
}

export default App;
