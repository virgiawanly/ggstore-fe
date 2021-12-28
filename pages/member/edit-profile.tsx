import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Input from "../../components/atoms/Input";
import MemberSidebar from "../../components/organisms/MemberSidebar";
import { JWTPayloadTypes, UserTypes } from "../../services/data-types";
import { putUpdateProfile } from "../../services/member";

interface userStateTypes {
  name: string;
  email: string;
  avatar: any;
}

export default function EditProfile() {
  const router = useRouter();

  const [user, setUser] = useState<userStateTypes>({
    name: "",
    email: "",
    avatar: "",
  });
  const [imagePreview, setImagePreview] = useState("");
  const IMG = process.env.NEXT_PUBLIC_IMG_URL;

  const submitHandler = async () => {
    const fData = new FormData();
    fData.append("image", user.avatar);
    fData.append("name", user.name);

    const res = await putUpdateProfile(fData);

    if (!res.success) {
      toast.error(res.message);
    } else {
      Cookies.remove("token");
      router.push("/sign-in");
    }
  };

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
    <section className="edit-profile overflow-auto">
      <MemberSidebar activeMenu="settings" />
      <main className="main-wrapper">
        <div className="ps-lg-0">
          <h2 className="text-4xl fw-bold color-palette-1 mb-30">Settings</h2>
          <div className="bg-card pt-30 ps-30 pe-30 pb-30">
            <form action="">
              <div className="photo d-flex">
                <div className="image-upload">
                  <label htmlFor="avatar">
                    {imagePreview ? (
                      <img
                        src={imagePreview}
                        width="90"
                        height="90"
                        alt="Edit Avatar"
                        style={{ borderRadius: "100%", objectFit: "cover" }}
                      />
                    ) : (
                      <img
                        src={`${IMG}/${user.avatar}`}
                        width="90"
                        height="90"
                        alt="Edit Avatar"
                        style={{ borderRadius: "100%", objectFit: "cover" }}
                      />
                    )}
                  </label>
                  <input
                    id="avatar"
                    type="file"
                    name="avatar"
                    accept="image/png, image/jpeg"
                    onChange={(e) => {
                      const img = e.target.files![0];
                      setImagePreview(URL.createObjectURL(img));
                      setUser({ ...user, avatar: img });
                    }}
                  />
                </div>
              </div>
              <div className="pt-30">
                <Input
                  label="Full Name"
                  value={user.name}
                  onChange={(e) => setUser({ ...user, name: e.target.value })}
                />
              </div>
              <div className="pt-30">
                <Input
                  label="Email Address"
                  value={user.email}
                  onChange={(e) => setUser({ ...user, email: e.target.value })}
                  disabled
                />
              </div>
              <div className="button-group d-flex flex-column pt-50">
                <button
                  type="button"
                  className="btn btn-save fw-medium text-lg text-white rounded-pill"
                  onClick={submitHandler}
                >
                  Save My Profile
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </section>
  );
}
