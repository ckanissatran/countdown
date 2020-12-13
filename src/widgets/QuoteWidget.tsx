import { useEffect, useState } from 'react'
import getQuote from '../api/getQuote'
import { Quote } from '../interfaces'
import styles from './QuoteWidget.module.css'

const QuoteWidget = () => {
    const [quote, setQuote] = useState<Quote>()
    const [refresh, toggleRefresh] = useState<boolean>(true)

    useEffect(() => {
        if (refresh){
            getQuote().then(setQuote)
            toggleRefresh(false)
        }
    }, [refresh])

    return <>
        {quote &&
            <div 
                style={{backgroundImage: `url(${quote.contents.quotes[0].background})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }}
                className={styles.image}
            >
                <div>"{quote.contents.quotes[0].quote}"</div>
                <div>- {quote.contents.quotes[0].author}</div>
            </div>
        } 
    </>
}

export default QuoteWidget