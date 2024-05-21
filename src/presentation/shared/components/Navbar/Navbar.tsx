import { UseGetAllCollections } from "../../hooks/UseGetAllCollections";
import { NavbarItem } from "./components/NavbarItem/NavbarItem";

import styles from "./Navbar.module.css";

export const Navbar = async () => {
  const { collections } = await UseGetAllCollections();

  return (
    <nav className={styles.Navbar}>
      <ul className={styles.Navbar__list}>
        {
          collections?.map(collection => (
            <NavbarItem key={collection.id} {...collection} />
          ))
        }
      </ul>
    </nav>
  )
}