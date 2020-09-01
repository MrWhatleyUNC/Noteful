import React from 'react'

export default function Main(props){
    return (
            <main className='container'>
                {props.children}
            </main>
    )
}