import React, { useState } from 'react';

function FourRows(props) {
    // Declare a new state variable, which we'll call "count"


    return (
        <div className="Grid4">


            <div className="w-full h-48 flex flex-wrap items-center -mx-2 py-2">

                {/* block */}
                <div className="w-full   lg:w-1/4 flex items-center p-2">
                    {props.grid-1}
                </div>


                {/*  */}

                <div className="w-full  lg:w-1/4 flex flex-wrap p-2">
                {props.grid-2}

                </div>

                {/*  */}
                <div className="w-fulll lg:w-1/4 flex flex-wrap p-2">

                {props.grid-3}
                </div>

                {/*  */}

                <div className="w-full lg:w-1/4 flex p-2  items-center justify-center">

                {props.grid-4}
                </div>



            </div>


        </div>
    );
}

export default FourRows;