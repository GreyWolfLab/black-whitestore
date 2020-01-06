import React, {Component} from 'react';
import MyContext from './dataContect';
import {cartLength} from './compoennt/cartInit';

class MyProvider extends Component{

    // state = {}
  
    render() {
      return(
        <MyContext.Provider value={0}>
          {this.props.children}
        </MyContext.Provider>
      )
    }
  
  }


  export default MyProvider;


  // cartLength(JSON.parse(localStorage.getItem('cart')))