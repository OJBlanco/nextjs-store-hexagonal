import Link from "next/link";

import styles from "./NavbarItem.module.css";

interface NavbarItemProps {
  handle: string;
  title: string;
}

export const NavbarItem = ({ handle, title}: NavbarItemProps) => {
  return (
    <Link href={`/store/${handle}`} className={styles.NavbarItem}>
      {title}
    </Link>
  )
}