import { useState, useEffect } from 'react'
import { Cat } from '../interfaces'
import styles from './CatImage.module.css'

interface CatImageProps {
    cat: Cat
}

const CatImage = (props: CatImageProps) => {
    const [loaded, toggleLoaded] = useState<boolean>(false)

    return (
        <div style={{position: 'relative'}} className='row'>
            {!loaded && <div className='loader'/>}
            <img 
                className={styles.catImg}
                height="200px"
                src={props.cat.url}
                onLoad={() => toggleLoaded(true)}
                alt="new"
            />

        </div>
    )
}

export default CatImage
