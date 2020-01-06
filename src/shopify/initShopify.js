import Client from 'shopify-buy';


const client = Client.buildClient({
  domain: '34i35.myshopify.com', //zwookwa store
  storefrontAccessToken: '32c0f631233ba8fa812d2eca8db0c295'
});


const testShop = async () =>{

  let result = []

  // const client = Client.buildClient({
  //       domain: '34i35.myshopify.com', //zwookwa store
  //       storefrontAccessToken: '32c0f631233ba8fa812d2eca8db0c295'
  //   });



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

        return collections[0].products;
      }).then(r => result = r);


    return result
      

      
      // // Fetch a single collection by ID, including its products
      // const collectionId = 'Z2lkOi8vc2hvcGlmeS9Db2xsZWN0aW9uLzM2OTMxMjU4NA==';
      
      // client.collection.fetchWithProducts(collectionId).then((collection) => {
      //   // Do something with the collection
      //   console.log(collection);
      //   console.log(collection.products);
      // });

};


export { testShop, client};
