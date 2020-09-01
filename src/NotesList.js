import React from 'react'
import Note from './Note'

export default function NotesList(props){
    console.log(props)
    return (
        <>
            <ul>
                {props.notes.map((note)=>
                    <Note
                        key={note.id}
                        id={note.id}
                        name={note.name}
                        content={note.content}
                        folder={note.folderId}
                        modified={note.modified}
                        />
                )}
            </ul>
            <button>Add Note</button>
        </>
    )
}