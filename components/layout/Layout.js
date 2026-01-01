import styles from "./Layout.module.css";
import Link from "next/link";

function Layout({ children }) {
  return (
    <>
      <header className={styles.header}>
        <Link href="/">
          <h2>CAR GALLERY</h2>
          <p>Choose and Buy your car</p>
        </Link>
      </header>
      <div>{children}</div>
      <footer className={styles.footer}>
        Iman Emadzade Next.Js course | CarGallery Project &copy;
      </footer>
    </>
  );
}

export default Layout;
