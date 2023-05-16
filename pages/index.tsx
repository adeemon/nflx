import ReactVisibilitySensor from 'react-visibility-sensor'
import { InferGetStaticPropsType } from 'next'
import React, { useEffect } from 'react'
import styles from '../styles/index.module.scss'

// import MempozedMainContainer from '../components/MainContainer'
import  MemoizedCard  from '../components/ProductCard'
import { Category, Product } from '../types/Types'
import { selectAllFavourites } from '../slices/FavouritesSlice'
import { selectAllProducts } from '../slices/ProductsContainerSlice'
import { useAppDispatch, useAppSelector } from '../store/store'

export default function Home({products} : InferGetStaticPropsType<typeof getStaticProps>) {
  const favouritesSelected = useAppSelector(selectAllFavourites);
  const productsSelected = useAppSelector(selectAllProducts);
  const dispatch = useAppDispatch();

  
  const wireToRender = getRenderedProductsArray(productsSelected.get(Category.wireHeadphones));
  const wirelessToRender = getRenderedProductsArray(productsSelected.get(Category.wirelessHeadPhones));

  useEffect(() => {
    console.log(wireToRender);
    console.log(wirelessToRender)
    console.log
  },[])

  return (
    <>
      <p className={styles.categoryName}>Наушники</p>
      <div className={styles.container}>
        {wireToRender}
      </div>
      <p className={styles.categoryName}>Беспроводные наушники</p>
      <div className={styles.container}>
        {wirelessToRender}
      </div>
    </>
  )
}

export const getStaticProps = async () => {
  let products: Product[] = [];
  try {
    const fetchedData = await fetch('https://63971d5d86d04c76338b3ee4.mockapi.io/api/nfts');
    const result = await fetchedData.json();
    products = result;
  } 
  catch {
    console.error('Error on parsing');
  } 
  finally {
    return {
      props: {
        products,
      }
    }
  }
}


let getRenderedProductsArray = (productsArray : any) => {
  let output = [];
  output = productsArray.map((product : any) => {
      return (
        <MemoizedCard {...product} key={product.id} />
        )
      }
    )
    return output;
}
