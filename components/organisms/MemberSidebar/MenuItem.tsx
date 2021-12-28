import Image from "next/image";
import Link from "next/link";
import cn from "classnames";

interface MenuItemProps {
  title: string;
  icon:
    | "ic-menu-overview"
    | "ic-menu-transactions"
    | "ic-menu-messages"
    | "ic-menu-card"
    | "ic-menu-rewards"
    | "ic-menu-settings"
    | "ic-menu-logout";
  active?: boolean;
  href?: string;
  onClick?: () => void;
}

export default function MenuItem(props: Partial<MenuItemProps>) {
  const { title, icon, active, href, onClick } = props;
  const classItem = cn({
    item: true,
    "mb-30": true,
    active: active,
  });
  return (
    <div className={classItem} onClick={onClick}>
      <div className="me-3">
        <Image src={`/icon/${icon}.svg`} width="25" height="25" />
      </div>
      <p className="item-title m-0">
        {onClick && (
          <a role="button" className="text-lg text-decoration-none">
            {title}
          </a>
        )}
        {!onClick && (
          <Link href={href!}>
            <a className="text-lg text-decoration-none">{title}</a>
          </Link>
        )}
      </p>
    </div>
  );
}
