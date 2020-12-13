import {useEffect, useState} from 'react'
import {Joke} from '../interfaces'
import Button from '../cssComponents/Button'
import getChuckNorris from '../api/getChuckNorris'

const JokeWidget = () => {
    const [joke, setJoke] = useState<Joke>()
    const [refresh, toggleRefresh] = useState<boolean>(true)

    useEffect(() => {
        fetchdata()
    }, [])

    const fetchdata = async () => {
        toggleRefresh(true);
        const response = await getChuckNorris()
        setJoke(response);
        toggleRefresh(false);
      }

    return <>
        <Button onClick={() => fetchdata()} text='Pls give me jokes'/>
        <div className='row'>
            {!refresh 
                ? <div>{joke?.value.joke}</div>
                : <div className='loader'/>    
            }
        </div>
    </>
}

export default JokeWidget