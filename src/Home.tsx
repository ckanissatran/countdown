import React, { useEffect, useState } from 'react'
import moment, { Moment } from 'moment'
import styles from './Home.module.css'
import Widgets from './Widgets'
import getWeather from './api/getWeather'
import { Weather } from './interfaces'

const Home = () => {
    //this is the date i'm leaving, we'll refactor this
    //to be editable later
    const leaveDate = moment("2021-May-31")
    const [dateTime, setDateTime] = useState<Moment>(moment())
    const [weather, setWeather] = useState<Weather>()
    
    useEffect(() => {
        const interval = setInterval(() => {
            setDateTime(moment())
          }, 1000);
          return () => clearInterval(interval);
    }, [])

    //fetch weather
    useEffect(() => {
        console.log(process.env.REACT_APP_WEATHER_API_KEY)
        const interval2 = setInterval(() => {
            getWeather().then(setWeather)
          }, 360000);
          return () => clearInterval(interval2);
    }, [])

    return (
        <div>
            <div className={styles.scrollBackground}>
                <div className={styles.sitemessage}>
                    Today is {dateTime.utcOffset(+4.5).format('ddd[, ]MMM Do HHmm')}[L], 
                    {dateTime.utc().format('HHmm')}[Z], 
                    {dateTime.utcOffset(-5).format('HHmm')}[ET], 
                    {dateTime.utcOffset(-8).format('HHmm')}[PT] 
                    {weather && <> It is {weather.main.temp}°C</>} 
                </div>
            </div>

            <div className={styles.timeBody}>
                <div className={styles.row}>
                    <div className={styles.largeNum}>{leaveDate.diff(dateTime, 'days')}</div> 
                    <div className={styles.limitWidth}>days left</div>
                </div>
                <div>{leaveDate.diff(dateTime, 'hours')%24}:{leaveDate.diff(dateTime, 'minutes')%60}:{leaveDate.diff(dateTime, 'seconds')%60}</div>
            </div>

            <Widgets/>
        </div>
    )
}

export default Home