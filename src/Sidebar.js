import React from 'react';
// import store from './store';
// import FolderList from './FolderList'

export default function Sidebar(props){
    return (
            <div className= 'sidebar container'>
                {props.children}
            </div>
    )
}