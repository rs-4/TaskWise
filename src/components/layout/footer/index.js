import Link from "next/link";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import styles from "./style.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li className={styles.navListItem}>
              <Link href="/" style={{ textDecoration: "none" }}>
                <div className={styles.navItem}>Accueil</div>
              </Link>
            </li>
            <li className={styles.navListItem}>
              <Link href="/a-propos" style={{ textDecoration: "none" }}>
                <div className={styles.navItem}>A propos</div>
              </Link>
            </li>
            <li className={styles.navListItem}>
              <Link href="/contact" style={{ textDecoration: "none" }}>
                <div className={styles.navItem}>Contact</div>
              </Link>
            </li>
          </ul>
        </nav>
        <div className={styles.social}>
          <a href="#" className={styles.socialLink}>
            <FaFacebook />
          </a>
          <a href="#" className={styles.socialLink}>
            <FaInstagram />
          </a>
          <a href="#" className={styles.socialLink}>
            <FaTwitter />
          </a>
        </div>
      </div>
      <div className={styles.copy}>
        &copy; 2023 My Website. Tous droits réservés.
      </div>
    </footer>
  );
}
