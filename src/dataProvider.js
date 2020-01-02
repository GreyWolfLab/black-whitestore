import React, {Component} from 'react';
import MyContext from './dataContect';


class MyProvider extends Component{

    state={
  
    }
  
    render() {
      return(
        <MyContext.Provider value="I'm the values">
          {this.props.children}
        </MyContext.Provider>
      )
    }
  
  }


  export default MyProvider;