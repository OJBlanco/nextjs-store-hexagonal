import { UseGetAllCollections } from "../../hooks/UseGetAllCollections"
import { NavbarItem } from "./components/NavbarItem/NavbarItem";

export const Navbar = async () => {
  const { collections } = await UseGetAllCollections();

  return (
    <nav>
      {
        collections?.map(collection => (
          <NavbarItem key={collection.id} {...collection} />
        ))
      }
    </nav>
  )
}