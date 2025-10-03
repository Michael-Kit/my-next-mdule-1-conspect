// components/Header/Header.tsx
// components/Header/Header.tsx

import Link from "next/link";
import CategoriesMenu from "../CategoriesMenu/CategorisMenu";
import { categories } from "@/lib/api";

const Header = async () => {
  // Симуляція getCategories без запиту
  const getCategories = async () => Promise.resolve(categories);
  const categoryList = await getCategories();

  return (
    <header>
      <Link href="/" aria-label="Home">
        NoteHub
      </Link>
      <nav aria-label="Main Navigation">
        <ul>
          <li>
            <CategoriesMenu categories={categoryList} />
          </li>
          <li>
            <Link href="/profile">Profile</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
