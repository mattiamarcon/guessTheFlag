export interface Country{
    nome:string,
    bandiera:string,
    continente:string,
}

export interface FetchedData{
    flags:{
        svg:string,
    },
    translations:{
        ita:{
            common:string,
        }
    },
    region:string
}