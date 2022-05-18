import styles from "./styles.module.scss";
import Link from "next/link";
import { Button, Container } from "reactstrap";

interface props {
  btnContent: string;
  btnUrl: string;
  logoUrl: string;
}

const HeaderGeneric = function ({ btnContent, btnUrl, logoUrl }: props) {
  return (
    <>
      <div className={styles.header}>
        <Container className={styles.headerContainer}>
          <Link href={logoUrl}>
            <img
              src="/logoOnebitflix.svg"
              alt="logoRegister"
              className={styles.headerLogo}
            />
          </Link>
          <Link href={btnUrl}>
            <Button outline color="light" className={styles.headerBtn}>
              {btnContent}
            </Button>
          </Link>
        </Container>
      </div>
    </>
  );
};

export default HeaderGeneric;
