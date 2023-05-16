export type Product = {
    title: string,
    price: number,
    isDiscount: boolean,
    discountValue: number;
    id: number,
    image: string,
    rate: number,
    category: Category
}

export type ProductInCart = {
    title: string,
    price: number,
    id: number,
    image: string,
    amount: number,
}

export type ContainerContent = {
    products: Array<Product>
}

export type ProductInfo = Product & {isFavourite: boolean};

export type StateType = {
    products: Product[]
}

export type CartStateType = {
    products: ProductInCart[]
}

export const enum Category {
    wireHeadphones='Наушники', 
    wirelessHeadPhones='Беспроводные наушники'
}