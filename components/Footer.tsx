import styles from '../styles/footer.module.scss'
import globusIcon from '../images/globus.svg'
import vkIcon from '../images/VK.svg'
import telegrammIcon from '../images/Telegram.svg'
import waIcon from '../images/Whatsapp.svg'
import Image from 'next/image'

export function Footer() {
  return (
    <footer className={styles.container}>
        <div className={styles.companyName}>QPICK</div>
        <div className={styles.footerNavigation}>
            <div className={styles.footerLink}>
              <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Избранное</a>
            </div>
            <div className={styles.footerLink}>
              <a target={'_blank'} rel={'noreferrer'} href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                Корзина
              </a>
            </div>
            <div className={styles.footerLink}>
              <a target={'_blank'} rel={'noreferrer'} href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                Контакты
                </a>
            </div>
        </div>
        <div className={styles.footerOptions}>
          <div className={styles.footerLink}>
            <a target={'_blank'} rel={'noreferrer'} href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
              Условия сервиса
            </a>
          </div>
          <div className={styles.optionButtons}>
            <div className={styles.optionsButton}>
              <Image src={globusIcon} alt='Иконка глобуса' height={15} width={15} />
            </div>
            <div className={styles.optionsButtonActive + ' ' + styles.active}>
              Рус
            </div>
            <div className={styles.optionsButton}>
              Eng
            </div>
          </div>
        </div>
        <div className={styles.footerContants}>
            <div className={styles.socnetButton}>
              <a target={'_blank'} rel={'noreferrer'} href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                <Image src={vkIcon} alt='Иконка вконтакте' height={30} width={30} />
              </a>
            </div>
            <div className={styles.socnetButton}>
              <a target={'_blank'} rel={'noreferrer'} href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                <Image src={telegrammIcon} alt='Иконка телеграмм' height={30} width={30} />
              </a>
            </div>
            <div className={styles.socnetButton}>
              <a target={'_blank'} rel={'noreferrer'} href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                <Image src={waIcon} alt='Иконка WhatsApp' height={30} width={30} />
              </a>
            </div>
        </div>
    </footer>
  )
}
