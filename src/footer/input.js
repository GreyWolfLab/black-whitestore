import React, { useState } from 'react';

function FooterInput(props) {
  // Declare a new state variable, which we'll call "count"
  const [title] = useState(props.title);
  const [name] = useState(props.name);

  return (
    <div className="w-full flex flex-wrap items-start justify-start">
            
            
    <div className="w-full flex flex-wrap items-center">
    <div className="w-3 px-1"><svg className="w-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 62.93 113.67"><path d="M0,.6,0,35.19H39.22s17.27.13,17.81-18c0,0,1.62-15.74-19-17.18L0,.05Z"/><path d="M0,77.1l0,36.57H43.26s19,.13,19.64-19c0,0,1.79-16.64-21-18.16L0,76.52Z"/></svg></div>
  <p className="uppercase txt font-default-light ">{title}</p>
  </div>
   


  <div className="w-full flex flex-wrap">
    <p className="uppercase txt mx-3 font-default-medium">{name}</p>
    </div>


    </div>



  );
}

export default FooterInput;