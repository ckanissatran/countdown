import {Cat} from '../interfaces'

const getCats = async (limit: number): Promise<Cat[]> => {
    const response = await fetch(`https://api.thecatapi.com/v1/images/search?limit=${limit}`)
    return response.json()
}

export default getCats