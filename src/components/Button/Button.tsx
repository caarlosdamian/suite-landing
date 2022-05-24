import { ButtonProps } from '../../interfaces'
import './Button.scss'

export const Button = ({label,...props}:ButtonProps) => {
  return (
    <button className={props.className}>{label}</button>
  )
}
