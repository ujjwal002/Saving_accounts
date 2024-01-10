"use client";
import Link from "next/link";
import { useState } from "react";
import { toast } from "react-hot-toast";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  async function handelLogin() {
    const res = await axios.post("/api/auth/login", {
      email: formData.email,
      password: formData.password,
    });
    if (res.data.success) {
      toast.success("Successfully loggedIn!");
      console.log(res.data.success);
      setTimeout(() => {
        // router.push("/home");
        router.replace("/home");
        // router.forward('/home');
        // router.refresh('/home')
      }, 1000);
    } else {
      toast.error("User doesn`t existI");
    }
    console.log(formData);
  }
  return (
    <div className="login-box">
      <h2>Login</h2>
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
          />
          <label>Username</label>
        </div>
        <div className="user-box">
          <input
            type="password"
            name=""
            value={formData.password}
            required={true}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
          />
          <label>Password</label>
        </div>
        <div className="style_a" onClick={handelLogin}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Login
        </div>
        <div className="all_link">
          <Link href="/signup" className="redirect_login">
            Don`t have an account ?{" "}
            <span className="signup_button">Signup</span>
          </Link>
          {/* <div>
          <Link href="/signup" className="redirect_login">
            Forgot password ?{" "}
            <span className="signup_button">Click here</span>
          </Link>
          </div> */}
        </div>
      </form>
    </div>
  );
}
