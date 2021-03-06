import Image from "next/image";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { postSignUp } from "../services/auth";
import { CategoryTypes } from "../services/data-types";
import { getGameCategoy } from "../services/player";

export default function SignUpPhoto() {
  const router = useRouter();

  const [categories, setCategories] = useState([]);
  const [favorite, setFavorite] = useState("");
  const [image, setImage] = useState<any>(null);
  const [imagePreview, setImagePreview] = useState<any>("/icon/upload.svg");
  const [localForm, setLocalForm] = useState({
    name: "",
    email: "",
  });

  const getGameCategoryAPI = useCallback(async () => {
    const res = await getGameCategoy();
    setCategories(res.data);
    setFavorite(res.data[0]._id);
  }, [getGameCategoy]);

  const submitHandler = async () => {
    const getLocalForm = localStorage.getItem("user-form");
    const form = JSON.parse(getLocalForm!);
    const fData = new FormData();
    fData.append("image", image);
    fData.append("name", form.name);
    fData.append("username", form.name);
    fData.append("email", form.email);
    fData.append("password", form.password);
    fData.append("phoneNumber", "08123");
    fData.append("role", "user");
    fData.append("status", "Y");
    fData.append("favorite", favorite);

    const res = await postSignUp(fData);
    if (res.success) {
      toast.success("Registrasi berhasil");
      localStorage.removeItem("user-form");
      router.push("/sign-up-success");
    } else {
      toast.error(res.message);
      router.push("/sign-up");
    }
  };

  useEffect(() => {
    getGameCategoryAPI();
  }, []);

  useEffect(() => {
    const getLocalForm = localStorage.getItem("user-form");
    if (!getLocalForm) router.replace("/sign-up");
    setLocalForm(JSON.parse(getLocalForm!));
  }, []);

  return (
    <section className="sign-up-photo mx-auto pt-lg-227 pb-lg-227 pt-130 pb-50">
      <div className="container mx-auto">
        <form action="">
          <div className="form-input d-md-block d-flex flex-column">
            <div>
              <div className="mb-20">
                <div className="image-upload text-center">
                  <label htmlFor="avatar">
                    {imagePreview ? (
                      <img
                        src={imagePreview}
                        className="img-upload"
                        alt="Upload avatar"
                      />
                    ) : (
                      <Image src="/icon/upload.svg" width="120" height="120" />
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
                      setImage(img);
                    }}
                  />
                </div>
              </div>
              <h2 className="fw-bold text-xl text-center color-palette-1 m-0">
                {localForm.name}
              </h2>
              <p className="text-lg text-center color-palette-1 m-0">
                {localForm.email}
              </p>
              <div className="pt-50 pb-50">
                <label
                  htmlFor="category"
                  className="form-label text-lg fw-medium color-palette-1 mb-10"
                >
                  Favorite Game
                </label>
                <select
                  id="category"
                  name="category"
                  className="form-select d-block w-100 rounded-pill text-lg"
                  aria-label="Favorite Game"
                  value={favorite}
                  onChange={(e) => setFavorite(e.target.value)}
                >
                  {categories.map((category: CategoryTypes) => (
                    <option value={category._id} key={category._id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="button-group d-flex flex-column mx-auto">
              <button
                className="btn btn-create fw-medium text-lg text-white rounded-pill mb-16"
                type="button"
                onClick={submitHandler}
              >
                Create My Account
              </button>
              <a
                className="btn btn-tnc text-lg color-palette-1 text-decoration-underline pt-15"
                href="#"
                role="button"
              >
                Terms & Conditions
              </a>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
