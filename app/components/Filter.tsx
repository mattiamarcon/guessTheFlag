"use client"
import { useEffect, useState } from 'react'
import { Country } from '../types/Types'

interface propType{
    elements:Country[],
    handleFilter:Function,
}

function Filter({elements,handleFilter}:propType) {

    const [text,setText] = useState("");

    useEffect(()=>{
        filtElements()
    },[text])

    function filtElements(){
        const risultato=elements.filter(((value)=>value.nome.slice(0,text.length).toLowerCase().includes(text.toLowerCase())));

        handleFilter(risultato);
    }
        
    return (
        <>
            <input type="text" className='rounded-md border-2 border-black p-2 text-xl cursor-pointer my-10' 
                onChange={(e)=>{
                    setText(e.target.value);
                }}
                placeholder='Filtra elementi' />
        </>
    )
}

export default Filter