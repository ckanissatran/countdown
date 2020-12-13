import {Joke} from '../interfaces'

const getChuckNorris = async (): Promise<Joke> => {
    const response = await fetch('http://api.icndb.com/jokes/random?limitTo=[nerdy]')
    return response.json()
}

export default getChuckNorris