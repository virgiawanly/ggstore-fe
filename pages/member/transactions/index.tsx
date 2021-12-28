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

interface GetServerSideProps {
  req: {
    cookies: {
      token: string;
    };
  };
}

export const getServerSideProps = async ({ req }: GetServerSideProps) => {
  const { token } = req.cookies;
  if (!token) {
    return {
      redirect: {
        destination: "/sign-in",
        permanent: false,
      },
    };
  }
  return {
    props: {},
  };
};
