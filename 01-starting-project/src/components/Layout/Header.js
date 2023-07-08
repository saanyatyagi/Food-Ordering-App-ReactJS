import { Fragment } from "react";

import bakedGoodsImg from '../../assets/baked-goods.jpeg';
import classes from './Header.module.css';
import HeaderCartButton from "./HeaderCartBtn";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>BuddyBakers</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes['main-image']}>
        <img src={bakedGoodsImg} alt='A table full of delicious baked goods!' />
      </div>
    </Fragment>
  );
};

export default Header;
