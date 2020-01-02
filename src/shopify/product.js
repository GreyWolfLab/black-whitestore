import React, { useState, useEffect } from 'react';
import shopInit from './initShopify';


function ProductCatalog(props) {
    
    const [products, setProducts] = useState(props.product);
    const [loading, setLoading] = useState(false);

    useEffect(() => {

        if(!loading){
            shopInit().then( r => setProducts(r)).then(setLoading(true));
        }
    

      },[products,loading]);



      const returnProducts = () =>{

        return(
            products.map((e) =>{
                return(
                    <div className="max-w-sm  w-full h-64 p-1">
                    <div className="w-full h-full bg-black">
                        <img alt={e.attrs.images[0].altText} src={e.attrs.images[0].attrs.src}></img>
                        <div className="w-full">{e.title}</div>
                    </div>
                  </div>
                )
            })
        )



      }

    return (
   <React.Fragment>
       {returnProducts()}
   </React.Fragment>
    );
}

export default ProductCatalog;