import React, {useContext, useState} from 'react';
import "./Drawer.scss";
import AppContext from "../../context/Context";
import Info from "../DrawerStatus/DrawerStatus";
import {useCart} from "../hooks/useCart";
import axios from "axios";


const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const Drawer = () => {

    const {drawerCard, onRemoveCard, setDrawerCard} = useContext(AppContext)
    const {openDraw, setOpenDraw, totalPrice} = useCart()
    const [orderId, setOrderId] =useState(null)
    const [isOrderComplete, setIsOrderComplete] = React.useState(false);


    function onClose(){
        setOpenDraw(false)
    }
    function DeleteCard(item){
        onRemoveCard(item.id)
    }

    async function  onClickOrder() {
        try {
            const {data} = await axios.post("https://611644418f38520017a387c1.mockapi.io/orders", {
                items: drawerCard
            })
            setOrderId(data.id)
            setIsOrderComplete(true)
            setDrawerCard([])
            for (let i = 0; i < drawerCard.length; i++) {
                const item = drawerCard[i];
                await axios.delete('https://611644418f38520017a387c1.mockapi.io/drawer/' + item.id);
                await delay(1000);
            }

        }
        catch(error){
            alert("ошибка при оформлении заказа")
        }
    }

    return (
        <div className={`Drawer ${openDraw ? "Drawer-active" : ""}`} onClick={onClose}>
            {drawerCard.length > 0  ?
            <div className="Drawer-content" onClick={ e => e.stopPropagation()}>
                <h1 onClick={onClose}>Корзина</h1>
                <div className="Drawer-items">
                    {drawerCard.map((item, index) => <div className="Drawer-card" key={index}>
                        <img className="Drawer-card__img" src={item.img} alt="cart" />
                        <div className="Drawer-card__body">
                            <h2 className="Drawer-card__title">{item.title}</h2>
                            <span className="Drawer-card__cost">{item.cost} руб.</span>
                        </div>
                        <img
                            className="Drawer-card__close"
                            src="/img/close.svg"
                            alt="close"
                            onClick={() => DeleteCard(item)}
                        />
                    </div>)}
                </div>
                <div className="Drawer-price">
                    <li className="Drawer-price__item">
                        <p className="Drawer-price__desk">Итого:</p>
                        <div ></div>
                        <span>{totalPrice} руб.</span>
                    </li>
                    <li className="Drawer-price__item">
                        <p className="Drawer-price__desk">Налог 5%</p>
                        <div ></div>
                        <span>{totalPrice / 100 * 5} руб.</span>
                    </li>
                    <button className="Drawer-price__btn" onClick={onClickOrder}>Оормить заказ</button>
                </div>
            </div> : <Info
                    image={isOrderComplete ? "/img/order_Complete.png" :"/img/drawer_clear.png"}
                    title={isOrderComplete ? "Заказ оформлен!" : "Корзина пустая"}
                    description={isOrderComplete ? `Ваш заказ #${orderId} скоро будет передан курьерской доставке`
                        : 'Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.'}
                />}
        </div>
    );
};

export default Drawer;