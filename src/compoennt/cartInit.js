
const cartLength = (i) =>{
    let total = 0;

    if(i != null){
        i.map((e, i) => {
       
            if(e != undefined){
                ++total;
            }
        });
    
      
        return total;
    }else{
        return 0
    }

  
}


export {cartLength};