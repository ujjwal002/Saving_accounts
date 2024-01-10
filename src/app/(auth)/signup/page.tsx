"use client";
import Link from "next/link";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function Signup() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  async function handelOnSubmit() {
    const res = await axios.post("/api/auth/signup", {
      email: formData.email,
      password: formData.password,
    });
    console.log(":hiii");

    console.log(res);

    if (res.status === 200) {
      console.log("in the if");

      toast.success("User created successfully!");
      console.log(res.data.success);
    } else {
      console.log("in the else");

      toast.error("User already exist");
    }
    console.log(formData);
  }
  return (
    <div className="login-box">
      <h2>Signup</h2>
      <form>
        <div className="user-box">
          <input
            type="text"
            name=""
            required={true}
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />S
          <label>Username</label>
        </div>
        <div className="user-box">
          <input
            type="password"
            name=""
            required={true}
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
          />
          <label>Password</label>
        </div>
        <div className="style_a" onClick={handelOnSubmit}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          signup
        </div>
        <div>
          <Link href="/login" className="redirect_login">
            Already have an account ?{" "}
            <span className="signup_button">Login</span>
          </Link>
        </div>
      </form>
    </div>
  );
}
