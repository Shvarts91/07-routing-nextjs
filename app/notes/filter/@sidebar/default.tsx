import Link from "next/link";
import css from "./SidebarNotes.module.css";

const tags = ["Work", "home", "meeting"];

const SidebarNotes = () => {
  return (
    <ul className={css.menuList}>
      {tags.map((tag) => (
        <li key={tag} className={css.menuItem}>
          <Link href={tag} className={css.menuLink}>
            {tag}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default SidebarNotes;
