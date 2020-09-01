import React from 'react'
import {NavLink} from 'react-router-dom';

export default function Folder(props){
    // console.log(props)
    return (
        <NavLink to={`/folder/${props.id}`}>
            <button>
                {props.name}
            </button>
        </NavLink>
    )
}