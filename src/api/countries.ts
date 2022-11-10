

const baseUrl = 'https://restcountries.com/v2'

const params = new URLSearchParams({ fields: 'name,flag,capital,population,region' })

const createParams = (codes: string) => {
    return new URLSearchParams({ codes: codes, fields: 'name' })
}

const paramsByName = new URLSearchParams({ fields: 'name,flag,capital,population,region,nativeName,subregion,borders,currencies,languages,topLevelDomain' })


const getCountries = async () => {
    const result = await fetch(baseUrl + '/all?' + params)
    if (!result.ok) {
        throw new Error('Status: ' + result.status)
    }
    return result.json()
}

const searchByName = async (name: string) => {
    const result = await fetch(baseUrl + '/name/' + name + '?' + paramsByName)
    if (!result.ok) {
        throw new Error('My Error')
    }
    const [json] = await result.json()
    return json
}

const searchByRegion = async (region: string) => {
    const result = await fetch(baseUrl + '/region/' + region + '?' + params)
    if (!result.ok) {
        throw new Error('My Error')
    }
    return result.json()
}

const searchByCode = async (codes: string) => {
    const result = await fetch(baseUrl + '/alpha/' + '?' + createParams(codes))
    if (!result.ok) {
        throw new Error('My Error')
    }

    return result.json()
}


export { getCountries, searchByRegion, searchByCode, searchByName }