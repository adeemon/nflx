import React, { useEffect } from 'react'
import styles from '../styles/cart.module.scss'
import { useAppDispatch, useAppSelector } from '../store/store'
import { selectCartProducts } from '../slices/CartSlice'
import { MemoizedCardInCart } from '../components/ProductCardInCart'
import { Button } from 'antd'

export default function Cart() {
  const cartSelected = useAppSelector(selectCartProducts);
  const dispatch = useAppDispatch();
  let cartPriceTotal = 0;
  useEffect(() => {
    console.log(cartSelected);
  },[])

  const cartToRender = cartSelected.map((element) => {
    console.log(element);
    cartPriceTotal += element.price * element.amount;
    console.log(cartPriceTotal)
    return <MemoizedCardInCart {...element} key={element.id} />
  })

  return (
    <>
      <div className={styles.title}>Корзина</div>
      <div className={styles.container}>
       <div className={styles.goods}>
        {cartToRender}
       </div>
       <div className={styles.total}>
        <div className={styles.priceTotal}>
        <div>
            Итого
        </div>
        <div>
        {cartPriceTotal + ' ₽'}
        </div>
        </div>
        <div className={styles.confirmButton}>
        <Button>
            Перейти к оформлению
        </Button>
        </div>
       </div>
      </div>
    </>
  )
}
