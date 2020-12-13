import {Quote} from '../interfaces'

const getQuote = async (): Promise<Quote> => {
    const response = await fetch('https://quotes.rest/qod')
    return response.json()
}

export default getQuote