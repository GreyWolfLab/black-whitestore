import { client } from "../shopify/initShopify";



const emptyFunc = () => {
    console.log("Happy Shopping");
}

const intiCheckout = (func = emptyFunc) => {
          console.log("setting you up to buy")

          let  checkoutId = localStorage.getItem("checkoutId");

    //turn this into a function on its own to be called from the begining 
    if (checkoutId != undefined) {
      client.checkout.fetch(checkoutId).then(checkout => {
        // filterLineItems();
        localStorage.setItem("checkoutUrl", checkout.attrs.webUrl.value);
        //setCheckoutUrl(checkout.attrs.webUrl.value);
        // Do something with the checkout
        console.log(checkout);
        func();
        //addItems();
      });
    } else {
      client.checkout.create().then(checkout => {
        localStorage.setItem("checkoutId", checkout.attrs.id);
        localStorage.setItem("checkoutUrl", checkout.attrs.webUrl.value);
        //setCheckoutId(checkout.attrs.id);
        //setCheckoutUrl(checkout.attrs.webUrl.value);
        console.log(checkout);
        //send in function
        func();
        //addItems();
        // filterLineItems();
        //setCheckout(checkout);
      });
    }

    //     const checkoutId = 'Z2lkOi8vc2hvcGlmeS9DaGVja291dC9kMTZmM2EzMDM4Yjc4N=';
    // const input = {customAttributes: [{key: "MyKey", value: "MyValue"}]};

    // client.checkout.updateAttributes(checkoutId, input).then((checkout) => {
    //   // Do something with the updated checkout
    // });
  






}

 



export default intiCheckout;
