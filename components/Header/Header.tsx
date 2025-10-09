// components/Header/Header.tsx
import Link from "next/link";
import { getCategories } from "@/lib/api";
import CategoriesMenu from "../CategoriesMenu/CategorisMenu";
import css from "./Header.module.css"; // ✅ правильний шлях

const Header = async () => {
  const categories = await getCategories();

  return (
    <header className={css.header}>
      <Link href="/" aria-label="Home" className={css.logo}>
        NoteHub
      </Link>
      <nav aria-label="Main Navigation" className={css.navigation}>
        <ul className={css.menu}>
          <li>
            <CategoriesMenu categories={categories} />
          </li>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/notes/filter/all">Notes</Link>
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
