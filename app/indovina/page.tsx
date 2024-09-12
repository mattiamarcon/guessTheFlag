import { getCountries } from '../actions/action';
import CheckFlag from '../components/CheckFlag';

async function page() {

    const countries = await getCountries();

    

    return (
        <>
             
            <img src="" alt="" className='h-32 md:h-48' />
            <CheckFlag nazioni={countries} />

        </>
     )
}

export default page