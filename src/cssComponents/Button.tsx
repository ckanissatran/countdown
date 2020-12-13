import styles from './Button.module.css'

interface ButtonProps{
    text?: string
    onClick?: () => void
}

const Button = ({text ='', onClick}: ButtonProps) => {
    return <div className={styles.button} onClick={onClick}>{text}</div>
}

export default Button