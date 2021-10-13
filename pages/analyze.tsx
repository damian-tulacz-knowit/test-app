import type { NextPage } from "next";
import style from "../styles/analyze.module.scss";
import Button from "../UI/Button/Button";

const Analyze: NextPage = () => {
  return (
    <div className={style.page}>
      <div className={style["page__content"]}>Analyze Page</div>

      <div className={style["page__actions"]}>
        <div className={style.state}></div>
        <Button attributes={{ disabled: true }} className={style["to-right"]}>
          Submit
        </Button>
      </div>
    </div>
  );
};

export default Analyze;
