import MemberSidebar from "../../components/organisms/MemberSidebar";
import OverviewContent from "../../components/organisms/OverviewContent";

export default function Member() {
  return (
    <section className="overview overflow-auto">
      <MemberSidebar activeMenu="overview" />
      <OverviewContent />
    </section>
  );
}
