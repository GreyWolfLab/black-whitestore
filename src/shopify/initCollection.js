import Client from 'shopify-buy';


const client = Client.buildClient({
  domain: '34i35.myshopify.com', //zwookwa store
  storefrontAccessToken: '32c0f631233ba8fa812d2eca8db0c295'
});

const shopCollection = async () =>{

  let result = []

  // const client = Client.buildClient({
  //       domain: '34i35.myshopify.com', //zwookwa store
  //       storefrontAccessToken: '32c0f631233ba8fa812d2eca8db0c295'
  //   });

  //   console.log("change")


//     // Create an empty checkout
// client.checkout.create().then((checkout) => {
//   // Do something with the checkout
//   console.log(checkout);
// });

    

    
    
    // Fetch all collections, including their products
    await  client.collection.fetchAllWithProducts().then((collections) => {
        // Do something with the collections
         console.log(collections);
        // console.log(collections[0].products);

        return collections;
      }).then(r => result = r);


    return result;
      



};


export {shopCollection, client};
