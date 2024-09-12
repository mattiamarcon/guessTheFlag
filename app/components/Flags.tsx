"use client"
import { useState } from 'react'
import { Country } from '../types/Types';
import Filter from './Filter';
import { useRouter } from 'next/navigation';

interface propType{
    countries:Country[]
}

function Flags({countries}:propType) {

    const router = useRouter();

    const [data,setData] = useState<Country[]>(countries);

    const handleFilter=(arrayFiltrato:Country[])=>{
        setData(arrayFiltrato)
    }
   
    return (
        <>  
            <Filter elements={countries} handleFilter={handleFilter} />
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 w-full gap-5 cursor-pointer' >
                {data.map((nazione,i)=>(
                    <div className='border-4 rounded-md p-3 border-black flex flex-col text-center' key={i} onClick={()=>router.push(`/cercanazione/nazione/${nazione.nome}`)}>
                        <img src={nazione.bandiera} alt="" className='h-32 md:h-48' />
                        <h1 className='m-3 text-xl font-semibold'>{nazione.nome}</h1>
                    </div>
                ))}
            </div>
        </>
         
        
    )
}

export default Flags

// redirection(nz.translations.ita.common)
