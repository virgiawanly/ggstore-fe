import TransactionDetailContent from "../../../components/organisms/TransactionDetailContent";
import { TransactionHistoryTypes } from "../../../services/data-types";
import { getTransactionDetail } from "../../../services/member";

interface TransactionDetailProps {
  transactionDetail: TransactionHistoryTypes;
}

export default function Detail(props: TransactionDetailProps) {
  const { transactionDetail } = props;
  return (
    <section className="transactions-detail overflow-auto">
      <TransactionDetailContent data={transactionDetail} />
    </section>
  );
}

interface GetServerSideProps {
  req: {
    cookies: {
      token: string;
    };
  };
  params: {
    idTrx: string;
  };
}

export const getServerSideProps = async ({
  req,
  params,
}: GetServerSideProps) => {
  const { token } = req.cookies;
  const { idTrx } = params;
  if (!token) {
    return {
      redirect: {
        destination: "/sign-in",
        permanent: false,
      },
    };
  }
  const jwtToken = Buffer.from(token, "base64").toString("ascii");
  const res = await getTransactionDetail(idTrx, jwtToken);
  return {
    props: {
      transactionDetail: res.data,
    },
  };
};
