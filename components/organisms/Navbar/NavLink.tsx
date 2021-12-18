import Link from "next/link";
import cn from "classnames";

interface NavLinkProps {
  title: string;
  active?: boolean;
  href: string;
}

export default function NavLink(props: Partial<NavLinkProps>) {
  const { title, active, href = "/" } = props;
  const linkClasses = cn({
    "nav-link": true,
    active,
  });
  return (
    <li className="nav-item my-auto">
      <Link href={href}>
        <a className={linkClasses} aria-current="page">
          {title}
        </a>
      </Link>
    </li>
  );
}
