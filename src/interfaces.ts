export interface Cat {
    breeds: []
    height: number
    id: string
    url: string
    width: number
}

export interface Joke {
    type: string,
    value: {
        id: number,
        joke: string,
        categories: string[]
    }
}

export interface Quote {
    success: {
        total: 1
    },
    contents: {
        quotes: [{
            //this one
            quote: string,
            length: number,
            //this one
            author: string,
            tags: string[],
            category: string,
            language: string,
            date: number,
            permalink: string,
            id: string,
            //this one
            background: string,
            title: string
        }]
    },
    baseurl: string,
    copyright: {
        year: number,
        url: string
    }  
}

export interface Weather {
    coord: {
      lon: number,
      lat: number
    },
    weather: [
      {
        id: number,
        //this
        main: string,
        description: string,
        icon: any
      }
    ],
    base: any,
    main: {
        //this
      temp: number,
      feels_like: number,
      temp_min: number,
      temp_max: number,
      pressure: number,
      humidity: number
    },
    visibility: number,
    wind: {
      speed: number,
      deg: number
    },
    clouds: {
      all: number
    },
    dt: number,
    sys: {
      type: number,
      id: number,
      country: any,
      sunrise: number,
      sunset: number
    },
    timezone: number,
    id: number,
    name: any,
    cod: number
  }