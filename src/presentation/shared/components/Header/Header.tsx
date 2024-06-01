import Link from 'next/link'

import { UseValidateAccessToken } from '../../hooks/UseValidateAccessToken';

import styles from './Header.module.css'

export const Header = async () => {
  const { customer } = await UseValidateAccessToken();
  return (
    <header>
      <nav>
        <ul className={styles.Header__list}>
          <li>
            <Link href="/">
              Home
            </Link>
          </li>
          <li>
            <Link href="/store">
              Store
            </Link>
          </li>
        </ul>
        {customer?.firstName ? (<p>Hola {customer?.firstName}!</p>) : (<Link href="/login">Login</Link>)}
      </nav>
    </header>)
}