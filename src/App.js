import './App.css';
import {Route} from "react-router";
import Home from "./page/Home";
import Orders from "./page/Orders";
import Favorite from "./page/Favorite";
import {useEffect, useState} from "react";
import axios from "axios";
import AppContext from "./context/Context";


function App() {

    const [card, setCard] = useState([])
    const [drawerCard, setDrawerCard] = useState([])
    const [openDraw, setOpenDraw] = useState(false)
   const [cardElected, setCardElected] = useState([])
    const [isLoading, setIsLoading] = useState(true);

   useEffect(() => {
       async function getCard(){
           try{
               const [card , drawerCard, cardElected] = await Promise.all([
                   axios.get("https://611644418f38520017a387c1.mockapi.io/card"),
                   axios.get("https://611644418f38520017a387c1.mockapi.io/drawer"),
                   axios.get("https://611644418f38520017a387c1.mockapi.io/elected")
               ])

               setIsLoading(false);
               setCard(card.data)
               setDrawerCard(drawerCard.data)
               setCardElected(cardElected.data)
           }
           catch(error) {
               alert("ошибка")
           }
       }
       getCard()
   },[])

    const onAddCard = async (obj) => {
        try{
            const findItem = drawerCard.find((item) => Number(item.parentId) === Number(obj.id));

            if(findItem){
                setDrawerCard((prev) => prev.filter((item) => Number(item.parentId) !== Number(obj.id)))
                await axios.delete(`https://611644418f38520017a387c1.mockapi.io/drawer/${findItem.id}`)
            }else{

               const {data} =  await axios.post("https://611644418f38520017a387c1.mockapi.io/drawer", obj)
                setDrawerCard(prev => [...prev, data])
            }
        }
        catch {
            alert("ошибка добавления товара")
        }
    }

    const onAddItemElected = async (obj) => {
        try {
            const findItemFavorite = cardElected.find((itemFavorite) => Number(itemFavorite.id) === Number(obj.id))
            if(findItemFavorite){
                setCardElected(prev => prev.filter((item) => Number(item.id) !== Number(obj.id)))
                axios.delete(`https://611644418f38520017a387c1.mockapi.io/elected/${findItemFavorite.id}`)

            } else {
                const { data } = await axios.post("https://611644418f38520017a387c1.mockapi.io/elected", obj)
                setCardElected(prev => [...prev, data])
            }

        }
        catch(error) {
            alert("ошибка при добавлении в избранные")
            console.error(error)
        }
    }

    const onRemoveCard = (id) => {
        console.log(id, drawerCard)
        try{
           axios.delete(`https://611644418f38520017a387c1.mockapi.io/drawer/${id}`)
            setDrawerCard((prev) => prev.filter((item) => Number(item.id) !== Number(id)))
        }
        catch(erorr){
            alert(erorr)
        }
    }

    const isItemAdded = (id) => {
        return drawerCard.some((obj) => Number(obj.parentId) === Number(id.id));
    };

  return (
    <div className="App">
      <AppContext.Provider value={{ card, setCard, drawerCard, onAddCard, onRemoveCard,
          openDraw, setOpenDraw, isItemAdded, cardElected, onAddItemElected, isLoading, setDrawerCard}}  >
      <Route exact path="/" component={Home}/>
      <Route  path="/favorite" component={Favorite} />
      <Route  path="/orders" component={Orders} />
      </AppContext.Provider>
    </div>
  );
}

export default App;
