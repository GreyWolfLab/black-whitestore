import React, { useState, useEffect } from "react";

function LineItem(props) {
  const [product] = useState(props.product);

  useEffect(() => {
    console.log(product);
  });

  function returnOptions() {

     return(
        product.attrs.options.map(e => {
                return (
                  <div className="w-full h-12 flex items-center lg:text-2xl p-2 ">

                    <div className="flex justify-start lg:w-1/2  uppercase">
                            {e.attrs.name.value}
                    </div>
                    
                    <div className=" flex justify-end lg:w-1/2">
                    <select >
                            {e.attrs.values.value.map((f) =>{
                                    return(
                                            <option value={f.value}>{f.value}</option>
                                    )
                            })}
                    </select>
                    </div>
             
                  </div>
                );
              })
     )

  }

  return (
    <React.Fragment>
      <div className="w-full flex flex-wrap">
        <div className="w-full lg:w-1/2 flex items-center justify-center h-full lg:h-screen">
          <img
            className="max-w-lg"
            alt={product.attrs.images[0].attrs.altText}
            src={product.attrs.images[0].attrs.src}
          />
        </div>

        <div className="w-full lg:w-1/2 flex  items-center justify-center h-full lg:h-screen">
          
          <div className="flex-wrap">
          <p className="max-w-lg text-right">
            {product.attrs.description.value}
          </p>

          {returnOptions()}
          
          <div className="quantity w-full flex uppercase p-2 text-2xl">
                  <div className="w-48 lg:w-1/2 flex justify-start ">quantity</div>
                  <div className="w-24 lg:w-1/2 flex justify-end"><input className="w-12 text-right" placeholder="0"></input></div>
          </div>

          <div className="quantity w-full flex uppercase p-2 text-2xl">
                  <div className="w-48 lg:w-1/2 flex justify-start ">Price</div>
                  <div className="w-24 lg:w-1/2 flex justify-end">0</div>
          </div>


          <div className="addToCart p-2">
                  <div className="bg-black uppercase text-white text-center w-full p-2 text-2xl">Add To Cart</div>
          </div>
          </div>
     
        </div>
      </div>
    </React.Fragment>
  );
}

export default LineItem;
