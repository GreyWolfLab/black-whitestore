import React, { useState, useEffect, useRef } from "react";

function LineItem(props) {
  const [product] = useState(props.product);
  const [initCart, setInitCart] = useState({quantity:0});
  const [variant, setVariant] = useState({});
  const [variantPrice, setVariantPrice] = useState(0);
  const cart  = useRef(JSON.parse(localStorage.getItem('cart')));
  
  useEffect(() => {
    console.log(product);
    
    if(cart == null){
      localStorage.setItem('cart',JSON.stringify([]));
    }

    
  }, []);

  const initVariant = (e) => {
    console.log(e.target.name);
    console.log(e.target.value);


    setVariant(Object.assign(variant,{["variant"+ (e.target.name)]:e.target.value}));

    //remove
    console.log(variant);
  }

  const reInitCart = (e) => {

    console.log("reinitCart");
    console.log(variant);
    let variantID = getVariantID(variant);
    
    console.log(variantID);

    setInitCart(Object.assign(initCart,{quantity: e.target.value, variantId: variantID }));

  }

  //call get variant id 
  function returnOptions() {

     return(
        product.attrs.options.map((e, i) => {
                return (
                  <div className="w-full h-12 flex items-center lg:text-2xl p-2 ">

                    <div className="flex justify-start lg:w-1/2  uppercase">
                            {e.attrs.name.value}
                    </div>
                    
                    <div className=" flex justify-end lg:w-1/2">
                    <select key={i} name={e.attrs.name.value} onChange={(e) => initVariant(e)} >
                    <option> Select a {e.attrs.name.value}</option>
                            {e.attrs.values.value.map((f) =>{
                                    return(
                                            <option  value={f.value}>{f.value}</option>
                                    )
                            })}
                    </select>
                    </div>
             
                  </div>
                );
              })
     )

  }

  function getVariantID(e){
       
          let i = 0;
          let z = "";


          for (let [key, value] of Object.entries(e)) {
                //console.log(`${key}: ${value}`);

                if(i > 0){
                        z = z + " / " + value;
                }else{
                z = value;
                }

                i++;

              }

              let variantID = "";
            product.variants.map((e => {
                      if(e.attrs.title.value === z){
                             variantID = e.attrs.id.value;
                             setVariantPrice(e.attrs.price.value);
                      }
              }))


              return variantID;
                
            

                
          
       
  }

  function addtoCart(){

    //this is temporary change this to a more subtle noticable update
    alert("added to cart")

          let imageObject = {alt : product.attrs.images[0].attrs.altText, src: product.attrs.images[0].attrs.src}
          let productTitle = {title: product.attrs.title.value}
          let currentProductPrice = {price: (variantPrice * initCart.quantity)}
          //find out why the vatiant does not update
          setInitCart(Object.assign(initCart,imageObject,productTitle,currentProductPrice))

          console.log(initCart);
          console.log(currentProductPrice);

          if(cart != null){
            console.log(cart)
            let currentCart = JSON.parse(localStorage.getItem('cart'));
            
            currentCart.push(initCart)
            localStorage.setItem('cart', JSON.stringify(currentCart));
           // cart.current.push(initCart)
            console.log(currentCart)
          }
          //localStorage.setItem('cart', JSON.stringify(cart));
  //         }else{
 
  //             console.log(cart)
  //  //localStorage.setItem('cart', JSON.stringify(initCart));
 
  // //  cart.push(initCart)
  // //  localStorage.setItem('cart', JSON.stringify(cart));
  //         }
         
       


  }

  return (
    <React.Fragment>
      <div className="w-full flex flex-wrap">
        <div className="w-full lg:w-1/2 flex items-center justify-center  p-2 lg:h-screen">
          <img
            className="max-w-lg"
            alt={product.attrs.images[0].attrs.altText}
            src={product.attrs.images[0].attrs.src}
          />
        </div>

        <div className="w-full lg:w-1/2 flex  items-center justify-center p-2 lg:h-screen">
          
          <div className="flex-wrap">
          <p className="max-w-lg text-right">
            {product.attrs.description.value}
          </p>

          {returnOptions()}
          
          <div className="quantity w-full flex uppercase p-2 text-2xl">
                  <div className="w-48 lg:w-1/2 flex justify-start ">quantity</div>
                  <div className="w-24 lg:w-1/2 flex justify-end"><input className="w-12 text-right" placeholder="0" onChange={(e) => reInitCart(e) }></input></div>
          </div>

          <div className="quantity w-full flex uppercase p-2 text-2xl">
                  <div className="w-48 lg:w-1/2 flex justify-start ">Price</div>
                  <div className="w-24 lg:w-1/2 flex justify-end">R {variantPrice * initCart.quantity}</div>
          </div>


          <div className="addToCart p-2">
                  <div className="bg-black uppercase text-white text-center w-full p-2 text-2xl cursor-pointer" onClick={() => addtoCart()}>Add To Cart</div>
          </div>
          </div>
     
        </div>
      </div>
    </React.Fragment>
  );
}

export default LineItem;
