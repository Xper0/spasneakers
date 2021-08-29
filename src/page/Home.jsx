import React, {useState,useContext} from 'react';
import Header from "../components/Header/Header";
import Cards from "../components/Carts/Cards";
import Drawer from "../components/Drawer/Drawer";
import AppContext from "../context/Context";
import "../components/Carts/Cards"
import CarouselSlider from "react-carousel-slider";
import ContentLoader from "react-content-loader";

const Home = () => {

    const [search, setSearch] = useState('')
    //Создание пагинации кнопок в зависимости от данных
    const elementOnPage = 8; // - сколько элементов на странице хочу
    const [page, setPage] = useState(1)
    const {card, isLoading}  = useContext(AppContext)

    const endOnPage = page * elementOnPage; // конечный счет элементов
    const startOnPage = endOnPage  - elementOnPage; // - начальный счет элементов
    let notes = card.slice(startOnPage, endOnPage) // разделения массива (для вывода на экран)
    const paginateBtn = Math.ceil(card.length / elementOnPage) // - кол-во кнопок от данных

    const pagnation = [];
    for(let i = 1; i <= paginateBtn; i++){
        pagnation.push(i)
    }



    function onSearchValue(event){
        setSearch(event.target.value)
    }


    const handlclick = (event) => {
        const elem =  event.target.innerText
        setPage(elem)

    }

    const prevBtn = () => {
        setPage(prev => prev - 1)
    }
    const nextBtn = () => {
        setPage(prev => prev + 1 )
    }
    let sliderBoxStyle = {
        height: "100%",
        width: "90%",
        marginTop: "20px",
        background: "transparent",
        borderRadius: "20px",
        zIndex: 1
    };


    let buttonSetting = {
        placeOn: "middle-inside",
        style:	{
            left: {
                borderRadius: "30px",
                background: "#FFFFFF",
                color: "#C8C8C8",
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.4)",

            },
            right: {
                borderRadius: "30px",
                background: "#FFFFFF",
                color: "#C8C8C8",
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.4)",

            }}
    }
    let itemsStyle ={
        width: "200px",
        height: "70px",
        margin: "-280px 1px",
        background: "none",
        color: "#8BB43C",
        fontSize: "38px"

    }
    let accEle  = {
        dots: false
    }
    let data = [
        {
            des: "Stan Smith Forever!",
            imgSrc: "/img/slider1.png"
        },
        {
            des: "Stan Smith Forever!",
            imgSrc: "/img/Hustle.jpg"
        }

    ];
    let customSlideCpnts = data.map((item,index) =>
        <div style={{height: "400px", width: "100%"}} key={index}>
            <img  src={item.imgSrc} alt="slider"/>
            <p style={itemsStyle}>{item.des}</p>

    </div>)

    return (

        <div>
            <Header />
            <CarouselSlider
                accEle={accEle}
                slideCpnts={customSlideCpnts}
                sliderBoxStyle={sliderBoxStyle }
               buttonSetting={buttonSetting}

            />
            <div className="cards-content">
                <div className="cards-header">
                    <h1 className="cards__title">Все кроссовки</h1>
                    <div className="search-body">
                        <img src="/img/search.svg" alt="search"/>
                        <input
                            className="search__input"
                            placeholder="Поиск..."
                            onChange={onSearchValue}
                            value={search}
                        />
                    </div>
                </div>
                <div className="Cards-body">
                    {isLoading ? ([...Array(elementOnPage)].map((item,index) => <div key={index} className="Card-info">
                        <ContentLoader
                            speed={2}
                            width={155}
                            height={250}
                            viewBox="0 0 155 265"
                            backgroundColor="#f3f3f3"
                            foregroundColor="#ecebeb">
                            <rect x="1" y="0" rx="10" ry="10" width="155" height="155" />
                            <rect x="0" y="167" rx="5" ry="5" width="155" height="15" />
                            <rect x="0" y="187" rx="5" ry="5" width="100" height="15" />
                            <rect x="1" y="234" rx="5" ry="5" width="80" height="25" />
                            <rect x="124" y="230" rx="10" ry="10" width="32" height="32" />
                        </ContentLoader></div>)) : (
                        notes.filter((item) => item.title.toLowerCase().includes(search.toLowerCase()) ||
                            item.cost >= search ).map((item, index) =>
                            <Cards key={index} items={item} loading={isLoading}  />))
                    }
                </div>
                <div className="pagination">
                    <ul className="pagination__items">
                        <li className="pagination__list" onClick={() => prevBtn()}><a href="/#">&lt;</a></li>
                        {pagnation.map((item, index) =>
                            <li
                                className="pagination__list"
                                key={index}
                                onClick={(event) => handlclick(event)}
                            ><a href="/#" className="active">{item}</a>
                            </li>)}
                        <li className="pagination__list" onClick={() => nextBtn()}><a href="/#">&gt;</a></li>
                    </ul>
                </div>
            </div>
            <Drawer />
            
        </div>
    );
};

export default Home;