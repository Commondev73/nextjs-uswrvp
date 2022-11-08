import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/Layout.module.css";

const Layout = ({ children }) => {
  const router = useRouter();

  return (
    <div>
      <nav>
        <ul className={styles.navlist}>
          <li
            className={
              router.pathname === "/" ? styles.navitemactive : styles.navitem
            }
          >
            <Link href="/">Instructions</Link>
          </li>
          <li
            className={
              router.pathname === "/tokens"
                ? styles.navitemactive
                : styles.navitem
            }
          >
            <Link href="/tokens">Tokens</Link>
          </li>
        </ul>
      </nav>

      <main>{children}</main>
    </div>
  );
};

export default Layout;
