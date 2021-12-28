import Cookies from "js-cookie";
import { useRouter } from "next/router";
import MenuItem from "./MenuItem";
import Footer from "./SidebarFooter";
import Profile from "./SidebarProfile";

interface MemberSidebarProps {
  activeMenu?: "overview" | "transactions" | "settings";
}

export default function MemberSidebar(props: Partial<MemberSidebarProps>) {
  const { activeMenu } = props;

  const router = useRouter();

  const logoutHandler = () => {
    Cookies.remove("token");
    router.push("/sign-in");
  };

  return (
    <section className="sidebar">
      <div className="content pt-50 pb-30 ps-30">
        <Profile />
        <div className="menus">
          <MenuItem
            title="Overview"
            icon="ic-menu-overview"
            href="/member"
            active={activeMenu === "overview"}
          />
          <MenuItem
            title="Transactions"
            icon="ic-menu-transactions"
            href="/member/transactions"
            active={activeMenu === "transactions"}
          />
          <MenuItem title="Messages" icon="ic-menu-messages" href="/member" />
          <MenuItem title="Card" icon="ic-menu-card" href="/member" />
          <MenuItem title="Rewards" icon="ic-menu-rewards" href="/member" />
          <MenuItem
            title="Settings"
            icon="ic-menu-settings"
            href="/member/edit-profile"
            active={activeMenu === "settings"}
          />
          <MenuItem
            title="Logout"
            icon="ic-menu-logout"
            onClick={logoutHandler}
          />
        </div>
        <Footer />
      </div>
    </section>
  );
}
