import React from 'react'
import Folder from './Folder'

export default function FolderList(props){
    // console.log(props)
    return (
        <>
            <ul>
                {props.folders.map((folder)=>
                    <Folder
                        key={folder.id}
                        id={folder.id}
                        name={folder.name}
                        />
                )}
            </ul>
            <button>Add Folder</button>
        </>
    )
}