import React, { useState, useEffect } from "react";
import {shopCollection as collectionInit} from "./initCollection";
import ProductCatalog from "./product";
import MyContext from "../dataContect";
import { BrowserRouter, Route, Link, withRouter } from "react-browser-router";
import LineItem from "./lineItem";
import defaultProduct from './defaultProduct';
import Cart from "./cart";
import {cartLength} from '../compoennt/cartInit';
import SubNav from "../navigation/subNav";
import Back from '../compoennt/backButton';
import Foward from "../compoennt/fowardButton";
import initCheckout from './initCheckout';

function CollectionCatalog() {
  const [products, setProducts] = useState([]);
  const [collection, setCollection] = useState([]);
  const [production, setProduct] = useState([]);
  //Create a you have not selected a store yet 
  const [item, setItem] = useState(defaultProduct);
  const [section, setSection] = useState([]);
  const [title, setTitle] = useState('Black & White');
  const [backTitle, setBackTitle] = useState('');
  const [back, setBack] = useState('');
  const [subTitle, setSubTitle] = useState('');
  const [loading, setLoading] = useState(false);
  const [cart, setCart] = useState(cartLength(JSON.parse(localStorage.getItem('cart'))));

  useEffect(() => {
    if (!loading) {
      collectionInit()
        .then(r => setCollection(r))
        .then(setLoading(true));
    }

    if(cart == 0){
      localStorage.setItem('cart',JSON.stringify([]));
    }
    

    initCheckout();
    //setCart(cartLength(JSON.parse(localStorage.getItem('cart'))));
    
    //setTitle("Black & White");

  }, [products,loading,cart]);

  const ReturnCollection = () => {
    return collection.map((e, i) => {
      return (
        <div
          key={i}
          className="max-w-md  w-full h-48 p-1 items-center justify-center"
        >
          <Link
            to="/products"
            className="w-full bg-black h-full text-white flex items-center justify-center text-xl uppercase appearance-none"
            onClick={() => {
              setProducts(e.products);
              //setTitle(e.title)
              setBackTitle("Back")
              setSubTitle(e.title)
            }}
          >
            {e.title}
          </Link>
        </div>
      );
    });
  };

  const ReturnProducts = () => {
    return products.map((e, i) => {
      return (
        <div key={i} className="max-w-sm  w-full h-64 p-1">
          <div className="w-full h-full bg-black flex flex-wrap">
            <img
              alt={e.attrs.images[0].altText}
              src={e.attrs.images[0].attrs.src}
            ></img>
            <div className="w-full flex justify-end">
            <div className="lg:w-64 p-2">{e.title}</div>
            <Link to="/product"  className="lg:w-32 bg-red-500 p-2 appearance-none" onClick={() => {setItem(e) 
                 setTitle("Citizen Bank")
                 setBackTitle("Back")
                // setSubTitle("Black & White")
                 setBack('products')
            }}>Buy</Link>
            </div>
           
          </div>
        </div>
      );
    });
  };



  return (
    <BrowserRouter>
      <React.Fragment>
        <div className="p-2 w-full h-10 lg:h-16 bg-black text-white  flex items-center justify-center text-lg uppercase appearance-none">
            <Back></Back>
            <Link to={"/"} className="w-full flex text-xs lg:text-sm justify-center appearance-none">
            {title}
            </Link>
            <Foward title={subTitle}></Foward>

        </div>

        <SubNav></SubNav>

        <Route exact path="/" component={ReturnCollection} />

        <Route path="/products" component={ReturnProducts} />
        <Route path="/cart" component={Cart} />

        <Route path="/product" render={() => (<LineItem product={item}></LineItem>)} />
      </React.Fragment>
    </BrowserRouter>
  );
}

export default CollectionCatalog;
