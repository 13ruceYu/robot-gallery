import React, { useContext } from 'react'
import styles from './Robot.module.css';
import { appContext } from '../AppState'
import { withAddToCart } from './AddToCart'

export interface RobotProps {
  id: number,
  name: string,
  email: string,
  addToCart: (id: number, name: string) => void
}

const Robot: React.FC<RobotProps> = (props) => {
  const { id, name, email, addToCart } = props;
  const value = useContext(appContext)
  return (
    <div className={styles.cardContainer}>
      <img src={`https://robohash.org/${id}`} alt="robot" />
      <h2>{name}</h2>
      <p>{email}</p>
      <p>作者：{value.username}</p>
      <button onClick={() => addToCart(id, name)}>add to cart</button>
    </div>
  )
}

export default withAddToCart(Robot)