import { getCountries } from '@/app/actions/action';
import { Country } from '@/app/types/Types';

async function page({ params }: { params: { nazione:string, } }) {

    const countries = await getCountries();

    const nome=params.nazione.replaceAll("%20"," ");

    const nazione:Country=countries.find(countrie=>countrie.nome===nome) || {nome:nome, bandiera:"", continente:""};

    const {bandiera,continente} = nazione;
    
    return (
        <div className='flex flex-col'>
            <p>{nome}</p>
            <p>{continente}</p>
            <img src={bandiera} alt="" className='h-32 md:h-48' />      
        </div>
    )
}

export default page

