import { useEffect, useState } from 'react'
import CatWidget from './widgets/CatWidget'
import JokeWidget from './widgets/JokeWidget'
import QuoteWidget from './widgets/QuoteWidget'
import styles from './Widgets.module.css'
import Button from './cssComponents/Button'

const Widgets = () => {
    const [widget, setWidget] = useState<'Cats' | 'Jokes' | 'Quote' | 'none'>('Quote')

    const getWidget = () => {
        switch(widget){
            case 'Cats':
                return <CatWidget/>
            case 'Jokes':
                return <JokeWidget/>
            case 'Quote':
                return <QuoteWidget/>
            default:
                return <div>No widget selected</div>
        }
    } 

    return <div>
        <div className='row'>
            <Button onClick={() => setWidget('Quote')} text='Quote of the Day'/>   
            <Button onClick={() => setWidget('Cats')} text='Cats'/> 
            <Button onClick={() => setWidget('Jokes')} text='Jokes'/>
            <Button onClick={() => setWidget('none')} text='none'/>
        </div>
        <div className={widget !== 'Quote' ? styles.widgetBody : styles.noScrollBody}>{getWidget()}</div>
    </div>
}

export default Widgets