import cn from "classnames";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function SignUpForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();
  const className = {
    label: cn("form-label text-lg fw-medium color-palette-1 mb-10"),
  };

  const submitHandler = () => {
    const userForm = {
      name,
      email,
      password,
    };
    localStorage.setItem("user-form", JSON.stringify(userForm));
    router.push("/sign-up-photo");
  };

  useEffect(() => {
    const getLocalForm = localStorage.getItem("user-form");
    const localForm = JSON.parse(getLocalForm);
    if (localForm) {
      setName(localForm.name ?? "");
      setEmail(localForm.email ?? "");
      setPassword(localForm.password ?? "");
    }
  }, []);

  return (
    <>
      <h2 className="text-4xl fw-bold color-palette-1 mb-10">Sign Up</h2>
      <p className="text-lg color-palette-1 m-0">
        Daftar dan bergabung dengan kami
      </p>
      <div className="pt-50">
        <label className={className.label}>Full Name</label>
        <input
          type="text"
          className="form-control rounded-pill text-lg"
          aria-describedby="name"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="pt-30">
        <label className={className.label}>Email Address</label>
        <input
          type="email"
          className="form-control rounded-pill text-lg"
          aria-describedby="email"
          placeholder="Enter your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="pt-30">
        <label className={className.label}>Password</label>
        <input
          type="password"
          className="form-control rounded-pill text-lg"
          aria-describedby="password"
          placeholder="Your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="button-group d-flex flex-column mx-auto pt-50">
        <button
          className="btn btn-sign-up fw-medium text-lg text-white rounded-pill mb-16"
          type="button"
          onClick={submitHandler}
        >
          Continue
        </button>
        <a
          className="btn btn-sign-in fw-medium text-lg color-palette-1 rounded-pill"
          href="/sign-in"
          role="button"
        >
          Sign In
        </a>
      </div>
    </>
  );
}
