import React from "react";
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cartActions";
import "./CartIcon.scss";
import { createStructuredSelector } from "reselect";

import { selectCartItemsCount } from "../../redux/cart/cartSelectors";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

function CartIcon({ toggleCartHidden, itemCount }) {
  return (
    <div className="cart-icon" onClick={toggleCartHidden}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
});

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
