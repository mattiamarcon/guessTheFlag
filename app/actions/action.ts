"use server"

import { Country,FetchedData } from "../types/Types";

export async function getCountries() {
    const json = await fetch("https://restcountries.com/v3.1/all");
    const data = await json.json();

    const coutries:Country[]=[];

    data.map((element:FetchedData) => {
        coutries.push({
            nome:element.translations.ita.common,
            bandiera:element.flags.svg,
            continente:element.region,
        })
    });

    return coutries;
}
