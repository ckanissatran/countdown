import { useEffect, useState } from 'react'
import getCats from '../api/getCats'
import { Cat } from '../interfaces'
import styles from './CatWidget.module.css'
import Button from '../cssComponents/Button'
import Input from '../cssComponents/Input'
import CatImage from './CatImage'

const CatWidget = () => {
    const [cats, setCats] = useState<Cat[]>([])
    const [limit, setLimit] = useState<number>(5)
    const [refresh, toggleRefresh] = useState<boolean>(true)

    useEffect(() => {
       fetchdata(limit)
    }, [])

    const fetchdata = async (limit: number) => {
        const response = await getCats(limit)
        setCats(response);
    }

    return <>
        <div className='row'>
            <Button onClick={() => fetchdata(limit)} text='MORE CATS!'/> 
            <Input onChange={(e) => setLimit(e)} value={limit}/>
        </div>

        <div className={styles.widgetWindow}>
            {cats?.map((cat: Cat) => <CatImage key={cat.id} cat={cat}/>)} 
        </div>
    </>
}

export default CatWidget