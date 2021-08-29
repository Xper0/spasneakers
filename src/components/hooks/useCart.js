import AppContext from "../../context/Context";
import {useContext} from "react";


export const useCart = () => {
    const {drawerCard, openDraw, setOpenDraw} = useContext(AppContext)

    const totalPrice = drawerCard.reduce(( sum, obj) => parseInt(obj.cost + sum), 0)

    return {openDraw, setOpenDraw, totalPrice}
}