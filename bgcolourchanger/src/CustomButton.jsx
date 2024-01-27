import React, { useState } from 'react'

function Button({color="black", onClick}){
    
    function setColorName(color){
        return color.charAt(0).toUpperCase() + color.slice(1);
    }

    return(
    <button className='p-2 rounded-3xl'
    style={{backgroundColor:color, color:"white"}}
    onClick={onClick}>
        {setColorName(color)}
    </button>
    )
}

export default Button