import Link from 'next/link'
import styles from '../styles/header.module.scss'
import { CartIcon } from './CartIcon'
import { FavouriteIcon } from './FavouritesIcon'

export function Header() {
  return (
    <header className={styles.container}>
        <div className={styles.companyName}>
          <Link href='/'> QPICK </Link>
        </div>
        <div className={styles.buttons}>
            <div className={styles.button}>
                <FavouriteIcon />
            </div>
            <div className={styles.button}>
            <Link href='/cart'> <CartIcon /> </Link>
            </div>
        </div>
    </header>
  )
}
