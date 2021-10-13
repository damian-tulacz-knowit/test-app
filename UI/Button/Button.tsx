import { FC } from "react";
import style from "./Button.module.scss";
import Link from "next/link";

const Button: FC<{
  href?: string;
  style?: string;
  className?: string;
  attributes?: {};
}> = (props) => {
  let className = style.button;

  switch (props.style) {
    case "white":
      className += ` ${style["button--white"]}`;
      break;
  }

  if (props.className) {
    className += ` ${props.className}`;
  }

  const button = (
    <button {...props.attributes} className={className}>
      {props.children}
    </button>
  );

  if (props.href) {
    return <Link href={props.href}>{button}</Link>;
  }

  return <>{button}</>;
};

export default Button;
