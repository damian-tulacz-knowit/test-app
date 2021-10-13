import { FC } from "react";
import NavBar from "../NavBar/NavBar";
import style from "./Layout.module.scss";

const Layout: FC = (props) => {
  return (
    <main className={style.main}>
      <div className={style.page}>
        <NavBar />
        <section className={style["page__content"]}>{props.children}</section>
      </div>
    </main>
  );
};

export default Layout;
