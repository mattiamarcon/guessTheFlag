"use client"

import { useEffect, useRef, useState } from "react"
import { Country } from "../types/Types"
import MyDialog from "./MyDialog"
import { useRouter } from "next/navigation";

interface propType{
    nazioni:Country[],
}

function CheckFlag({nazioni}:propType) {

    const [toCheck,setToCeck]=useState<Country[]>([]);
    const [winner,setWinner]=useState<Country>();
    const [display,setDisplay]=useState(false);

    const correct = useRef(false);

    useEffect(()=>{
        setDisplay(false)
        correct.current=false;
        if(toCheck.length<4)
            defineCountries();
        if(toCheck.length===4)
            chooseWinner();
    },[toCheck,winner]); 


    function defineCountries(){
        const random=Math.floor(Math.random()*nazioni.length);
        setToCeck([...toCheck,nazioni[random]]);
    }

    function chooseWinner(){
        const random=Math.floor(Math.random()*toCheck.length);
        setWinner(toCheck[random]);  
    }

    function checkAnswer(nome:string){ 
        setDisplay(true)
        if(winner?.nome===nome)  
            correct.current=true
        console.log(correct.current)
    }

    return (
        <>
            <div className="relative h-20">
                <button className="p-3 rounded-md border-black border-2 cursor-pointer w-fit right-8 absolute" onClick={()=>setToCeck([])}>Rigioca</button>
            </div>
            <img src={winner?.bandiera} alt="" className='h-32 md:h-48 mx-auto border-black border-2' />
            <div className='rounded p-5 grid grid-cols-2 grid-rows-2 border-4 border-black w-full lg:w-3/4 mx-auto gap-5 items-center justify-center my-10 bg-purple-600'>
                {toCheck.map(nz=>(
                    <div className="mx-auto rounded-md p-5 h-full md:py-14 border-4 border-black w-full text-xl text-center font-semibold break-words cursor-pointer bg-white" key={nz.nome} onClick={()=>checkAnswer(nz.nome)}>{nz.nome}</div>
                ))}          
            </div>
            {display && <MyDialog risposta={correct.current} />} 
        </>
        
    ) 
}

export default CheckFlag