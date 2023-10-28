import './MapForm.css'
import { Component } from 'react'

export default function MapForm({ state, handleChange }) {

    return(
        <>
            <section className='MapForm'>
            <label>Name</label>
            <input 
            type="text" 
            name='name' 
            value={state.name}
            onChange={handleChange}
            />
            <label>Folder</label>
            <input 
            type="text" 
            name='folder' 
            value={state.folder}
            onChange={handleChange}
            />
            </section>
        </>
    )
}