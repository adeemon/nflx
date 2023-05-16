import React, { useEffect, MouseEvent } from 'react';
import { Button } from 'antd'
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import styles from '../styles/productCard.module.scss';
import { Product } from '../types/Types';
import { useAppDispatch } from '../store/store';
import { FavoriteButtonIcon } from './FavouriteButtonIcon';
import { addProductToCart } from '../slices/CartSlice';

type ImageInfo = {
    src: string
}

export const myLoader = ({src} : ImageInfo) => {
    return src;
}

export const MemoizedCard = React.memo(ProductCard);

export default function ProductCard ({title, price, isDiscount, discountValue, id, image, rate, category} : Product) {
    const dispatch = useAppDispatch();

    const onBuyHandler = (e : MouseEvent) => {
        let amount = 1;
        const product = {title, price, discountValue, id, image, rate, amount};
        dispatch(addProductToCart(product))
        e.preventDefault();
        e.stopPropagation();
    }

    const { ref, inView, entry } = useInView({
        threshold: 0,
      });

    useEffect(()=> {
        console.log(inView ? 'rendered with content':'rendered without content')
        console.log(`Card ${id + ' '} rendered ${inView}`);
    })

    let priceToRender = isDiscount ?
    <div>
        <div className={styles.currentPrice}>{price-discountValue + ' ₽'}</div>
        <div className={styles.oldPrice}>{price + ' ₽'}</div>
    </div>
    :
    <div>
        <div className={styles.currentPrice}>{price-discountValue + ' ₽'}</div>
    </div>

    let componentRender =
    <div className={styles.container} >       
        <div className={styles.image}>
            <Image src={image}
            width={220}
            height={240}
            alt={title + ' image'} />
        </div>
        <div className={styles.info}>
        <div className={styles.name}>
            {title}
        </div>
        <div className={styles.priceInfo}>
            {priceToRender}
        </div>
        </div>
        <div className={styles.options}>
        <div className={styles.rate}>
            <div className={styles.rateImage}>
            <Button 
                    icon={<FavoriteButtonIcon />} onClick={()=> console.log('Этого нет в ТЗ')}/>
            </div>
            <div className={styles.rateAmount}>{rate}</div>
        </div>
        <div className={styles.buyButton}>
        <Button onClick={ e => onBuyHandler(e)}>
            Купить
        </Button>
        </div>
        </div>
    </div>

    return (
        <div ref={ref}>
            {componentRender}
        </div>
    )
}

