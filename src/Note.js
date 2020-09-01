import React from 'react'
import {NavLink} from 'react-router-dom';

export default function Note(props){
    console.log(props)
    return (
        <>
        <NavLink to={`/note/${props.id}`}>
            <h3>{props.name}</h3>
            <p>Date Modified: {props.modified}</p>   
        </NavLink>
            <button>
                Delete Note
            </button>
        </>
    )
}