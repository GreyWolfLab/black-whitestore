import React from "react";
import "./App.css";
import "./style/styles.css";
// import shopInit from './shopify/initShopify';
import CollectionCatalog from "./shopify/collection";
import MyProvider from "./dataProvider";

function App() {
  return (
    <MyProvider>
      <div className="w-full  h-full flex flex-wrap p-1 justify-center">
        <CollectionCatalog ></CollectionCatalog>
      </div>
    </MyProvider>
  );
}

export default App;

// MyContext.Consumer
