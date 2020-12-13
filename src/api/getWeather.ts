import {Weather} from '../interfaces'

const getWeather = async (): Promise<Weather> => {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Bagram&units=metric&appid=${process.env.REACT_APP_WEATHER_API_KEY}`)
    return response.json()
}

export default getWeather