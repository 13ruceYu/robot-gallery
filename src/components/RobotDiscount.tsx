import React, { useContext } from 'react'
import styles from './Robot.module.css';
import { appContext } from '../AppState'
import { useAddToCart } from './AddToCart'

interface RobotDiscountProps {
  id: number,
  name: string,
  email: string
}

const RobotDiscount: React.FC<RobotDiscountProps> = (props) => {
  const { id, name, email } = props;
  const value = useContext(appContext)
  const addToCart = useAddToCart()
  return (
    <div className={styles.cardContainer}>
      <img src={`https://robohash.org/${id}`} alt="robotDiscount" />
      <h2>discount!</h2>
      <h2>{name}</h2>
      <p>{email}</p>
      <p>作者：{value.username}</p>
      <button onClick={() => addToCart(id, name)}>add to cart</button>
    </div>
  )
}

export default RobotDiscount