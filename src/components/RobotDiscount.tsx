import React, { useContext } from 'react'
import styles from './Robot.module.css';
import { appContext, appSetStateContext } from '../AppState'

interface RobotDiscountProps {
  id: number,
  name: string,
  email: string
}

const RobotDiscount: React.FC<RobotDiscountProps> = (props) => {
  const { id, name, email } = props;
  const value = useContext(appContext)
  const setState = useContext(appSetStateContext)
  const addToCart = () => {
    if (setState) {
      setState(state => {
        return {
          ...state,
          shoppingCart: {
            items: [...state.shoppingCart.items, { id, name }]
          }
        }
      })
    }
  }
  return (
    <div className={styles.cardContainer}>
      <img src={`https://robohash.org/${id}`} alt="robotDiscount" />
      <h2>discount!</h2>
      <h2>{name}</h2>
      <p>{email}</p>
      <p>作者：{value.username}</p>
      <button onClick={addToCart}>add to cart</button>
    </div>
  )
}

export default RobotDiscount