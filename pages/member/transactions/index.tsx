import MemberSidebar from "../../../components/organisms/MemberSidebar";
import TransactionContent from "../../../components/organisms/TransactionContent";

export default function Transactions() {
  return (
    <section className="transactions overflow-auto">
      <MemberSidebar activeMenu="transactions" />
      <TransactionContent />
    </section>
  );
}
