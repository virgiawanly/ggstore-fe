import { useEffect } from "react";
import Footer from "../../components/organisms/Footer";
import Navbar from "../../components/organisms/Navbar";
import TopupForm from "../../components/organisms/TopupForm";
import TopupItem from "../../components/organisms/TopupItem";
import {
  GameItemTypes,
  NominalTypes,
  PaymentTypes,
} from "../../services/data-types";
import { getFeaturedGames, getVoucherDetail } from "../../services/player";

interface DetailProps {
  gameItem: GameItemTypes;
  nominals: NominalTypes[];
  payments: PaymentTypes[];
}

export default function Detail(props: DetailProps) {
  const { gameItem, nominals, payments } = props;
  useEffect(() => {
    localStorage.setItem("data-item", JSON.stringify(gameItem));
  }, []);
  return (
    <>
      <Navbar />
      <section className="detail pt-lg-60 pb-50">
        <div className="container-xxl container-fluid">
          <div className="detail-header pb-50">
            <h2 className="text-4xl fw-bold color-palette-1 text-start mb-10">
              Top Up
            </h2>
            <p className="text-lg color-palette-1 mb-0">
              Perkuat akun dan jadilah pemenang
            </p>
          </div>
          <div className="row">
            <div className="col-xl-3 col-lg-4 col-md-5 pb-30 pb-md-0 pe-md-25 text-md-start">
              <TopupItem data={gameItem} type="mobile" />
            </div>
            <div className="col-xl-9 col-lg-8 col-md-7 ps-md-25">
              <TopupItem data={gameItem} type="desktop" />
              <hr />
              <TopupForm nominals={nominals} payments={payments} />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export const getStaticPaths = async () => {
  const res = await getFeaturedGames();
  const paths = res.data.map((item: GameItemTypes) => ({
    params: {
      id: item._id,
    },
  }));
  return {
    paths,
    fallback: false,
  };
};

interface GetStaticProps {
  params: {
    id: string;
  };
}

export const getStaticProps = async (context: GetStaticProps) => {
  const { params } = context;
  const res = await getVoucherDetail(params.id);
  return {
    props: {
      gameItem: res.data.detail,
      payments: res.data.payments,
      nominals: res.data.detail.nominals,
    },
  };
};
