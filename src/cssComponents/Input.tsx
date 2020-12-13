import { useState } from "react"
import styles from './Input.module.css'

interface InputProps {
    onChange: (input: number) => void
    value:number
}

const Input = ({onChange, value}: InputProps) => {
    const [input, setInput] = useState<number>(value)
    return (
        <input 
            className={styles.inputBox}
            name='# of cats'
            type='number'
            onChange={(e) => {
                onChange(parseInt(e.target.value))
                setInput(parseInt(e.target.value))
            }} 
            value={input}
        />
    )

}

export default Input