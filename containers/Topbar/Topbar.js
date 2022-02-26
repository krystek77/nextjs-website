import MainNavigation from "../../components/MainNavigation/MainNavigation";
import Image from "next/image";
import Link from "next/link";
import Logo from '../../components/Logo/Logo';
import styles from "./Topbar.module.css";

function Topbar() {
  return (
    <div className={styles.topbar}>
      <Logo width="96" height="40"/>
      <MainNavigation />
    </div>
  );
}
export default Topbar;
