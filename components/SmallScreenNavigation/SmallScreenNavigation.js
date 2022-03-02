import React from "react";
import Image from "next/image";
import Link from "next/link";
import SubNavigation from "../SubNavigation/SubNavigation";
import styles from "./SmallScreenNavigation.module.css";
import { data } from "../../constants/links";

function SmallScreenNavigation() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const open = () => setIsMenuOpen(true);
  const close = () => setIsMenuOpen(false);

  return (
    <div className={styles.smallScreenNavigation}>
      <button onClick={open} className={`${styles.smallScreenNavigation__button} ${styles.smallScreenNavigation__button_open}`} type='button'>
        <Image src='/assets/icons/hamburger.svg' alt='open menu' width='24' height='16' />
        <span className={styles.smallScreenNavigation__caption}>MENU</span>
      </button>
      {isMenuOpen && (
        <div className={styles.smallScreenNavigation__container}>
          <div className={styles.smallScreenNavigation__topbar}>
            <button onClick={close} className={`${styles.smallScreenNavigation__button} ${styles.smallScreenNavigation__button_close}`} type='button'>
              <Image src='/assets/icons/close.svg' alt='close menu' width='16' height='16' />
              <span className={styles.smallScreenNavigation__caption}>CLOSE</span>
            </button>
          </div>
          <div className={styles.smallScreenNavigation__content}>
            {data.map((menu, index) => {
              return (
                <React.Fragment key={`menu_${index + 1}`}>
                  <button className={styles.smallScreenNavigation__header} type='button'>
                    <span className={styles.smallScreenNavigation__title}>{menu.label}</span>
                    <Image src='/assets/icons/collapse_menu.svg' alt='collapse menu' width='32' height='32' />
                  </button>
                  <div>
                    <Link href={menu.path}>
                      <a className={styles.smallScreenNavigation__titleLink}>{menu.label}</a>
                    </Link>
                    <SubNavigation menu={menu} />
                  </div>
                </React.Fragment>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
export default SmallScreenNavigation;
