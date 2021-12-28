import jwtDecode from "jwt-decode";
import MemberSidebar from "../../components/organisms/MemberSidebar";
import OverviewContent from "../../components/organisms/OverviewContent";
import { JWTPayloadTypes, UserTypes } from "../../services/data-types";

export default function Member() {
  return (
    <section className="overview overflow-auto">
      <MemberSidebar activeMenu="overview" />
      <OverviewContent />
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
  const jwtToken = Buffer.from(token, "base64").toString("ascii");
  const payload: JWTPayloadTypes = jwtDecode(jwtToken);
  const userPayload: UserTypes = payload.player;
  const IMG = process.env.NEXT_PUBLIC_IMG_URL;
  userPayload.avatar = `${IMG}/${userPayload.avatar}`;
  return {
    props: {
      user: userPayload,
    },
  };
};
