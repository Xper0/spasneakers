import React, {useContext} from 'react';
import AppContext from "../../context/Context";
import "./DrawerStatus.scss";
import {Link} from "react-router-dom";

const DrawerStatus = ({image, title, description}) => {
    const {setOpenDraw} = useContext(AppContext)
    function closeDrawer(){
        setOpenDraw(false)

    }
    return (
        <div className="Drawer-content">
            <div className="Drawer-status" onClick={e => e.stopPropagation()}>
                <img src={image} alt="status"/>
                <h2 className="Drawer-status__title">{title}</h2>
                <p className="Drawer-status__desc">{description}</p>
                <Link to="/"><button className="Drawer-status__btn" onClick={closeDrawer}>Вернуться назад</button> </Link>
            </div>
        </div>
    );
};

export default DrawerStatus;