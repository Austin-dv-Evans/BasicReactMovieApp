import React from 'react'

export default function MovieCard({name, image}){
    return(
        <li>
            <h2>{name}</h2>
            <img src={image}/>
        </li>
    )
}