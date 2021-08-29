import React, {useEffect, useState} from 'react';
import Header from "../components/Header/Header";
import Drawer from "../components/Drawer/Drawer";
import "../components/Carts/Cards.scss";
import Cards from "../components/Carts/Cards";
import axios from "axios";
import Info from "../components/DrawerStatus/DrawerStatus";

const Orders = () => {

    const styl = {
        cursor: "pointer",
        background: "#9DD579",
        width: "200px",
        height: "35px",
        borderRadius: "20px",
        border: "none",
        color: "#FFF",
        fontSize: "16px"
    }

    const [order, setOrder] = useState([])

   async function deleteAllOrders(){
       setOrder([])
       const {data} = await axios.get("https://611644418f38520017a387c1.mockapi.io/orders");
       for (let i = 0; i < data.length ; i++) {
            console.log(order[i])
           await axios.delete('https://611644418f38520017a387c1.mockapi.io/orders/' + data[i].id);
       }
    }

    useEffect(() => {
        (async () => {
            try {
                const {data} = await axios.get("https://611644418f38520017a387c1.mockapi.io/orders");
                console.log(data)
                setOrder(data.reduce((prev, obj) => [...prev, ...obj.items], []))


            } catch(error){
                alert("ошибка заказа")
                console.error(error)

            }
        })();
    },[])

    return (
        <div>
            <div className="Orders">
                <Header/>
                <Drawer />
                <div className="cards-content">
                    <div className="cards-header">
                        <h1 className="Favorite__title">Мои заказы</h1>
                        <button style={styl} onClick={deleteAllOrders}>Очистить все заказы</button>
                    </div>
                    {order.length > 0 ? (
                        <div className="Cards-body">
                        {order.map((item, index) => <Cards key={index} items={item} />)}
                    </div>) :
                        (
                            <Info
                        image={"/img/smileOrder.png"}
                        title={"У вас нет заказов"}
                        description={"Оформите хотя бы один заказ."}
                    />)}
                </div>
            </div>
        </div>
    );
};

export default Orders;