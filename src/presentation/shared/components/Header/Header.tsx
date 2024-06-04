import Link from "next/link";
import dynamic from "next/dynamic";

import { UseValidateAccessToken } from "../../hooks/UseValidateAccessToken";

import styles from "./Header.module.css"

const NoSSRShoppingCart = dynamic(() => import("../ShoppingCart"), { ssr: false })

export const Header = async () => {
  const { customer } = await UseValidateAccessToken();
  return (
    <header className={styles.Header}>
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
      </nav>
      <div className={styles.Header__user}>
        {customer?.firstName ? (<p>Hola! {customer.firstName}</p>) : (<Link href="/login">Login</Link>)}
        <NoSSRShoppingCart />
      </div>
    </header>)
}