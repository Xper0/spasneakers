import React, {useContext} from 'react';
import "./Header.scss";
import {Link} from "react-router-dom";
import AppContext from "../../context/Context";
import {useCart} from "../hooks/useCart";

const Header = () => {
    const { setOpenDraw } = useContext(AppContext)
    const {totalPrice} = useCart()
    function openDrawer(){
        setOpenDraw(true)
    }
    return (
        <div className="Header">
            <Link to="/" style={{ textDecoration: 'none' }}>
                <div className="Header-logo">
                    <img className="Header__img" src="/img/logo.svg" alt="logo"/>
                    <div className="Header-body">
                        <h2 className="Header-body__title">REACT SNEAKERS</h2>
                        <p className="Header-body__desc">Магазин лучших кроссовок</p>
                    </div>
                </div>
            </Link>
            <>
                <ul className="Header-controls">
                    <li className="Header-controls__list" onClick={openDrawer}>
                        <img  src="./img/order.svg" alt=""/>
                        <span>{totalPrice} руб</span>
                    </li>
                    <li className="Header-controls__list">
                        <Link to="/favorite"><img src="./img/favorite.svg" alt=""/> </Link>
                    </li>
                    <li className="Header-controls__list">
                        <Link to="/orders"><img src="./img/user.svg" alt=""/></Link>
                    </li>
                </ul>
            </>
        </div>
    );
};

export default Header;