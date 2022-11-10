export interface ICountries {
    flag: string;
    name: string;
    population: number;
    region: string;
    capital: string;
}

export interface IInformation {
    name: string
    flag: string
    capital: string
    population: number
    region: string
    nativeName: string
    subregion: string
    currencies: { name: string }[]
    languages: { name: string }[]
    topLevelDomain: string[]
    alpha3Code: string
    borders: string[]
}

export interface IOptions {
    title: string,
    value: string
}