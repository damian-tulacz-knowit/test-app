import Link from "next/link";
import { useRouter } from "next/router";
import { FC } from "react";
import style from "./NavLink.module.scss";

const NavLink: FC<{ href: string; exact?: boolean }> = (props) => {
  const { pathname } = useRouter();
  const isActive = props.exact
    ? pathname === props.href
    : pathname.startsWith(props.href);

  return (
    <Link href={props.href}>
      <a className={isActive ? style.active : ""}>{props.children}</a>
    </Link>
  );
};

NavLink.defaultProps = {
  exact: true,
};

export default NavLink;
