import Link from "next/link";
import css from "./Header.module.css";
import TagsMenu from "../TagsMenu/TagsMenu";
// import { getTags } from "@/lib/api";

const Header = async () => {
  const tags = [
    { id: 1, name: "Todo" },
    { id: 2, name: "Work" },
    { id: 3, name: "Work" },
  ];

  // const categories = await getTags();

  return (
    <header className={css.header}>
      <Link href="/" aria-label="Home">
        NoteHub
      </Link>
      <nav aria-label="Main Navigation">
        <ul className={css.navigation}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <TagsMenu categories={tags} />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
