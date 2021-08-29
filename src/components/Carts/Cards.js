import React, {useContext, useState} from 'react';
import AppContext from "../../context/Context";
import "./Cards.scss";

const Cards = ({items, favorited = false, loading = false}) => {

    const [elected, setElected] = useState(favorited)
    const { onAddCard , onAddItemElected, isItemAdded }  = useContext(AppContext)

    function addItemDrawer(item){
        onAddCard(item)
    }

    function addItemElected(item){
        setElected(!favorited)
        onAddItemElected(item)
    }

    return (

        <div className="Card-info">
            <img
                className="cards__elected"
                src={elected ? "/img/unelected.svg" : "/img/elected.svg"}
                alt="elected"
                onClick={() => addItemElected({...items})}
            />
            <img className="cards__img" src={items.img} alt="sneakers"/>
            <h2 className="cards__title">{items.title}</h2>
            <div className="cards__control">
                <div className="cards-info-cost">
                    <p className="cards__price">Цена: </p>
                    <span className="cards_cost">{items.cost}</span>
                </div>
                <img className="cards__btn"
                     src={isItemAdded(items) ? " /img/Ok.svg" : "/img/plus.svg"}
                     alt="Plus"
                     onClick={() => addItemDrawer({...items, parentId: items.id})}
                />
            </div>
        </div>
    );
};

export default Cards;