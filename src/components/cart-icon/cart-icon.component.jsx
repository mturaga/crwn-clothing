import React from "react";
import { ReactComponent as CartIconLogo } from "../../assets/shopping-bag.svg";
import "./cart-icon.styles.scss";
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";

const CartIcon = ({ toggleCartHiddens, itemsCount }) => (
  <div className="cart-icon" onClick={toggleCartHiddens}>
    <CartIconLogo className="shopping-icon"></CartIconLogo>
    <span className="item-count">{itemsCount}</span>
  </div>
);

const mapDispacthToProps = dispatch => ({
  toggleCartHiddens: () => dispatch(toggleCartHidden())
});

const mapStateToProps = state => ({
  itemsCount: selectCartItemsCount(state)
});

export default connect(mapStateToProps, mapDispacthToProps)(CartIcon);
