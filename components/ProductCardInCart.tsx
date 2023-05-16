import Image from "next/image";
import React, { useEffect, MouseEvent } from 'react';
import { Button } from 'antd'
import { useInView } from 'react-intersection-observer';

import styles from '../styles/productCardInCart.module.scss';
import { ProductInCart, ProductInfo } from '../types/Types';
import { useAppDispatch } from '../store/store';
import { DeleteIcon } from '../components/DeleteIcon'
import { IncreaseIcon } from '../components/IncreaseIcon'
import { DecreaseIcon } from '../components/DecreaseIcon'
import { addProductAmount, reduceProductAmount, removeProduct } from "../slices/CartSlice";

type ImageInfo = {
    src: string
}

export const myLoader = ({src} : ImageInfo) => {
    return src;
}

export const MemoizedCardInCart = React.memo(ProductCardInCart);

export function ProductCardInCart ({title, image, price, id, amount} : ProductInCart) {
    const dispatch = useAppDispatch();
    const onDeleteHandler = (e : MouseEvent) => {
        dispatch(removeProduct(id))
        e.preventDefault();
        e.stopPropagation();
    }

    const onIncreaseHandler = (e : MouseEvent) => {
        dispatch(addProductAmount(id))
        e.preventDefault();
        e.stopPropagation();
    }

    const onDecreaseHandler = (e : MouseEvent) => {
        if(amount === 1) {
            dispatch(removeProduct(id))
        } else {
            dispatch(reduceProductAmount(id))
        }
        e.preventDefault();
        e.stopPropagation();
    }


    const { ref, inView, entry } = useInView({
        threshold: 0,
      });

    useEffect(()=> {
        console.log(image + ' rendering');
    })

    return (
        <div className={styles.container} key={id}>
          <div className={styles.productInfo}>
            <Image src={image} alt={"logo"} width={200} height={200} />
            <div className={styles.mainInfo}>
              <div className={styles.title}>{title}</div>
              <div className={styles.price}>{price + ' ₽'}</div>
            </div>
            <div className={styles.deleteButton}>
                <Button type="primary" shape="circle" onClick={(e)=> onDeleteHandler(e)} icon={<DeleteIcon />} />
            </div>
          </div>
          <div className={styles.productOptions}>
            <Button type="primary" shape="circle" onClick={(e)=> onDecreaseHandler(e)} icon={<DecreaseIcon />} />
            <div className={styles.amount}>{amount}</div>
            <Button type="primary" shape="circle" onClick={(e)=> onIncreaseHandler(e)}icon={<IncreaseIcon />} />
            <div className={styles.totalPrice}>{price * amount + ' ₽'}</div>
          </div>
        </div>
    )
}

