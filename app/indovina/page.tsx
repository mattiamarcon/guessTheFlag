"use client"

import { useEffect, useRef, useState } from "react"
import { Country } from "../types/Types"
import MyDialog from "../components/MyDialog";
import { getCountries } from '../actions/action';

interface propType{
    nazioni:Country[],
}

function CheckFlag() {
    const [countries,setCountries]=useState<Country[]>([]);
    const [toCheck,setToCeck]=useState<Country[]>([]);
    const [winner,setWinner]=useState<Country>();
    const [display,setDisplay]=useState(false);
    const [punti,setPunti]=useState(0);
    const [vite,setVite]=useState(10);

    const correct = useRef(false);

    useEffect(()=>{
        async function returnCountries() {
            const countries=await getCountries();
            setCountries(countries);
        }
        returnCountries();
    },[]);

    useEffect(()=>{
        if(countries.length!==0){
            setDisplay(false)
            correct.current=false;
            if(toCheck.length<4)
                defineCountries();
            if(toCheck.length===4)
                chooseWinner();
        }
        
    },[countries,toCheck,winner]); 

    useEffect(()=>{
        checkVite();
    },[vite])


    function defineCountries(){
        const random=Math.floor(Math.random()*countries.length);
        setToCeck([...toCheck,countries[random]]);
    }

    function chooseWinner(){
        const random=Math.floor(Math.random()*toCheck.length);
        setWinner(toCheck[random]);  
    }

    function checkAnswer(nome:string){ 
        if(winner?.nome===nome)  
            correct.current=true
        adaptPoint(correct.current);
    }

    function adaptPoint(risposta:boolean){
        if(risposta===true)
            setPunti(punti+1)
        setVite(vite-1)
    }

    function restart(){
        setPunti(0);
        setVite(10);
        setToCeck([])
    }

    function checkVite(){
        if(vite===0)
            setDisplay(true);
        else
            setToCeck([]);
    }
    
    function creaMessaggio(){
        const messaggio=`In dieci tentativi hai indovinato ${punti} volte, bravo, ora prova a fare meglio!!`
        return messaggio;
    }

    return (
        <>
            <div className="relative h-24 my-10 items-center align-middle">
                <div className="absolute p-3 flex flex-col ml-10 text-2xl font-medium ">
                    <p>Punti: {punti}</p>
                    <p>Vite: {vite}</p>
                </div>
                <button className="p-3 rounded-md border-black border-2 cursor-pointer right-8 absolute top-1/4  " onClick={restart}>Rigioca</button>
            </div>
            <img src={winner?.bandiera} alt="" className='h-32 md:h-48 mx-auto border-black border-2' />
            <div className='rounded p-5 grid md:grid-cols-2 grid-rows-2 md:border-4 border-black w-full lg:w-3/4 mx-auto gap-5 items-center justify-center my-10 md:bg-orange-400'>
                {toCheck.map(nz=>(
                    <div className="mx-auto rounded-md p-5 h-full md:py-14 border-4 border-black w-full text-xl text-center font-semibold break-words cursor-pointer bg-white max-md:bg-orange-400" key={nz.nome} onClick={()=>checkAnswer(nz.nome)}>{nz.nome}</div>
                ))}          
            </div>
            {display && <MyDialog messaggio={creaMessaggio} restart={restart} />} 
        </>
        
    ) 
}

export default CheckFlag