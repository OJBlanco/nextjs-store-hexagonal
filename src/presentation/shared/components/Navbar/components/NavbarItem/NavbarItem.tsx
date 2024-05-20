import Link from "next/link";

interface NavbarItemProps {
  handle: string;
  title: string;
}

export const NavbarItem = ({ handle, title}: NavbarItemProps) => {
  return (
    <Link href={`/store/${handle}`}>
      {title}
    </Link>
  )
}