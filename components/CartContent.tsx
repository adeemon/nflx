
import { ProductCardInCart } from '../components/ProductCardInCart'

import { removeProduct, selectCartProducts } from '../slices/CartSlice'
import { useAppDispatch, useAppSelector } from '../store/store'
import styles from '../styles/cartContent.module.scss'


export default function CartContent () {
    const products = useAppSelector(selectCartProducts);
    const dispatch = useAppDispatch();

    const onDeleteProductHandler = (id : number) => {
        dispatch(removeProduct(id));
    }

    let totalPrice : number = 0;
    const productsArrayToRender = products.map(element => {
        totalPrice = totalPrice + Number(element.price);
        return (
            <ProductCardInCart id={element.id} title={element.title}
            amount={element.amount} image={element.image} price={element.price} key={element.id}/>
        );
    })

    return (
        <div className={styles.container}>
            {productsArrayToRender}
            <div className={styles.totalPrice}>
                <div>Total price</div>
                <div className={styles.price}>
                    {totalPrice}
                    </div>
            </div>
        </div>
    )
}