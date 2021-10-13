import Button from "../../UI/Button/Button";
import style from "./NavBar.module.scss";
import NavLink from "./NavLink/NavLink";

const NavBar = () => {
  return (
    <nav className={style.nav}>
      <header>IZAI</header>
      <NavLink href="/">Home</NavLink>
      <Button href="/analyze" className={style["to-right"]}>
        Analyze
      </Button>
    </nav>
  );
};

export default NavBar;
