import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";
import { useEffect, useState } from "react";
import { JWTPayloadTypes, UserTypes } from "../../../services/data-types";

export default function SidebarProfile() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    avatar: "",
  });

  const IMG = process.env.NEXT_PUBLIC_IMG_URL;

  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      const jwtToken = atob(token);
      const payload: JWTPayloadTypes = jwtDecode(jwtToken);
      const userPayload: UserTypes = payload.player;
      setUser(userPayload);
    }
  }, []);

  return (
    <div className="user text-center pb-50 pe-30">
      <img
        src={`${IMG}/${user.avatar}`}
        width="90"
        height="90"
        className="img-fluid mb-20"
        alt="Avatar"
      />
      <h2 className="fw-bold text-xl color-palette-1 m-0">{user.name}</h2>
      <p className="color-palette-2 m-0">{user.email}</p>
    </div>
  );
}
