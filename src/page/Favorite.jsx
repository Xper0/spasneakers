import React, {useContext} from 'react';
import Header from "../components/Header/Header";
import AppContext from "../context/Context";
import Cards from "../components/Carts/Cards";
import "../components/Carts/Cards.scss";
import Drawer from "../components/Drawer/Drawer";
import Info from "../components/DrawerStatus/DrawerStatus";

const Favorite = () => {

    const { cardElected } = useContext(AppContext)

    return (

        <div className="Favorite">
            <Header/>
            <Drawer />
            <div className="cards-content">
                <div className="cards-header">
                    <h1 className="Favorite__title">Мои закладки</h1>
                </div>
                {cardElected.length > 0 ? ( <div className="Cards-body">
                    {cardElected.map((item, index) => <Cards key={index} items={item} favorited={true}/>)}
                </div>) : (<Info
                    image={"/img/smileFavorite.png"}
                    title={"Закладок нет :("}
                    description={"Вы ничего не добавляли в закладки"}
                />)}
            </div>
        </div>
    );
};

export default Favorite;