import React from "react";
import { ReactComponent as CartIconLogo } from "../../assets/shopping-bag.svg";
import "./cart-icon.styles.scss";
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart.actions";

const CartIcon = ({ toggleCartHiddens }) => (
  <div className="cart-icon" onClick={toggleCartHiddens}>
    <CartIconLogo className="shopping-icon"></CartIconLogo>
    <span className="item-count">0 </span>
  </div>
);

const mapDispacthToProps = dispatch => ({
  toggleCartHiddens: () => dispatch(toggleCartHidden())
});

export default connect(null, mapDispacthToProps)(CartIcon);
