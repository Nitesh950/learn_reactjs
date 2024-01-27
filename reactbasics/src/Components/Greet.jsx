import React from 'react'

const Greet = (props) => {
    return (
        <>
             <h2>This is a functional Component for {props.name}</h2>
             {props.children}
        </>
    )
}



export default Greet