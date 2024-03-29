import React, { useContext } from 'react';
import { appSetStateContext } from '../AppState';
import { RobotProps } from './Robot'

export const withAddToCart = (ChildComponent: React.ComponentType<RobotProps>) => {
  return (props: any) => {
    const setState = useContext(appSetStateContext)
    const addToCart = (id: number, name: string) => {
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
    return <ChildComponent {...props} addToCart={addToCart}></ChildComponent>
  }
}

export const useAddToCart = () => {
  const setState = useContext(appSetStateContext)
  const addToCart = (id: number, name: string) => {
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
  return addToCart
}