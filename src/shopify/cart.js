import React, { useState, useEffect, useRef, useCallback } from "react";
import { client } from "../shopify/initShopify";
import LineItem from "./lineItem";

//delete current value and then freshesh what is in the var

function Cart() {
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")));
  //const [cartStatus, setCartStatus] = useState('cart');
  const [checkoutId, setCheckoutId] = useState(
    localStorage.getItem("checkoutId")
  );
  const [checkoutUrl, setCheckoutUrl] = useState(localStorage.getItem("checkoutUrl"));
  const [lineItemsToAdd] = useState([]);
  const [lineItemsCheckoutID] = useState([]);
  const asyncFaker = useRef();

  const addItems = useCallback(() => {
    let listItems = [];

    if (cart != null) {
      cart.map((e, i) => {
        console.log(i);
        if (e != undefined) {
          listItems.push({
            variantId: e.variantId,
            quantity: parseInt(e.quantity)
          });
        }
      });
    }

    if (listItems.length > 0) {
      client.checkout.addLineItems(checkoutId, listItems).then(checkout => {
        // Do something with the updated checkout

        console.log("line items");
        console.log(checkout.lineItems); // Array with one additional line item
        console.log(checkout.lineItems[0].id); // Array with one additional line item
        lineItemsCheckoutID.push(checkout.lineItems[0].id);
        return checkout.lineItems.id;
      });
    }

    // customAttributes: [{key: "MyKey", value: "MyValue"}]

    //this is not full proof
  }, [cart,checkoutId,lineItemsCheckoutID]);
  //const [checkout, setCheckout] = useState({});
  const checkout = useCallback(() => {
    //turn this into a function on its own to be called from the begining 
    if (checkoutId != undefined) {
      client.checkout.fetch(checkoutId).then(checkout => {
        // filterLineItems();
        setCheckoutUrl(checkout.attrs.webUrl.value);
        // Do something with the checkout
        console.log(checkout);
        addItems();
      });
    } else {
      client.checkout.create().then(checkout => {
        localStorage.setItem("checkoutId", checkout.attrs.id);
        setCheckoutId(checkout.attrs.id);
        setCheckoutUrl(checkout.attrs.webUrl.value);
        console.log(checkout);
        addItems();
        // filterLineItems();
        //setCheckout(checkout);
      });
    }

    //     const checkoutId = 'Z2lkOi8vc2hvcGlmeS9DaGVja291dC9kMTZmM2EzMDM4Yjc4N=';
    // const input = {customAttributes: [{key: "MyKey", value: "MyValue"}]};

    // client.checkout.updateAttributes(checkoutId, input).then((checkout) => {
    //   // Do something with the updated checkout
    // });
  }, [addItems, checkoutId]);

  useEffect(() => {
    console.log(cart);

    asyncFaker.current = setTimeout(checkout(), 3000);

    return () => clearInterval(asyncFaker.current);

  }, [cart, checkout]);

  const listCart = (i = cart) => {
    if (i != null) {
      return i.map((e, i) => {
        console.log(i);
        if (e != undefined) {
          return (
            <div
              key={i}
              onClick={() => removeFromCart(i, lineItemsCheckoutID[i])}
            >
              {e.title}
            </div>
          );
        }
      });
    } else {
      return <div>Empty Cart</div>;
    }
  };

  const removeFromCart = (index, item) => {
    delete cart[index];
    console.log(item);
    removeItem(item);

    localStorage.setItem("cart", JSON.stringify(cart));
    setCart(JSON.parse(localStorage.getItem("cart")));
  };



 

  const updateItems = () => {
    // const lineItemsToUpdate = [
    //     {id: 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0Lzc4NTc5ODkzODQ=', quantity: 2}
    //   ];

    // Update the line item on the checkout (change the quantity or variant)
    client.checkout
      .updateLineItems(checkoutId, lineItemsToAdd)
      .then(checkout => {
        // Do something with the updated checkout
        console.log(checkout.lineItems); // Quantity of line item 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0Lzc4NTc5ODkzODQ=' updated to 2
      });
  };

  const removeItem = item => {
    client.checkout.removeLineItems(checkoutId, [item]).then(checkout => {
      // Do something with the updated checkout
      console.log(checkout.lineItems); // Checkout with line item 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0Lzc4NTc5ODkzODQ=' removed
    });
  };

  const discountCode = () => {
    //     const discountCode = 'best-discount-ever';
    // // Add a discount code to the checkout
    // client.checkout.addDiscount(checkoutId, discountCode).then(checkout => {
    //   // Do something with the updated checkout
    //   console.log(checkout);
    // });
  };

  const shippingAddress = () => {
    // const shippingAddress = {
    //     address1: 'Chestnut Street 92',
    //     address2: 'Apartment 2',
    //     city: 'Louisville',
    //     company: null,
    //     country: 'United States',
    //     firstName: 'Bob',
    //     lastName: 'Norman',
    //     phone: '555-625-1199',
    //     province: 'Kentucky',
    //     zip: '40202'
    //   };
    //  // Update the shipping address for an existing checkout.
    //  client.checkout.updateShippingAddress(checkoutId, shippingAddress).then(checkout => {
    //    // Do something with the updated checkout
    //  });
  };

  // const filterLineItems = () =>{

  //     cart.map((e, i) => {
  //         if(e != undefined){

  //             lineItemsToAdd.push({
  //                 quantity: parseInt(e.quantity),
  //                 variantId:e.variantId
  //             });
  //         }

  //     });

  //     //customAttributes: [{key: "MyKey", value: "MyValue"}]

  // }

  return (
    <div>
      {listCart(cart)}

      <a href={checkoutUrl} className=" p-2 text-white bg-black">
        Checkout
      </a>
    </div>
  );
}

export default Cart;
