import MainNavigation from "../../components/MainNavigation/MainNavigation";
import SmallScreenNavigation from "../../components/SmallScreenNavigation/SmallScreenNavigation";
import Logo from "../../components/Logo/Logo";
import LinkButton from "../../components/LinkButton/LinkButton";
import styles from "./Topbar.module.css";

function Topbar() {
  return (
    <div className={styles.topbar}>
      <Logo width='96' height='40' />
      <MainNavigation />
      {process.env.NODE_ENV !== "production" && <LinkButton to='/user/login' label='Moja Pralma' classes='linkButton_small_text'></LinkButton>}
      <SmallScreenNavigation />
    </div>
  );
}
export default Topbar;
