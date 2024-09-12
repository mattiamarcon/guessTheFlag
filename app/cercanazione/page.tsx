import Flags from "../components/Flags";
import { getCountries } from "../actions/action";


export default async function CercaNazione() {

    const countries = await getCountries();

    return (
      <main className="flex min-h-screen flex-col items-center p-24">
          <Flags countries={countries} />
      </main>
    );
}